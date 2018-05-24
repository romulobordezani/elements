/* eslint react/no-unused-state: 0 */
import React from 'react';
import Theme from '../core/Theme';

import ThemeContext from '../providers/ThemeProvider';
import CssBaseline from '../providers/CssBaseline';

import ThemeChanger from './components/ThemeChanger';
import ViewerHeader from './components/ViewerHeader';
import ViewerSideBar from './components/ViewerSideBar';
import ViewerContainer from './components/ViewerContainer';

const customTheme = new Theme({
  palette: {
    secondary: {
      light: 'gold',
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
      <CssBaseline>
        <ThemeContext.Provider value={this.state}>
          <div className="Viewer">
            <ViewerHeader />
            <ViewerSideBar />
            <ViewerContainer />
          </div>
        </ThemeContext.Provider>
      </CssBaseline>);
  }
}

export default Viewer;
