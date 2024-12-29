//rest operator

function sums(...input)
{
    let sum=0;
    for(let i of input)
    {
        sum+=i;
    }
    return sum;
}
console.log(sums(1,2,3));