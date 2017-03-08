function createFamily()
{
    return {
        
        "myFamily" : [
        
            {
                "firstName" : "William",
                "middleName" : "Joseph",
                "lastName" : "Scears",
                "age" : 36
            },
            
            {
                "firstName" : "Maria",
                "middleName" : "Kathleen",
                "lastName" : "Scears",
                "age" : 35
            },
            
            {
                "firstName" : "Billy",
                "middleName" : "Phoenix",
                "lastName" : "Scears",
                "age" : 3,
            }
        
        ]
    }
}

function displayFamily(family)
{
	for (var i=0; i<family.myFamily.length; i++)
	{
		var familyMember = family.myFamily[i];
        $(".display").append(familyMember.firstName + " " + familyMember.middleName + " " + familyMember.lastName + " is " + familyMember.age + " years old.<br\>");
	}
}



function createCarBrands()
{
    return {
        
        "brands" : [
        
            {
                "make" : "Ford",
                "model" : ["Fiesta", "Focus", "Mustang", "Escape", "Explorer"]
            },
            
            {
                "make" : "Kia",
                "model" : ["Cadenza", "Niro", "Optima", "Soul", "Sonata", "Sportage", "Sedona"]
            }
            
        ]
     
    }
}

function displayCarBrands(carBrands)
{
	for (var i = 0; i < carBrands.brands.length; i++)
	{
        $(".carDisplay").append("Make: ");
		var brandNames = carBrands.brands[i];
        $(".carDisplay").append(brandNames.make + "<br\><br\>");
        
        $(".carDisplay").append("Models:<br\>");
        for (var j = 0; j <brandNames.model.length; j++)
        {
           var modelNames = brandNames.model[j];
           $(".carDisplay").append("&emsp;" + modelNames + "<br\>"); 
        }
        
        $(".carDisplay").append("<br\><br\>");
	}
}



$(document).ready(function()
{
	var family = createFamily();
	displayFamily(family);
    
    var carBrands = createCarBrands();
    displayCarBrands(carBrands);
});
