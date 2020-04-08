var pizza=
{
	toppings : ["Cheese", "Pepperoni", "Garlic", "Peppers"],
    toppingIndex:0,
    Interval:null,
 
	callpizza : function () 
		{
	        var pizzadetail = "";
			for (toppingIndex = 0; toppingIndex < this.toppings.length; toppingIndex++) 
			{
				if (toppingIndex < this.toppings.length-1)
					{
						pizzadetail += this.toppings[toppingIndex] + " and "
					}
				else
					{
						pizzadetail += this.toppings[toppingIndex] + "."
					}
			}
	        console.log("A delicious pizza with", pizzadetail);
	      }
}

	pizza.callpizza();
