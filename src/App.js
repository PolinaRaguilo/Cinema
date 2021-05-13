import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FilmDescription from './components/film-description';
import Header from './components/header';
import MainPage from './components/main-page';
import PageNotFound from './components/page-not-found';
import ReservePage from './components/reserver-page';
import UserChoice from './components/user-choice-page';
import ThemeProvider from './styles/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/movie/:id" component={FilmDescription} />
          <Route path="/reserve/:id" component={ReservePage} />
          <Route path="/user" component={UserChoice} />
          <Route path="/404" component={PageNotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
