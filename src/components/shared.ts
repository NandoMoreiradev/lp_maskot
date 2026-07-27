import styled from 'styled-components'

export const SectionHead = styled.div`
    max-width: 640px;
    margin-bottom: 3.25rem;
`

export const Kicker = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--wa-dark);
    margin-bottom: 0.85rem;
`

export const SectionTitle = styled.h2`
    font-size: 2.15rem;
    font-weight: 800;
    letter-spacing: -0.015em;
    margin-bottom: 0.9rem;
`

export const SectionSub = styled.p`
    color: var(--slate);
    font-size: 1.06rem;
    line-height: 1.6;
`

export const VisualCard = styled.div`
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow-md);
    padding: 1.4rem;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
`

export const ChipRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
`

export const Chip = styled.div<{ $tone?: 'wa' | 'ig' | 'fb' }>`
    background: var(--paper);
    border: 1px solid var(--line);
    padding: 0.5rem 0.85rem;
    border-radius: 9px;
    font-size: 0.82rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        color: ${(p) => (p.$tone === 'wa' ? 'var(--wa-dark)' : p.$tone === 'ig' ? '#C13584' : p.$tone === 'fb' ? '#1877F2' : 'var(--blue)')};
    }
`

export const StatGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
`

export const StatCard = styled.div`
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.9rem 1rem;

    .lbl {
        font-size: 0.72rem;
        color: var(--slate);
        font-weight: 700;
        margin-bottom: 0.3rem;
    }
    .val {
        font-family: var(--font-mono);
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--ink);
        font-variant-numeric: tabular-nums;
    }
`

export const Heat = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2px;
    grid-column: 1 / -1;

    div {
        height: 16px;
        border-radius: 2px;
        background: var(--wa);
    }
`
