import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Page';
import SignIn from './components/Singin';
import CounterPage from './container/CounterPage';
import NewPage from './container/NewPage';
import Todolist from './container/TodoList';
import Enroll from './container/enroll';
import NewAppPage from './components/NewAppPage';
import ProductDetailsPage from './components/LoadPage';
import Loginpage from './components/Greet';
import NewApp from './components/NewAppFuc';
import Newproject from './NewProject';
import HookCounter from './Practice';
import NewCard from './components/newCard';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Page />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/newpage' element={<NewPage />} />
          <Route path='/todo' element={<Todolist />} />
          <Route path='/enro' element={<Enroll />} />
          <Route path='/newApp' element={<NewAppPage />} />
          <Route path='/product' element={<ProductDetailsPage />} />
          <Route path='/Login' element={<Loginpage />} />
          <Route path="/newAppFunc" element={<NewApp />} />
          <Route path="/newProject" element={<Newproject />} />
          <Route path="/hookCounter" element={<HookCounter />} />
          <Route path="/newcard" element={<NewCard />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

// const initialName = 'Sukumar';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: initialName,
//       productData: null
//     };
//     console.log('constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps', props, state);
//     return {};
//   }

//   componentDidMount(){
//     console.log('componentDidMount');
//     this.updatename();
//     this.fetchData();
//   }

//   fetchData() {
//     fetch('https://api.restful-api.dev/objects')
//     .then(response => response.json())
//     .then(data => 
//       this.setState({
//         productData: data
//       })
//     )
//     .catch(error => console.error(error));
//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log('getSnapshotBeforeUpdate', prevProps, prevState);
//     return {};
//   }

//   componentDidUpdate(){

//   }

//   updatename() {
//     setTimeout(() => {
//       this.setState({
//         name: 'Venkata Sukumar'
//       });
//     }, 1000);
//   }

//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decrement() {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   componentWillUnmount() {
//     clearTimeout();
//   }

//   render() {
//     console.log('render');
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hello {this.state.name}!</p>
//           <p>Count: {this.state.count}</p>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <span>
//             <button onClick={this.increment.bind(this)}>Increment</button>
//             <button onClick={this.decrement.bind(this)}>Decrement</button>
//           </span>
//         </header>
//       </div>
//     );
//   }
// }
