
NPM-Execute
===========

**Execute NPM from within NPM**

<p/>
<img src="https://nodei.co/npm/npm-execute.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/npm-execute.png" alt=""/>

Abstract
--------

This is a tiny [Node](https://nodejs.org/) module for cross-platform
executing Node Package Manager (NPM) from within Node. It especially
works-around the problem that under Windows executing a `*.cmd` script
from within Node requires a longer time to proceed.

Installation
------------

```sh
$ npm install npm-execute
```

Usage
-----

```js
const npmExecute = require("npm-execute")

npmExecute([ "root", "-g" ]).then((result) => {
    console.log(`npm root -g: ${result.stdout}`)
})

npmExecute([ "config", "get", "proxy" ]).then((result) => {
    console.log(`npm config get proxy: ${result.stdout}`)
})
```

License
-------

Copyright (c) 2018-2019 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

