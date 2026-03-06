'use client'

import { useEffect, useState } from 'react'
import { PWAInstallPrompt } from '@/components/pwa-install-prompt'

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW registered:', registration.scope)
          })
          .catch((error) => {
            console.log('SW registration failed:', error)
          })
      })
    }
  }, [isMounted])

  return (
    <>
      {children}
      <PWAInstallPrompt />
    </>
  )
}
