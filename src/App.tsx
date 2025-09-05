import { Routes, Route } from 'react-router'
import type { IRoutes } from './types/types'
import { routesConfig } from './routes/routesConfig'
import Header from './components/Header/Header'

const App: React.FC = () => {
    return (
        <>
            <div className="background">
                <div className="container">
                    <Header />
                    <Routes>
                        {routesConfig.map(({ page, url }: IRoutes) => (
                            <Route path={url} element={page} />
                        ))}
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
