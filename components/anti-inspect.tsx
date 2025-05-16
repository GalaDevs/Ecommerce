"use client"

import { useEffect } from "react"
import { setupAntiInspection } from "@/lib/anti-inspect"

export default function AntiInspect() {
  useEffect(() => {
    setupAntiInspection()
  }, [])

  return null
}
