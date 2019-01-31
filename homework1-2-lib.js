
exports = f = (x) =>
{
	
	let s = new Set()

	for(key in x)
	{
		if(s.has(x[key]))
		{
			return false
		}
		else
		{
			s.add(x[key])
		}
	}	
	return true
}
