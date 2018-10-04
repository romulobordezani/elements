'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleOveride = {
  eTypography: {
    color: function color(props) {
      return props.theme.palette[props.palette][props.tone];
    },
    fontFamily: function fontFamily(props) {
      return props.fontFamily ? props.fontFamily : props.theme.typography.fontFamily;
    },
    textAlign: function textAlign(props) {
      return props.align;
    },
    '& h1': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '1.3em',
      lineHeight: '1.3em',
      marginBottom: '1.3em',
      fontWeight: 'bold'
    },
    '& h2': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '1.2em',
      lineHeight: '1.2em',
      marginBottom: '1.2em',
      fontWeight: 'bold'
    },
    '& h3': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '1.1em',
      lineHeight: '1.1em',
      marginBottom: '1.1em',
      fontWeight: 'normal'
    },
    '& h4': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '1em',
      lineHeight: '1em',
      marginBottom: '1em'
    },
    '& h5': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '0.9em',
      lineHeight: '0.9em',
      marginBottom: '0.9em'
    },
    '& h6': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '0.8em',
      lineHeight: '0.8em',
      marginBottom: '0.8em'
    },
    '& p': {
      color: function color(props) {
        return props.theme.palette[props.palette][props.tone];
      },
      fontSize: '1em',
      lineHeight: '1em',
      marginBottom: '1em'
    },
    '& a': {
      color: function color(props) {
        return props.theme.palette[props.palette].dark;
      },
      textDecoration: 'none',
      transition: 'color .2s',
      '&:hover': {
        color: function color(props) {
          return props.theme.palette[props.palette].light;
        }
      },
      '&:active, &:focus, &visited': {
        color: function color(props) {
          return props.theme.palette[props.palette].light;
        }
      }
    }
  }
};

exports.default = styleOveride;