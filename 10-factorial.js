const { argv } = require("process")
let num =  +argv[2]


function factorial(num)
{
    if (isNaN(num))
            console.log(1)
    else
    {
        let res = 1;
        for (;num > 0; num--)
            res *= num
        console.log(res) 
    }
}

factorial(num)