import { Hero } from './Hero'
import { OfferBand } from './OfferBand'
import { FeatureRail } from './FeatureRail'
import { ProofSection } from '../../components/ProofSection'
import { PowerGrid } from './PowerGrid'
import { BonusSection } from './BonusSection'
import { FinalCta } from './FinalCta'
import { usePageMeta } from '../../hooks/usePageMeta'

export function WhatsappPage() {
    usePageMeta(
        'Módulo WhatsApp Maskot — Atenda 24/7 com IA e ganhe o CRM Crescimento de bônus',
        'WhatsApp oficial da Meta com IA que agenda visitas e atualiza o funil sozinha. Contrate o módulo WhatsApp do Maskot e ganhe o CRM Crescimento de bônus.',
    )

    return (
        <>
            <Hero />
            <OfferBand />
            <FeatureRail />
            <ProofSection />
            <PowerGrid />
            <BonusSection />
            <FinalCta />
        </>
    )
}
