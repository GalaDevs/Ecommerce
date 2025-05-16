import type React from "react"
// This is a simplified version of framer-motion for the demo
// In a real project, you would import from 'framer-motion'

export const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }: any) => <h4 {...props}>{children}</h4>,
  ul: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
  li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  img: ({ ...props }: any) => <img {...props} />,
}

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
