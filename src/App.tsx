import { Routes, Route } from 'react-router'
import type { IRoutes } from './types/types'

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    {routesConfig.map(({ page, url }: IRoutes) => (
                        <Route path={url} element={page} />
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default App
