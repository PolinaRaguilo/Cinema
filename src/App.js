import Header from './components/header';
import MainPage from './components/main-page';
import ThemeProvider from './styles/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
