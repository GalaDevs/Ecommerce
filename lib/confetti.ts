// This is a simplified version of canvas-confetti for the demo
// In a real project, you would import from 'canvas-confetti'

export default function confetti(options: any) {
  console.log("Confetti effect triggered with options:", options)
  // In a real implementation, this would trigger the confetti animation
  return {
    reset: () => console.log("Confetti reset"),
  }
}
