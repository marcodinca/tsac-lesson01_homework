function ex_2_I(n)
{
	var sum=0;
	var num=1;
	for(var i=0;i<n;i++)
	{
		sum += num;
		num += 2;
	}
	return sum;
}

function ex_2_R(n,index)
{
	if(index<n)
	{
		return (2*index+1)+ex_2_R(n,(index+1));
	}
	else
	{
		return 0;
	}

}

console.log(sumIterativo(3));
console.log(sumIterativo(3,0));
