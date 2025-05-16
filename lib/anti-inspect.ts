"use client"

export function setupAntiInspection() {
  if (typeof window === "undefined") return

  // Disable right-click context menu
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    return false
  })

  // Disable keyboard shortcuts for developer tools
  document.addEventListener("keydown", (e) => {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault()
      return false
    }

    // Disable Ctrl+Shift+I / Cmd+Option+I
    if ((e.ctrlKey && e.shiftKey && e.key === "I") || (e.metaKey && e.altKey && e.key === "i")) {
      e.preventDefault()
      return false
    }

    // Disable Ctrl+Shift+J / Cmd+Option+J
    if ((e.ctrlKey && e.shiftKey && e.key === "J") || (e.metaKey && e.altKey && e.key === "j")) {
      e.preventDefault()
      return false
    }

    // Disable Ctrl+Shift+C / Cmd+Option+C
    if ((e.ctrlKey && e.shiftKey && e.key === "C") || (e.metaKey && e.altKey && e.key === "c")) {
      e.preventDefault()
      return false
    }

    // Disable Ctrl+U / Cmd+Option+U (View Source)
    if ((e.ctrlKey && e.key === "u") || (e.metaKey && e.altKey && e.key === "u")) {
      e.preventDefault()
      return false
    }

    return true
  })

  // Detect DevTools opening
  const devToolsDetector = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160
    const heightThreshold = window.outerHeight - window.innerHeight > 160

    if (widthThreshold || heightThreshold) {
      document.body.innerHTML =
        '<div style="text-align:center;padding:50px;"><h1>Developer Tools Detected</h1><p>This site is protected. Please close developer tools to continue.</p></div>'
    }
  }

  // Check periodically
  setInterval(devToolsDetector, 1000)

  // Add console warning
  console.log("%c⚠️ Warning!", "color: red; font-size: 30px; font-weight: bold;")
  console.log(
    "%cThis is a protected website. Using browser developer tools to inspect or modify this application is prohibited and may violate our terms of service.",
    "font-size: 16px;",
  )
}
