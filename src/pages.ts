/**
 * Route configuration for the FlipSide web app.
 *
 * To use these routes, install react-router-dom:
 *   npm install react-router-dom
 *   npm install -D @types/react-router-dom
 *
 * Then update main.tsx to wrap <App /> with <BrowserRouter> and
 * update App.tsx to use <Routes> / <Route> from react-router-dom.
 *
 * Example App.tsx integration:
 *
 *   import { Routes, Route } from 'react-router-dom'
 *   import { routes } from './pages'
 *
 *   function App() {
 *     return (
 *       <Routes>
 *         <Route path="/" element={<LandingPage />} />
 *         {routes.map(({ path, component: Component }) => (
 *           <Route key={path} path={path} element={<Component />} />
 *         ))}
 *       </Routes>
 *     )
 *   }
 */

import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

export const routes = [
  {
    path: '/privacy',
    component: PrivacyPolicy,
    title: 'Privacy Policy - FlipSide',
  },
  {
    path: '/terms',
    component: TermsOfService,
    title: 'Terms of Service - FlipSide',
  },
] as const
