const styleOveride = {
  typography: {
    color: props => props.theme.palette[props.palette][props.tone],
    h1: {
      color: props => props.theme.palette[props.palette][props.tone],
    },
  },
};

export default styleOveride;
