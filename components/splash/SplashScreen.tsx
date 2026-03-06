"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-white"
    >
      <div className="relative flex w-full max-w-xl flex-col items-center px-6 sm:px-8 text-center">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
        >
          {/* Premium Glow Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/5 blur-2xl"
            />
          </div>

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-6 sm:mb-8 flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center"
          >
            {/* Subtle Shadow Under Logo */}
            <div className="absolute bottom-0 h-6 w-16 sm:h-8 sm:w-24 rounded-[100%] bg-slate-900/10 blur-lg" />
            
            {/* Main Logo */}
            <motion.img
              src="/assets/img/shadow-bg.png"
              alt="PDF Zen Studio Logo"
              className="relative h-16 w-16 sm:h-24 sm:w-24 object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Brand Name - Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-[var(--font-display)] text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              PDF Zen Studio
            </h1>
            
            {/* Divider Line */}
            <div className="mx-auto mt-3 sm:mt-4 h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            
            <p className="mt-3 sm:mt-4 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Professional PDF Workspace
            </p>
          </motion.div>

          {/* Premium Loading Bar */}
          <div className="relative mx-auto mt-8 sm:mt-10 h-px w-full max-w-xs overflow-hidden bg-gradient-to-r from-transparent via-slate-200 to-transparent">
            <motion.div
              className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-slate-900 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5, repeat: 1 }}
            />
          </div>

          {/* Loading Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 sm:mt-6 flex items-center justify-center gap-2"
          >
            {/* Pulsing Dot */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-slate-900"
            />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-slate-400">
              Initializing
            </span>
          </motion.div>
        </motion.div>

        {/* Premium Footer - Stacked on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              100% Local
            </span>
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
          </div>
          <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Zero Uploads
            </span>
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
          </div>
          <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Maximum Privacy
            </span>
            <div className="h-px w-6 sm:w-8 bg-slate-200" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
