const brideEducation = document.querySelector(".education");
const familyNet = document.querySelector(".family-net");
const price = document.querySelector(".price");
const submitQuote = document.getElementById("submit-quote");
var starting_bid="500";
var age_prices = new Array();
age_prices["18"]=1.5;
age_prices["24"]=1.2;
age_prices["28"]=0.95;

submitQuote.addEventListener('click', function(){
  
  if (familyNet.options[familyNet.selectedIndex].text == "More than 100,000$") {
    answer = 500 * 2;
  } else if (familyNet.options[familyNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
    answer = 500 * 1.5;
  } else {
    answer = 500 * 1.2;
  }
  
 
  if (Education.options[Education.selectedIndex].text == "Undergraduate degree") {
    answer = answer * 1.5;
  } else if (Education.options[Education.selectedIndex].text == "College degree") {
    answer = answer * 1.2;
  } else if (Education.options[Education.selectedIndex].text == "High school degree") {
    answer = answer * 1.05;
  } else if (Education.options[Education.selectedIndex].text == "High school degree") 
    answer = answer*0.9;
  
    var skills = document.getElementsByTagName("input");
    for (var i = 0; i < 4; i++)
    {
       if (skills[i].checked)//if the item is checked
       {
          answer += (skills[i].value * 1);//then item total is updated to the previous total + value of checked item. Mutplied by 1 so that JS knows that it is a num
       }

    }
 
	var theForm = ument.forms["agefound"];
	var agecount = theForm.elements["agecount"] 
	for (var i = 0; i < agecount.length; i++)
	{
		if (agecount[i].checked) 
			{
				answer *= age_prices[agecount[i].value];
			
			}
	}


  
    var selectedRealistic = document.getElementsByClassName("gossip");
    for (var j = 0; j < 3; j++){
    
      if (selectedRealistic[j].checked && j == 0){
      		answer *= 0.85;
      }
      else if (selectedRealistic[j].checked && j == 1){
        answer *= 0.9;     
    }
    else if (selectedRealistic[j].checked && j == 2) {
        answer -= 200;   
    }
    }

  
    price.innerHTML = "£" + answer;


  
});

