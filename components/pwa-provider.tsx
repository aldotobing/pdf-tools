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
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration.scope)

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('New content available, please refresh.')
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('SW registration failed:', error)
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
