Typography is an High Order Component responsible for text handling integrated with Theme, provides all styles needed to format texts in it's children dom elements

#### Properties

| Prop | Value = default| Description |
| ------ | -------- | ----------- |
| palette | string = black | The custom color pallet base |
| tone | string = main | pallete's tone property |
| align | string = left | text-align formatting |
| fontFamily | string = { theme.typography.fontFamily }| Font-family override |


#### Code Samples: 

```html
<Typography palette="secondary" tone="light" >
  Typography coloring example using pallete = secondary & tone = light 
</Typography>
```

```html
<Typography palette="primary" tone="dark" >
  Typography coloring example using pallete = primary & tone = dark 
</Typography>
```

```html
<Typography>
  Typography coloring example using defaults
</Typography>
```

#### Live Examples: 
