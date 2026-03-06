import { PDFDocument } from "pdf-lib";
import type { CompressionLevel } from "../types";

export async function compressPDF(
  file: File,
  compressionLevel: CompressionLevel,
  onProgress: (progress: number) => void
): Promise<Blob> {
  // Load PDF.js for rendering pages
  const pdfjsLib = await loadPDFJSFromCDN();
  
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdfDoc = await loadingTask.promise;
  const totalPages = pdfDoc.numPages;
  
  // Create new PDF
  const newPdf = await PDFDocument.create();
  
  // Compression settings - scale determines image resolution (lower = smaller file)
  const settings = {
    low: { scale: 1.0, quality: 0.85 },      // Archive - full resolution, light compression
    medium: { scale: 0.85, quality: 0.7 },   // Balanced - slight downsample
    high: { scale: 0.7, quality: 0.55 },     // Web - moderate compression
  };
  
  const { scale, quality } = settings[compressionLevel];
  
  for (let i = 0; i < totalPages; i++) {
    const page = await pdfDoc.getPage(i + 1);
    const viewport = page.getViewport({ scale });
    
    // Render page to canvas
    const canvas = document.createElement("canvas");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const context = canvas.getContext("2d");
    if (context) {
      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;
      
      // Convert to compressed JPEG
      const jpegDataUrl = canvas.toDataURL("image/jpeg", quality);
      const jpegBytes = await fetch(jpegDataUrl).then(res => res.arrayBuffer());
      
      // Embed image in new PDF
      const jpegImage = await newPdf.embedJpg(new Uint8Array(jpegBytes));
      const pdfPage = newPdf.addPage([viewport.width, viewport.height]);
      
      pdfPage.drawImage(jpegImage, {
        x: 0,
        y: 0,
        width: viewport.width,
        height: viewport.height,
      });
    }
    
    onProgress(Math.round(((i + 1) / totalPages) * 100));
  }
  
  const pdfBytes = await newPdf.save();
  return new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
}

// Load PDF.js from CDN
async function loadPDFJSFromCDN(): Promise<any> {
  if (typeof window === 'undefined') {
    throw new Error('PDF.js can only run in browser');
  }
  
  if ((window as any).pdfjsLib) {
    return (window as any).pdfjsLib;
  }
  
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib;
      if (pdfjsLib) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(pdfjsLib);
      } else {
        reject(new Error("PDF.js did not expose pdfjsLib"));
      }
    };
    script.onerror = () => reject(new Error("Failed to load PDF.js from CDN"));
    document.head.appendChild(script);
  });
}
