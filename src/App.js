import { BrowserRouter, Route } from 'react-router-dom';
import FilmDescription from './components/film-description';
import Header from './components/header';
import MainPage from './components/main-page';
import ReservePage from './components/reserver-page';
import ThemeProvider from './styles/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route path="/movie/:id" component={FilmDescription} />
        <Route path="/reserve/:id" component={ReservePage} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
