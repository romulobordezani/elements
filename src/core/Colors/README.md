Agora vai. Based on Material Desigh Color system, it uses shades from 50 to 900 and accent colors from 100 to 700.

You can generate new color palettes on [Palette Generator](http://mcg.mbitson.com/#!?mcgpalette0=%23e3e4e5&themename=mcgtheme) Download it as Material Ui Next ( The closest format );

### Example: 

```js
import DefaultColors from '/core/Colors/index';

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
    50: '#c2ecb0',
    100: '#93dd73',
    200: '#70d246',
    300: '#4fa729',
    400: '#448f23',
    500: '#38761d',
    600: '#2c5d17',
    700: '#214511',
    800: '#152c0b',
    900: '#091405',
    A100: '#b6fa98',
    A200: '#71f537',
    A400: '#46ae18',
    A700: '#408f1e',
  },
  light: {
    50: '#fffffe',
    100: '#daf5bc',
    200: '#beed8c',
    300: '#9ce34e',
    400: '#8ddf33',
    500: '#7ed321',
    600: '#6eb91d',
    700: '#5e9e19',
    800: '#4f8415',
    900: '#3f6910',
    A100: '#fafff4',
    A200: '#c9ff8e',
    A400: '#98f235',
    A700: '#8be429',
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

const theme = { theme: customTheme };
class App extends Component {
  render() {
    return (
        <ThemeContext.Provider value={theme} >
            <CssBaseline>
                <Typography>
                  <Button>Elem Button</Button>
                </Typography>
            </CssBaseline>
        </ThemeContext.Provider>
    );
  }
}

export default App;

```
<br />

## Color palette preview 
