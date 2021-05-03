import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as Provider } from '@material-ui/core/styles';
import theme from './theme';

const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    <CssBaseline />
    {children}
  </Provider>
);

export default ThemeProvider;
