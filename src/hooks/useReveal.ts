import { useEffect, useRef, useState } from 'react'

/** Replica o efeito de revelação suave ao rolar usado no mockup aprovado, respeitando prefers-reduced-motion. */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T | null>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInView(true)
            return
        }
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return { ref, inView }
}
