Based on Material Desigh Color system, it uses shades from 50 to 900 and accent colors from 100 to 700.

You can generate new color palettes on [Palette Generator](http://mcg.mbitson.com/#!?mcgpalette0=%23e3e4e5&themename=mcgtheme) Download it as Material Ui Next ( The closest format );

### Example: 

```js
import DefaultColors from '/core/Colors/index';

const colors = {
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
    A200: '#319c90',
    A400: '#2a685c',
    A700: '#1b3b31',
  },
  light: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#f3f3f4',
    500: '#e3e4e5',
    600: '#d3d5d6',
    700: '#c3c5c8',
    800: '#b3b6b9',
    900: '#a4a7aa',
    A100: '#96bdac',
    A200: '#7ea392',
    A400: '#638574',
    A700: '#415e4e',
};


const customTheme = new Theme({
  colors: new DefaultColors(colors),
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
