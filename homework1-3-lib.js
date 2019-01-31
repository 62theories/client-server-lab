
exports = f = (x) =>
{
	
	let s = new Set()
	if(x !== undefined)
	{
		var result = x.match(/[a-z]/g);

  		for(key in result)
  		{
  			s.add(result[key])
  		}

  		if(s.size == 26)
  		{
  			return true
  		}
 		 else
  		{
  			return false
  		}
	}	
  

}
