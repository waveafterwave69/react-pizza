import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import PizzaProvider from './context/PizzaProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <PizzaProvider>
                <App />
            </PizzaProvider>
        </BrowserRouter>
    </StrictMode>
)
