const styleOverride = {
  eMenuAuxItem: {
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    listStyleType: 'none',
    float: 'left',
    marginRight: '12px',
    '&:first-child': {
      marginLeft: '14px',
    },
    '& a': {
      color: (props) => {
        return props.theme.palette[props.palette].colors[props.tone][100];
      },
    },
  },
  eMenuAuxAnchor: {
    // color: (props) => {
    //   const color = `${props.theme.palette[props.palette].colors[props.tone][100]}`;
    //   console.log(color);
    //   return color;
    // },
  },
};

export default styleOverride;
