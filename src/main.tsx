import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'
import TermsPage from './pages/TermsPage.tsx'

const pathname = window.location.pathname;

let PageComponent: React.ComponentType;
if (pathname === '/privacy') {
  PageComponent = PrivacyPage;
} else if (pathname === '/terms') {
  PageComponent = TermsPage;
} else {
  PageComponent = App;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageComponent />
  </StrictMode>,
)
