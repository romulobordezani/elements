/* eslint react/no-unused-state: 0 */
import React from 'react';
import 'normalize.css';
import Theme from '../core/Theme';

import { ThemeContext } from '../providers/ThemeProvider';
import Typography from '../providers/Typography';
import DefaultColors from '../core/Colors';

import ThemeChanger from './components/ThemeChanger';
import ViewerHeader from './components/ViewerHeader';
import ViewerSideBar from './components/ViewerSideBar';
import ViewerContainer from './components/ViewerContainer';

// Example of how to set new color palettes
const customSecondaryColors = new DefaultColors({
  dark: {
    50: '#858585',
    100: '#5e5e5e',
    200: '#424242',
    300: '#1f1f1f',
    400: '#0f0f0f',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
    A100: '#3cbdaf',
    A200: '#1f6059',
    A400: '#1d1616',
    A700: '#0d0c0c',
  },
  light: {
    50: '#858585',
    100: '#5e5e5e',
    200: '#424242',
    300: '#1f1f1f',
    400: '#0f0f0f',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
    A100: '#3cbdaf',
    A200: '#1f6059',
    A400: '#1d1616',
    A700: '#0d0c0c',
  },
});

const customPrimaryColors = new DefaultColors({
  dark: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ebebeb',
    400: '#dbdbdb',
    500: '#cccccc',
    600: '#bdbdbd',
    700: '#adadad',
    800: '#9e9e9e',
    900: '#8f8f8f',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#e9e2e2',
    A700: '#dbd7d7',
  },
  light: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#ffffff',
    500: '#f2f2f2',
    600: '#e3e3e3',
    700: '#d3d3d3',
    800: '#c4c4c4',
    900: '#b5b5b5',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#ffffff',
    A700: '#ffffff',
  },
});

const customTheme = new Theme({
  palette: {
    primary: {
      colors: customPrimaryColors,
    },
    secondary: {
      colors: customSecondaryColors,
    },
  },
});

class Viewer extends React.Component {
  constructor(...args) {
    super(...args);

    this.changeTheme = (theme) => {
      this.setState({
        theme: ThemeChanger(theme),
      });
    };

    this.state = {
      theme: customTheme,
      changeTheme: this.changeTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Typography>
          <div className="Viewer">
            <ViewerHeader />
            <ViewerSideBar />
            <ViewerContainer />
          </div>
        </Typography>
      </ThemeContext.Provider>);
  }
}

export default Viewer;
