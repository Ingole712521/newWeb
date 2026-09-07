import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteFrame } from './components/layout/SiteFrame'
import { HomePage } from './pages/HomePage'
import { WorksPage } from './pages/WorksPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteFrame />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorksPage />} />
          <Route path="works" element={<Navigate to="/work" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
