import { Outlet } from 'react-router-dom'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingWhatsapp } from '../components/FloatingWhatsapp'
import { CookieConsent } from '../components/CookieConsent'

export function Layout() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
            <FloatingWhatsapp />
            <CookieConsent />
        </>
    )
}
