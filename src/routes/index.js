import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const SignInPage =lazy(()=>import ('../components/Singin'));
const Page = lazy(()=>import ('../Page'));
const CounterPage = lazy(()=>import ('../container/CounterPage'));
const NewPage=lazy(()=>import ('../container/NewPage'));
const Todolist=lazy(()=>import('../container/TodoList'));
const Enroll =lazy(() => import('../container/enroll'));
const NewAppPage =lazy(() => import('../components/NewAppPage')); ;
const ProductDetailsPage =lazy(() => import('../components/LoadPage'));
const Loginpage =lazy(() => import('../components/Greet'));
const BgAnimation =lazy(()=>import('../Practice/BgAnimation'));
const MyHooks = lazy(() => import('../container/hooks'));
const NewApp = lazy(() => import('../components/NewAppFuc'));
const Home = lazy(() => import('../container/Home'));
const Newproject =lazy(() => import('./NewProject'));
const HookCounter =lazy(() => import('./Practice'));
const NewCard =lazy(() => import('./components/newCard'));

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
                <Route path="/newProject" element={<Newproject />} />
                <Route path="/hookCounter" element={<HookCounter />} />
                <Route path="/newcard" element={<NewCard />} />
            </Routes>
        </Router>
    )
}

export default RouterComponent;