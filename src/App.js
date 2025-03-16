import React from 'react';
import './App.css';
// <<<<<<< mohan-changes
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Page from './Page';
// import SignIn from './components/Singin';
// import CounterPage from './container/CounterPage';
// import NewPage from './container/NewPage';
// import Todolist from './container/TodoList';
// import Enroll from './container/enroll';
// import NewAppPage from './components/NewAppPage';
// import ProductDetailsPage from './components/LoadPage';
// import Loginpage from './components/Greet';
// import NewApp from './components/NewAppFuc';
// import Newproject from './NewProject';
// import HookCounter from './Practice';
// import NewCard from './components/newCard';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path='/' element={<SignIn />} />
//           <Route path='/home' element={<Page />} />
//           <Route path='/counter' element={<CounterPage />} />
//           <Route path='/newpage' element={<NewPage />} />
//           <Route path='/todo' element={<Todolist />} />
//           <Route path='/enro' element={<Enroll />} />
//           <Route path='/newApp' element={<NewAppPage />} />
//           <Route path='/product' element={<ProductDetailsPage />} />
//           <Route path='/Login' element={<Loginpage />} />
//           <Route path="/newAppFunc" element={<NewApp />} />
//           <Route path="/newProject" element={<Newproject />} />
//           <Route path="/hookCounter" element={<HookCounter />} />
//           <Route path="/newcard" element={<NewCard />} />
//         </Routes>
//       </Router>
//     );
//   }
// =======
import RouterComponent from './routes';
import { ThemeProvider } from './contexts/themeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterComponent />
    </ThemeProvider>
  )
// >>>>>>> main
}

export default App;
