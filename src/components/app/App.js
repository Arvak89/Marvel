import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/404'));
const MainPage = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/MainPage'));
const ComicsPage = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../../../../../React/Marvel_Dev/src/components/pages/SinglePage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path={"/comics"} element={<ComicsPage/>}/>
                            <Route path={"/comics/:id"} element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />
                            <Route path={"/characters/:id"} element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                            <Route path={"/"} element={<MainPage/>}/>
                            <Route path={"*"} element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;