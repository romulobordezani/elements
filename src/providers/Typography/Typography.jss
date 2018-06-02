const styleOveride = {
  typography: {
    color: props => props.theme.palette[props.palette][props.tone],
    fontFamily: props => props.theme.typography.fontFamily,
    h1: {
      color: props => props.theme.palette[props.palette][props.tone],
    },
  },
};

export default styleOveride;
