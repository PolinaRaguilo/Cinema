import { createMuiTheme } from '@material-ui/core';
import * as colors from '@material-ui/core/colors';
const palette = {
  text: {
    main: colors.grey[50],
  },
  background: {
    main: '#171515',
    primary: '#2B2243',
  },
};

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: palette.background.main,
          color: palette.text.main,
          maxWidth: 1440,
          margin: '0px auto',
        },
      },
    },
    MuiButton: {
      root: {
        backgroundColor: palette.background.primary,
        color: palette.text.main,
        textTransform: 'unset',
        transition: 'unset',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          color: palette.background.primary,
          border: '3px solid #2B2243',
        },
      },
    },
    MuiTypography: {
      root: {
        color: palette.text.main,
      },
    },
    MuiTextField: {
      root: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: 'none',
      },
      input: {
        padding: '19px 25px ',
      },
    },
    MuiInputBase: {
      input: {
        width: 670,
        height: 47,
        fontSize: 24,
      },
    },
    MuiTableCell: {
      root: {
        padding: 0,
        borderBottom: 'none',
      },
    },
    MuiCardContent: {
      root: {
        padding: 0,
      },
    },
    MuiPagination: {
      ul: {
        justifyContent: 'center',
      },
    },
    MuiPaginationItem: {
      root: {
        color: 'white',
      },
      page: {
        '&.Mui-selected': {
          backgroundColor: palette.background.primary,
          '&:hover': {
            backgroundColor: 'white !important',
            color: palette.background.primary,
            border: '3px solid #2B2243',
          },
        },
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: palette.background.primary,
        width: '100px !important',
        height: '100px !important',
        position: 'absolute',
        top: '50%',
        left: '50%',
      },
    },
  },
});

export default theme;
