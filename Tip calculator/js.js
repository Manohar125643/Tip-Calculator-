function Tipcalculator() {
 			var amount = document.getElementById("amount").value;
  		 	var feedback = document.getElementById("feedback").value;
 		 	var numOfPeople = document.getElementById("spiltinto").value;


			  if (amount === "" || feedback == 0) {
			    alert("Please enter values");
			    return;
			  }
			  if (numOfPeople === 0 || numOfPeople == 1) {
			    numOfPeople = 1;
			    
			  } 
			  else if(numOfPeople<0)
			  {
			    alert("Please enter correct value");
			    return;
			  }

			  var total = (amount * feedback) / numOfPeople;
			  total = Math.round(total * 100) / 100;
			  total = total.toFixed(2);

			  var totalt = (amount * feedback);
			  totalt = Math.round(totalt);
			  totalt = totalt.toFixed(2);

			  document.getElementById("totalTip").style.display = "block";
			  document.getElementById("tip").innerHTML = total;

			  document.getElementById("t_tipp").style.display = "block";
			  document.getElementById("t_tip").innerHTML = totalt;

			}


				document.getElementById("totalTip").style.display = "none";
				document.getElementById("t_tipp").style.display = "none";
				

				document.getElementById("calculate").onclick = function() {
				  Tipcalculator();

				};