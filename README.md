# calcite-point-symbols

A collection of SVG illustrations for map symbology.

## Installation

`npm install arcgis/calcite-point-sybols --save`

## Description

Most provided symbols exist in three sizes:

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
import { age48 } from "calcite-point-sybols";

console.log(age48); // => "M16 6v3H5.035l5 5H6.5L0 7.5 6.5 1h3.536l-5 5z"
```

The icon names will be lower camel case. If the icon name starts with a number, prefix the name with `i`. This is due to the fact that JavaScript variables cannot begin with a number.

If your build system does not perform tree shaking and dead code removal, there is a chance that importing the icons using this syntax will make your bundle extremely large. If that is the case, you can also import icons directly:

```js
import { age48 } from "@esri/calcite-ui-icons/js/age48.js";
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
var calciteIcons = require('calcite-point-sybols/docs/icons.json');
```

This will give you an object containing all the icons in the library at all sizes:

```js
{
  version: '{current version number}',
  icons: {
    "3d": {
      alias: ['cube'],
      category: 'GIS Generic',
      48:['M23.756...'],
      64:['M31.618...']
    },
    ...
  }
}
```
_Note: path data omitted for brevity_.

Most icons will have simple strings as path data, but some will be more complex as they need to store not only path, but opacity as well for multiple shapes. Icons of this structure will be annotated with the `multiPath` flag.

### Individual icons structure
All the individual SVG icons have a common file structure.

This is what the `close-16.svg` looks like:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M35.096 11.578a2.898 2.898 0 0 0-5.058 0L7.477 51.869A2.709 2.709 0 0 0 9.839 55.9h45.455a2.709 2.709 0 0 0 2.363-4.032zM56.94 54.156a1.918 1.918 0 0 1-1.647.944H9.839a1.91 1.91 0 0 1-1.665-2.842L30.735 11.97a2.1 2.1 0 0 1 3.663 0L56.96 52.26a1.918 1.918 0 0 1-.019 1.897zM32.1 27h.8v14h-.8zm0 18h.8v4h-.8z" />
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
