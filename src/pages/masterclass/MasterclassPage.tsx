import { useEffect, useState } from 'react'
import { Hero } from './Hero'
import { Transition } from './Transition'
import { Pillars } from './Pillars'
import { Comparison } from './Comparison'
import { ValueCta } from './ValueCta'
import { usePageMeta } from '../../hooks/usePageMeta'

// Tempo até liberar o conteúdo abaixo do vídeo (10 min).
const UNLOCK_AFTER_MS = 10 * 60 * 1000
const STARTED_AT_KEY = 'masterclass:startedAt'

// O início fica no sessionStorage para o timer não reiniciar ao recarregar a página na mesma aba.
function getStartedAt(): number {
    try {
        const saved = Number(sessionStorage.getItem(STARTED_AT_KEY))
        if (saved) return saved
        const now = Date.now()
        sessionStorage.setItem(STARTED_AT_KEY, String(now))
        return now
    } catch {
        return Date.now()
    }
}

// ?liberar=1 libera o conteúdo na hora, para revisão da página.
function useUnlocked(): boolean {
    const [unlocked, setUnlocked] = useState(() => new URLSearchParams(window.location.search).has('liberar'))

    useEffect(() => {
        if (unlocked) return
        const remaining = Math.max(0, getStartedAt() + UNLOCK_AFTER_MS - Date.now())
        const t = window.setTimeout(() => setUnlocked(true), remaining)
        return () => window.clearTimeout(t)
    }, [unlocked])

    return unlocked
}

export function MasterclassPage() {
    usePageMeta(
        'Masterclass — O Protocolo das 4 Etapas para dobrar a conversão de matrículas | Maskot Edu',
        'Aula gratuita para diretores de escolas particulares: o sistema comercial para converter visitas e matrículas pelo WhatsApp, e como automatizá-lo com o Maskot Edu.',
    )
    const unlocked = useUnlocked()

    return (
        <>
            <Hero />
            {unlocked && (
                <>
                    <Transition />
                    <Pillars />
                    <Comparison />
                    <ValueCta />
                </>
            )}
        </>
    )
}
