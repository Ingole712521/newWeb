import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StudioShell } from './components/layout/StudioShell'
import { AboutPage } from './pages/AboutPage'
import { AppDownloadPage } from './pages/AppDownloadPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BlogPage } from './pages/BlogPage'
import { CategoryPage } from './pages/CategoryPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { VideoPage } from './pages/VideoPage'
import { WorkDetailPage } from './pages/WorkDetailPage'
import { WorksPage } from './pages/WorksPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StudioShell />}>
          <Route index element={<HomePage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="works/:slug" element={<WorkDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogArticlePage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="app" element={<AppDownloadPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
