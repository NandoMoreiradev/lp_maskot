import { Outlet, useLocation } from 'react-router-dom'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingWhatsapp } from '../components/FloatingWhatsapp'
import { CookieConsent } from '../components/CookieConsent'

// Rotas focadas em conversão, sem o cabeçalho de navegação.
const ROUTES_WITHOUT_HEADER = ['/masterclass']

export function Layout() {
    const { pathname } = useLocation()
    const hideHeader = ROUTES_WITHOUT_HEADER.includes(pathname.replace(/\/$/, ''))

    return (
        <>
            <GlobalStyle />
            {!hideHeader && <Header />}
            <Outlet />
            <Footer />
            <FloatingWhatsapp />
            <CookieConsent />
        </>
    )
}
