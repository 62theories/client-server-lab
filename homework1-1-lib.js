exports = f = (x) =>
{
	let index = 0;
	let answer = 0
	if(undefined !== x)
	{
		for(i = x.length - 1;i>=0;i--)
		{
			if(x[i] == 1)
			{
				answer+=Math.pow(2,index)
			}
			index += 1
		}
	return answer
	}
}