Themes are the base of everything on Elem, you gonna need to define one to see things working here.

You can override every property of it and the merge is made automatically when a new Theme is instantiated.

Take a look on all available and overridable properties:

```js
class DefaultTheme {
  constructor(theme) {
    this.colors = new DefaultColors(theme.colors);

    this.currentTheme = 'default';

    this.typography = {
      fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    };

    this.text = {
      primary: 'rgba(0, 0, 0, 0.87)', // The most important text.
      secondary: 'rgba(0, 0, 0, 0.54)', // Secondary text.
      disabled: 'rgba(0, 0, 0, 0.38)', // Disabled text have even lower visual prominence.
      hint: 'rgba(0, 0, 0, 0.38)', // Text hints.
    };

    // The color used on the line which divides different contents.
    this.divider = 'rgba(0, 0, 0, 0.12)';

    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    this.background = {
      paper: '#FFFFFF',
      default: '#CCC',
    };

    // The colors used to style the action elements like buttons, links and so on
    this.action = {
      active: 'rgba(0, 0, 0, 0.54)', // The color of an active action like an icon button.
      hover: 'rgba(0, 0, 0, 0.08)', // The colors of an hovered action.
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)', // The color of a selected action.
      disabled: 'rgba(0, 0, 0, 0.26)', // The color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)', // The background color of a disabled action.
    };

    this.palette = {
      primary: { // default but overridable
        light: this.colors.dark.A100,
        main: this.colors.dark.A100,
        dark: this.colors.dark.A700,
        contrastText: this.colors.light[50],
        lightContrastText: 'black',
        darkContrastText: 'white',
      },
      secondary: { // default but overridable
        light: this.colors.dark.A100,
        main: this.colors.dark.A700,
        dark: this.colors.dark.A400,
        contrastText: this.colors.light[50],
        lightContrastText: 'black',
        darkContrastText: 'white',
      },
      black: { // default but overridable
        main: this.text.primary,
      },
      white: { // default but overridable
        main: '#FFFFFF',
      },
    };
  }
}

```

### Using palettes

All elements use the palette/tone system to get theirs colors. You can define new ones and invoke them while using Elements.

We provide some basic palettes as standard, they are: primary, secondary, black and white.

#### How to set a new palette:

```js
import React, { Component } from 'react';
import { ThemeContext, Theme, Button, Typography, CssBaseline } from 'store-front-ui';

const customTheme = new Theme({
  palette: {
    myCustomPalette: {
      light: 'white',
      lightContrastText: 'black',
      dark: 'black',
      darkContrastText: 'white',
      main: 'grey',
      myCustomTone: 'violet',
    },
  },
});

const theme = { theme: customTheme };
class App extends Component {
  render() {
    return (
        <ThemeContext.Provider value={theme} >
            <CssBaseline>
                <Typography>
                  <Button palette="myCustomPalette" tone="myCustomTone">Elem Button</Button>
                </Typography>
            </CssBaseline>
        </ThemeContext.Provider>
    );
  }
}

export default App;

```

#### Using a new palette over elements
The elements always have support to choose palette and tone. Palette refers to the 'palette' itself and the default is primary or black(on texts);
Tone property is the pallete's property related to a color shade to use. They are important to make contrast, that's why they always should have light and dark
Example:

```html
<button palette="myCustomPalette" tone="myCustomTone" >Click me</button>
```


#### Overriding
If you set one of the standard palettes names like 'primary', 'secondary', 'white' or 'black', it will override only properties sent, keeping all the standard untouched.

Example of override: 

```js
const customTheme = new Theme({
  palette: {
    primary: {
      light: 'violet',
    },
  },
});
// All others properties are the same, but 'primary.light'
```
