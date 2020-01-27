module.exports =
{
	// function with input to log star
	sayHello : function(star)
	{	
		if (star === 5)
		{ 
			return "Excellent";
		
		}
		if (star === 4)
		{ 
		 	return "Very Good";
		
		}
		if (star === 3)
		{ 
		 	return "Good";
		
		}
		if (star === 2)
		{ 
		 	return "Need Improvement";
		
		}
		if (star===1)
		{
		       return "Poor";
		}
		

	}	

}