const styleOverride = {
  eButton: {
    backgroundColor: props => props.theme.palette[props.palette].colors[props.tone][500],
    color: (props) => {
      if (props.tone === 'dark') {
        return props.theme.palette[props.palette].darkContrastText;
      }
      if (props.tone === 'light') {
        return props.theme.palette[props.palette].lightContrastText;
      }
      return props.theme.palette[props.palette].darkContrastText;
    },
    transition: ['background-color', 'max-width'],
    transitionDuration: 300,
    outline: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '10px',
    border: 'none',
    textTransform: 'uppercase',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
    '&:hover': {
      backgroundColor: (props) => {
        if (props.tone === 'dark') {
          return props.theme.palette[props.palette].colors.dark[200];
        }
        if (props.tone === 'light') {
          return props.theme.palette[props.palette].colors.light[300];
        }
        return props.theme.palette[props.palette].colors.dark[300];
      },
    },
  },
};

export default styleOverride;
