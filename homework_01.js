function ex_1_I(array)
{
	var i=0;
	var sum=0;
	var quit=false;
	while(i<array.length&&!quit)
	{
		if(array[i]>=0)
		{
			sum+=array[1];
		}
		else
		{
			quit=true;
		}
		i++;
	}
	return sum;
}

function ex_1_R(array)
{	
	if(array[0]<0)
	{
		return 0;
	}
	if(array.length==2)
	{
		return array[0]+array[1];
	}
	else
	{
		return array[0]+ex_1_R(array.slice(1,array.length));
	}
}

var array = [5,5,5,-1,5,5];
console.log(console.log(sumIterativo(array)));
console.log(console.log(sumRicorsivo(array)));
