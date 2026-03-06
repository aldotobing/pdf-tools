"use client";

import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="relative flex w-full max-w-lg flex-col items-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.6)] backdrop-blur-2xl"
        >
          {/* Logo with Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center"
          >
            {/* Shadow glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/20 to-transparent blur-xl" />
            
            <motion.img
              src="/assets/img/shadow-bg.png"
              alt="PDF Zen Studio Logo"
              className="relative h-20 w-20 object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-slate-900"
          >
            PDF Zen Studio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-3 text-sm font-medium text-slate-500"
          >
            Professional PDF Workspace
          </motion.p>

          {/* Loading Bar */}
          <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4 text-xs font-medium text-slate-400"
          >
            Initializing secure environment...
          </motion.p>
        </motion.div>

        {/* Footer Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-xs font-medium text-slate-400"
        >
          100% Local • Zero Uploads • Maximum Privacy
        </motion.p>
      </div>
    </motion.div>
  );
}
