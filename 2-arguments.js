const { argv } = require("process")
const keys = Object.keys(argv)

if (keys.length > 3)
    console.log("Arguments found")
else if (keys.length > 2)
    console.log("Argument found")
else
    console.log("No argument") 