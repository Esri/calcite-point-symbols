# calcite-point-symbols

A collection of SVG illustrations for map symbology.

## Installation

`npm install arcgis/calcite-point-symbols --save`

## Description

Provided symbols exist in one or more of the following three sizes:

* **13x13**
* **17x17**
* **21x21**

### Why 3 Sizes?

More info on what happens when you scale vector based icons [here](https://github.com/Esri/calcite-ui-icons/wiki/What-Happens-When-You-Scale-Vector-Based-Icons)

### Why odd sizes?

Constructing these symbols on an odd-numbered pixel grid means that they can be centered both horizontally and vertically.

## JavaScript Exports

Icons are made available as named ES6 exports. This way you can import just the icons you need into your app:

```js
import { campground21 } from "calcite-point-symbols";

console.log(campground21); // => "M12.402 16.976H19L10.503 2.998 2 16.976h6.626l1.888-8.94z"
```

The icon names will be lower camel case. If the icon name starts with a number, prefix the name with `i`. This is due to the fact that JavaScript variables cannot begin with a number.

If your build system does not perform tree shaking and dead code removal, there is a chance that importing the icons using this syntax will make your bundle extremely large. If that is the case, you can also import icons directly:

```js
import { campground21 } from "@esri/calcite-ui-icons/js/campground21.js";
```

Some icons use multiple paths and opacity in their construction, for these the data structure will be an array of path data as follows:

```js
[
  { d: "M16 6vh...", opacity: ".1" },
  ...
]
```

**Note**: It is not recommended to import the entire library of icons. This will have negative performance implications. Use the technique above to select only the icons your users actually need to download.

### TypeScript

Types are also available for projects leveraging TypeScript. `CalciteIconPath` describes all exported icons (both single and multi-path) while `CalciteMultiPathEntry` describes an individual path from a multi-path icon.

### JSON Format

All icons are also provided as part of a JSON file. If you installed via npm, you can import the full icon data set using the following:

```js
var calciteIcons = require('calcite-point-symbols/docs/icons.json');
```

This will give you an object containing all the icons in the library at all sizes:

```js
{
  version: '{current version number}',
  icons: {
    "a": {
      alias: [],
      category: '',
      21:['M23.756...']
    },
    ...
  }
}
```
_Note: path data omitted for brevity_.

Most icons will have simple strings as path data, but some will be more complex as they need to store not only path, but opacity as well for multiple shapes. Icons of this structure will be annotated with the `multiPath` flag.

### Individual icons structure
All the individual SVG icons have a common file structure.

This is what the `shoplifting-21.svg` looks like:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
  <path d="M15 10V7.5A2.5 2.5 0 0 0 12.5 5c-.106 0-.208.018-.31.031l.368.975c.8.031 1.442.687 1.442 1.494V10H9.575s.482.835.555 1H11v1h-.648c-.017.435-.204.802-.567 1.049-.441.3-.845.444-1.234.444a1.46 1.46 0 0 1-.551-.11V18h9v-8h-2zm0 2h-1v-1h1v1zm-6-1s.611.958.222 1.222c-.853.579-1.055.111-1.41-.284-.798-.893-1.86-2.247-2.302-2.818a.99.99 0 0 1-.208-.61V6.827L4 5l3.75-2.5 1.125 1.75 2.01.952a1 1 0 0 1 .508.55L12.622 9h-2.368L8.981 7.294a.775.775 0 0 0-1.092-.005 1.204 1.204 0 0 0-.196 1.464L9 11z"/>
</svg>
```

None of the icons have `stroke` attributes. The `fill` attribute can be defined with css:

```css
svg {
  fill: gray;
}
```

All the other styling properties applicable to the whole svg element are applicable.

```css
svg:hover {
  fill: blue;
}
```

## Licensing

COPYRIGHT © 2020 Esri

All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License Agreement (MLA), and is bound by the terms of that agreement. You may redistribute and use this code without modification, provided you adhere to the terms of the MLA and include this copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact: Environmental Systems Research Institute, Inc. Attn: Contracts and Legal Services Department 380 New York Street Redlands, California, USA 92373 USA

email: contracts@esri.com

## Contributing
Please read the [contribute document](CONTRIBUTE.md).
