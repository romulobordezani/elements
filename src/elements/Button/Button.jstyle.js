const styleOverride = {
  eButton: {
    backgroundColor: props => props.theme.palette.primary.main,
    color: props => props.theme.palette.primary.darkContrastText,

    transition: ['background-color', 'max-width'],
    transitionDuration: 300,
    outline: 'none',
    cursor: 'pointer',
    textShadow: '1px 1px 1px #ADADAD',
    padding: '10px',
    border: 'none',
    '&:hover': {
      backgroundColor: props => props.theme.palette.primary.light,
    },
  },
};

export default styleOverride;
