import styled from 'styled-components'
import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

const RevealDiv = styled.div<{ $inView: boolean }>`
    opacity: ${(p) => (p.$inView ? 1 : 0)};
    transform: ${(p) => (p.$inView ? 'none' : 'translateY(22px)')};
    transition: opacity 0.7s cubic-bezier(0.2, 0.7, 0.3, 1), transform 0.7s cubic-bezier(0.2, 0.7, 0.3, 1);
`

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
    const { ref, inView } = useReveal<HTMLDivElement>()
    return (
        <RevealDiv ref={ref} $inView={inView} className={className}>
            {children}
        </RevealDiv>
    )
}
