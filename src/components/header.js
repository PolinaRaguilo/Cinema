import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  box: {
    height: 160,
    backgroundColor: '#2B2243',
    padding: '35px 570px 37px 300px',
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography component="h1" className={classes.title__main}>
        Welcome to our cinema
      </Typography>
      <Typography component="h4" className={classes.subtitle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
        labore.
      </Typography>
    </Box>
  );
};

export default Header;
