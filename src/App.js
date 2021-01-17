import logo from './logo.svg';
import './App.css';

//components
import HomeScreen from './components/HomeScreen.js'



function App() {




  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <p>Welcome to The Shoppies! Choose your favorite films and nominate them. You can nominate 5 films. </p>
      <p>Search for titles: </p>
      <HomeScreen />
    </div>
  );
}

export default App;
