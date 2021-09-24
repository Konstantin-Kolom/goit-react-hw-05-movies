import { Switch, Route } from 'react-router-dom';

import { Navigation } from './components/Novigation/Novigation.jsx';
import { HomePage } from './views/HomePage.jsx';
import { MoviesPage } from './views/MoviesPage.jsx';
import { MovieDetailsPage } from './views/MovieDetailsPage';
import s from './App.module.css';

function App() {
  return (
    <>
      <header className="App-header">
        <Navigation />
      </header>

      <main className={s.continer}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:muvieid">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;