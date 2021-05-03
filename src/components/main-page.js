const { Box, TextField, Button, makeStyles } = require('@material-ui/core');
const { default: FilmCard } = require('./film-card');

const useStyles = makeStyles(() => ({
  wrapper: {
    width: 840,
    margin: '0px auto',
    marginTop: 80,
  },
  btn__search: {
    width: 168,
    height: 85,
    fontSize: 24,
    borderRadius: 5,
  },

  form__search: {
    display: 'flex',
    marginBottom: 48,
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <form className={classes.form__search}>
        <TextField variant="outlined" placeholder="Type to search..." />
        <Button className={classes.btn__search}>Search</Button>
      </form>
      <FilmCard />
      <FilmCard />
    </Box>
  );
};

export default MainPage;
