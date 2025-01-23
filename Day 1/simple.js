
function gettemp(temp,name,a,b)
{
    if (temp < 20) {
        console.log("Cold day" + name)
        console.log(a+b)
    }
    else if (temp > 30) {
        console.log("Hot day" + name)
        console.log(a-b)
    }
    else
        console.log("Pleasent day"+name)
}
gettemp(14, " sunny", 7, 5)

var sum=(a, b) => a + b;
console.log(sum(5,6))