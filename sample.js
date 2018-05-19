
const npmExecute = require(".")

npmExecute([ "root", "-g" ]).then((result) => {
    console.log(`npm root -g: ${result.stdout}`)
})

npmExecute([ "config", "get", "proxy" ]).then((result) => {
    console.log(`npm config get proxy: ${result.stdout}`)
})

