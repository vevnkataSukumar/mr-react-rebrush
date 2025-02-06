import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from '../components/Singin';
import Page from '../Page';
import CounterPage from '../container/CounterPage';
import NewPage from '../container/NewPage';
import Todolist from '../container/TodoList';
import Enroll from '../container/enroll';
import NewAppPage from '../components/NewAppPage';
import ProductDetailsPage from '../components/LoadPage';
import Loginpage from '../components/Greet';
// import NewApp from '../components/NewAppFuc';
// import NewproductCard from '../components/NewProductcard';
import BgAnimation from '../Practice/BgAnimation';
import { lazy, Suspense } from 'react';
// import MyHooks from '../container/hooks';
const MyHooks = lazy(() => import('../container/hooks'));
const NewApp = lazy(() => import('../components/NewAppFuc'));
const Home = lazy(() => import('../container/Home'));

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SignInPage />} />
                <Route path='/page' element={<Page />} />
                <Route path='/counter' element={<CounterPage />} />
                <Route path='/newpage' element={<NewPage />} />
                <Route path='/todo' element={<Todolist />} />
                <Route path='/enro' element={<Enroll />} />
                <Route path='/newApp' element={<NewAppPage />} />
                <Route path='/product' element={<ProductDetailsPage />} />
                <Route path='/Login' element={<Loginpage />} />
                <Route path="/newAppFunc" element={<Suspense fallback={<h1>Loading Data...</h1>}><NewApp /></Suspense>} />
                <Route path='/bganim' element={<BgAnimation />} />
                <Route path='/hooks' element={<MyHooks />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default RouterComponent;