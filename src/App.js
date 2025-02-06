import React from 'react';
import './App.css';
import RouterComponent from './routes';
import { ThemeProvider } from './contexts/themeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterComponent />
    </ThemeProvider>
  )
}

export default App;
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <RouterComponent />
//       </div>
//     );
//   }
// }

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
