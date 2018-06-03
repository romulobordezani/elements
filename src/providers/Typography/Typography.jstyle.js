const styleOveride = {
  typography: {
    color: props => props.theme.palette[props.palette][props.tone],
    fontFamily: (props) => {
      return props.fontFamily ? props.fontFamily : props.theme.typography.fontFamily;
    },
    textAlign: props => props.align,
    '& h1': {
      color: props => props.theme.palette[props.palette][props.tone],
    },
    '& a': {
      color: props => props.theme.palette[props.palette].dark,
      '&:hover': {
        color: props => props.theme.palette[props.palette].light,
      },
    },
  },
};

export default styleOveride;
