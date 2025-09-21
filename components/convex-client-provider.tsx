"use client"

import { ConvexAuthProvider } from "@convex-dev/auth/react"
import { ConvexReactClient } from "convex/react"
import { ReactNode, useState, useEffect } from "react"

// Create a fallback client to prevent hydration issues
const createConvexClient = () => {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL
  if (convexUrl) {
    return new ConvexReactClient(convexUrl)
  }
  // Return a mock client for development/build when no URL is provided
  return new ConvexReactClient("https://mock-convex-url.com")
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const [convexClient] = useState(() => createConvexClient())
  const [isConfigured, setIsConfigured] = useState(false)

  useEffect(() => {
    // Check if Convex is properly configured
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL
    setIsConfigured(!!convexUrl && convexUrl !== "https://mock-convex-url.com")
  }, [])

  // Always provide the ConvexAuthProvider to prevent hydration issues
  // If not configured, Convex hooks will gracefully handle the mock client
  return (
    <ConvexAuthProvider client={convexClient}>
      {children}
    </ConvexAuthProvider>
  )
}
