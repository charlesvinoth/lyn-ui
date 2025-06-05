import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import TanstackRouterProvider from './lib/tanstack-router/Provider.tsx'
import TanstackQueryProvider from './lib/tanstack-query/Provider.tsx'
import './styles/index.css'
import reportWebVitals from './reportWebVitals.ts'
import { router } from './lib/tanstack-router/router.ts'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanstackQueryProvider>
        <TanstackRouterProvider />
      </TanstackQueryProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
