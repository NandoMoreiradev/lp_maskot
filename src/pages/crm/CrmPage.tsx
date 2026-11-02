import { useEffect } from 'react'
import { Hero } from './Hero'
import { StepsSection } from './StepsSection'
import { FeatureRail } from './FeatureRail'
import { PowerGrid } from './PowerGrid'
import { ProofSection } from '../../components/ProofSection'
import { TestimonialsPlaceholder } from './TestimonialsPlaceholder'
import { PricingTeaser } from './PricingTeaser'
import { FinalCta } from './FinalCta'
import { usePageMeta } from '../../hooks/usePageMeta'

export function CrmPage() {
    usePageMeta(
        'CRM Maskot — Capte, atenda e matricule em um sistema só',
        'O CRM educacional que substitui planilha e ferramentas soltas: funil visual de matrículas, atendimento organizado, automação de marketing e IA.',
    )

    // Links externos como /#precos recarregam a página antes do React montar o conteúdo, então o browser não acha a âncora.
    useEffect(() => {
        const id = window.location.hash.slice(1)
        if (!id) return
        const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100)
        return () => window.clearTimeout(t)
    }, [])

    return (
        <>
            <Hero />
            <StepsSection />
            <FeatureRail />
            <PowerGrid />
            <ProofSection />
            <TestimonialsPlaceholder />
            <PricingTeaser />
            <FinalCta />
        </>
    )
}
