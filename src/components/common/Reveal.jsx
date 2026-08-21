import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={'reveal ' + (visible ? 'reveal--visible ' : '') + className} style={{ '--reveal-delay': delay + 'ms' }}>{children}</div>
}
