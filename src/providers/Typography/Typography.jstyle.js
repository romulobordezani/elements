const styleOveride = {
  eTypography: {
    color: props => props.theme.palette[props.palette][props.tone],
    fontFamily: (props) => {
      return props.fontFamily ? props.fontFamily : props.theme.typography.fontFamily;
    },
    textAlign: props => props.align,
    '& h1': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '1.3em',
      lineHeight: '1.3em',
      marginBottom: '1.3em',
      fontWeight: 'bold',
    },
    '& h2': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '1.2em',
      lineHeight: '1.2em',
      marginBottom: '1.2em',
      fontWeight: 'bold',
    },
    '& h3': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '1.1em',
      lineHeight: '1.1em',
      marginBottom: '1.1em',
      fontWeight: 'normal',
    },
    '& h4': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '1em',
      lineHeight: '1em',
      marginBottom: '1em',
    },
    '& h5': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '0.9em',
      lineHeight: '0.9em',
      marginBottom: '0.9em',
    },
    '& h6': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '0.8em',
      lineHeight: '0.8em',
      marginBottom: '0.8em',
    },
    '& p': {
      color: props => props.theme.palette[props.palette][props.tone],
      fontSize: '1em',
      lineHeight: '1em',
      marginBottom: '1em',
    },
    '& a': {
      color: props => props.theme.palette[props.palette].dark,
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover': {
        color: props => props.theme.palette[props.palette].light,
      },
      '&:active, &:focus, &visited': {
        color: props => props.theme.palette[props.palette].light,
      },
    },
  },
};

export default styleOveride;
