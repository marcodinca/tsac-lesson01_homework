function ex_4_I(a, b)
{
	var sum=0;
	if(a>b)
	{
		for(var i=(b+1);i<a;i++)
		{
			sum+=i;
		}
		return sum;
	}
	else if(b>a)
	{
		for(var i=(a+1);i<b;i++)
		{
			sum+=i;
		}
		return sum;
	}
	else if(b==a)
	{
		return 0;
	}
}

function ex_4_R(a, b, i)
{
	if(a<b)
	{
		return ex_4_R(a+1,b,i+a);
	}
	else if(b<a)
	{
		return ex_4_R(a,b+1,i+a);
	}
	else
	{
		return i+a;
	}
}
