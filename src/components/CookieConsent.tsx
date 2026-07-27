import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { grantConsent, denyConsent, hasStoredConsentChoice } from '../lib/initTracking'

const Bar = styled.div`
    position: fixed;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    z-index: 70;
    max-width: 640px;
    margin: 0 auto;
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: var(--shadow-lg);
    padding: 1.1rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    p {
        flex: 1;
        min-width: 200px;
        font-size: 0.82rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const Actions = styled.div`
    display: flex;
    gap: 0.6rem;
`

const Accept = styled.button`
    background: var(--wa);
    color: #fff;
    border: none;
    font-weight: 700;
    font-size: 0.82rem;
    padding: 0.55rem 1rem;
    border-radius: 8px;
    cursor: pointer;
`

const Reject = styled.button`
    background: transparent;
    color: var(--slate);
    border: 1px solid var(--line);
    font-weight: 600;
    font-size: 0.82rem;
    padding: 0.55rem 1rem;
    border-radius: 8px;
    cursor: pointer;
`

export function CookieConsent() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(!hasStoredConsentChoice())
    }, [])

    if (!visible) return null

    return (
        <Bar role="dialog" aria-label="Preferências de cookies">
            <p>
                Usamos cookies de analytics e anúncios para medir o desempenho desta página. Você pode aceitar ou
                recusar.
            </p>
            <Actions>
                <Reject
                    onClick={() => {
                        denyConsent()
                        setVisible(false)
                    }}
                >
                    Recusar
                </Reject>
                <Accept
                    onClick={() => {
                        grantConsent()
                        setVisible(false)
                    }}
                >
                    Aceitar
                </Accept>
            </Actions>
        </Bar>
    )
}
