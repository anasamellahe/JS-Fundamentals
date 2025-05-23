const { argv } =  require("process")


let x =  +argv[2]
if (isNaN(x))
    console.log("Missing number of occurrences")
else
{
    while (x > 0)
    {
            console.log("C is fun")
            x--
    }
}