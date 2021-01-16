import logo from './logo.svg';
import './App.css';

//components
import HomeScreen from './components/HomeScreen.js'



function App() {




  return (
    <div className="App">
      <h1>Welcome to The Shoppies!</h1>
      <p>Choose your favorite films and nominate them! You can nominate 5 films. Search for the titles below: </p>
      <HomeScreen />
    </div>
  );
}

export default App;
