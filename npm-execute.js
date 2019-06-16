/*!
**  npm-execute -- Execute NPM from within Node
**  Copyright (c) 2018-2019 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  internal requirements  */
const path                 = require("path")

/*  external requirements  */
const isWindows            = require("is-windows")
const { getInstalledPath } = require("get-installed-path")
const globalModules        = require("global-modules")
const execa                = require("execa")

/*  the API function  */
module.exports = async (args, opts = {}) => {
    let promise
    if (isWindows()) {
        /*  Windows is a nasty situation: a call to the "npm.cmd" wrapper
            script would work, but waits about a minute in total, because
            Node seems to not know when the stdout/stderr handles close.
            As a work-around we run "node" on the "npm-cli.js" directly.  */
        let node = process.execPath
        let npmdir = await getInstalledPath("npm", {
            paths: [
                path.join(process.cwd(), "node_modules"),                  /* locally   */
                globalModules,                                             /* globally  */
                path.join(path.dirname(process.execPath), "node_modules")  /* installed */
            ]
        })
        let npmjs  = path.join(npmdir, "bin", "npm-cli.js")
        promise = execa(node, [ npmjs ].concat(args), opts)
    }
    else {
        /*  under non-Windows, just execute "npm" and this way be maximum
            compatible as we make no assumptions about the NPM installation  */
        promise = execa("npm", args, opts)
    }
    return promise
}

