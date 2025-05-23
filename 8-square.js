const { argv } =  require("process")

const size =  +argv[2]

if (isNaN(size))
        console.log("Missing size")
else if (size > 0)
{
    let str = 'X'.repeat(size);
    for (let i = 0; i < size;i++)
        console.log(str);
}
