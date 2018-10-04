![GFG](https://d21buns5ku92am.cloudfront.net/59997/images/186068-Bildschirmfoto%202015-11-05%20um%2018.08.38-87e3ab-large-1446743872.png#dfg-logo)


**Elem** is part of the **Global Fashion Group** design system, home of react reusable elements between different themes.

As an Atomic Design adopter, our design system is using the following scheme to compose components:

![Atomic Design](https://www.thumb321.com.br/img-e07e14467e784b80#atomic-design)

<blockquote>
 <strong>Elem</strong> is only in charge of Atoms, also called Elements like buttons, inputs, and so on. All smarter components should be composed outside of Elem.
</blockquote>

* * *

### Using Elem
Installing while a private npm server isn't available
```bash
npm install --save git+ssh://@bitbucket.org:dafiti/store-front-ui.git#master
```


### On your app
```js
import React, { Component } from 'react';
import { ThemeContext, Theme, Button, Typography, CssBaseline } from 'store-front-ui';

const theme = { theme: new Theme({}) };
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

See what can be customized over the theme in the [Theme Section](#theme)

* * * 

### Running Elem locally
```bash
npm install
```

```bash
npm start
```

### Running unit tests with jest
```bash
npm run test
```

### Generating Docs
```bash
npm run generate_docs
```

### Doc Viewer
> Doesn't require npm install

```bash
npm run docs
```

### Testing the NPM build
```bash
npm run prepare
```


