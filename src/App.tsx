import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { WhatsappPage } from './pages/whatsapp/WhatsappPage'
import { CrmPage } from './pages/crm/CrmPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CrmPage />} />
                    <Route path="/whatsapp" element={<WhatsappPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
