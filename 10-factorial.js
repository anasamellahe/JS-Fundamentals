const { argv } = require("process")

let num =  +argv[2]

if (isNaN(num))
        console.log(1)
else
{
    let res = 1;
    for (;num > 0; num--)
        res *= num
    console.log(res) 
}