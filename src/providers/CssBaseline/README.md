Css baseline spreads 'normalize.css' all over it's child components.
Please, check all it does at it's [oficial site](https://necolas.github.io/normalize.css/)

This normalization is the same used by material UI, Twitter, TweetDeck, GitHub, Soundcloud, Guardian, Medium, GOV.UK, Bootstrap, HTML5 Boilerplate and others. 

Also, implements GFG overrides in a centralized way, through CustomBaseline.scss. 

It's required while using Elem. 

### Example: 

```js
import React, { Component } from 'react';
import { ThemeContext, Theme, CssBaseline } from 'store-front-ui';

const theme = { theme: new Theme({}) };

class App extends Component {
  render() {
    return (
        <ThemeContext.Provider value={theme} >
            <CssBaseline>
                Normalized content over here...
            </CssBaseline>
        </ThemeContext.Provider>
    );
  }
}

export default App;

```
