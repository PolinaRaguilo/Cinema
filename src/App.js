import { BrowserRouter, Route } from 'react-router-dom';
import FilmDescription from './components/film-description';
import Header from './components/header';
import MainPage from './components/main-page';
import ReservePage from './components/reserver-page';
import UserChoice from './components/user-choice-page';
import ThemeProvider from './styles/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/movie/:id" component={FilmDescription} />
        <Route path="/reserve/:id" component={ReservePage} />
        <Route path="/user" component={UserChoice} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
