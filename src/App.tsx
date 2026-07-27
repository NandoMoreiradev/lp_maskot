import { GlobalStyle } from './styles/GlobalStyle'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OfferBand } from './components/OfferBand'
import { FeatureRail } from './components/FeatureRail'
import { ProofSection } from './components/ProofSection'
import { PowerGrid } from './components/PowerGrid'
import { BonusSection } from './components/BonusSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'
import { CookieConsent } from './components/CookieConsent'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />
            <OfferBand />
            <FeatureRail />
            <ProofSection />
            <PowerGrid />
            <BonusSection />
            <FinalCta />
            <Footer />
            <FloatingWhatsapp />
            <CookieConsent />
        </>
    )
}
