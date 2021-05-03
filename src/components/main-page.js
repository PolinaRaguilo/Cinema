const { Box, TextField, Button, makeStyles } = require('@material-ui/core');

const useStyles = makeStyles(() => ({
  wrapper: {
    width: 840,
    margin: '0px auto',
    paddingTop: 80,
  },
  btn__search: {
    width: 168,
    height: 85,
    fontSize: 24,
    fontWeight: 'normal',
  },
  input__search: {
    position: 'relative',
  },
  form__search: {
    display: 'flex',
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <form className={classes.form__search}>
        <TextField
          variant="outlined"
          placeholder="Type to search..."
          className={classes.input__search}
        />
        <Button className={classes.btn__search}>Search</Button>
      </form>
    </Box>
  );
};

export default MainPage;
