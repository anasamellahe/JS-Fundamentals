// const { argv } =  require('node:process');
const { argv } = require("process");


if (Object.keys(argv).length > 2)
        console.log("Argument found")
else
    console.log("No argument")