const { argv } = require("process")
let num =  +argv[2]

function factorial(num)
{
    if (isNaN(num))
            console.log(1)
    else
    {
        let res = 1;
        for (let i = 1;i <= num; i++)
            res *= i
        console.log(res) 
    }
}

factorial(num)