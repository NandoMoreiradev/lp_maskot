import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { WhatsappPage } from './pages/whatsapp/WhatsappPage'
import { CrmPage } from './pages/crm/CrmPage'
import { MasterclassPage } from './pages/masterclass/MasterclassPage'
import { CapturaPage } from './pages/captura/CapturaPage'
import { PlaybookPage } from './pages/playbook/PlaybookPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CrmPage />} />
                    <Route path="/whatsapp" element={<WhatsappPage />} />
                    <Route path="/masterclass" element={<MasterclassPage />} />
                    <Route path="/protocolo-matriculas" element={<CapturaPage />} />
                    <Route path="/playbook" element={<PlaybookPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
