import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { WhatsappPage } from './pages/whatsapp/WhatsappPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/whatsapp" element={<WhatsappPage />} />
                    {/* TODO: raiz vai virar a LP do CRM completo quando estiver pronta */}
                    <Route path="/" element={<Navigate to="/whatsapp" replace />} />
                    <Route path="*" element={<Navigate to="/whatsapp" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
