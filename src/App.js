import './App.css';
import { Route } from 'react-router-dom';

//components
import HomeScreen from './components/HomeScreen.js';
import MovieDetails from './components/MovieDetails.js';



function App() {




  return (
    <div className="App">
      <Route exact path="/">
        <h1>The Shoppies</h1>
        <p>Welcome to The Shoppies! Choose your favorite films and nominate them. You can nominate 5 films. </p>
        <p>Search for titles: </p>
        <HomeScreen />
      </Route>
      <Route path="/movies/:id" component={MovieDetails} />
    </div>
  );
}

export default App;
