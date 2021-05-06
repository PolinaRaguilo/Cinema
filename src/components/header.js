import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  box: {
    height: 160,
    backgroundColor: '#2B2243',
    padding: '35px 303px 37px 300px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title__main: {
    fontSize: 24,
    marginBottom: 30,
    width: 490,
  },
  subtitle: {
    fontSize: 14,
    width: 490,
  },
  btn__back: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      textDecoration: 'underline',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Box className={classes.box}>
      <Box>
        <Typography component="h1" className={classes.title__main}>
          Welcome to our cinema
        </Typography>
        <Typography component="h4" className={classes.subtitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
          labore.
        </Typography>
      </Box>
      {pathname !== '/' && (
        <Button onClick={() => history.goBack()} className={classes.btn__back}>
          Go back
        </Button>
      )}
    </Box>
  );
};

export default Header;
