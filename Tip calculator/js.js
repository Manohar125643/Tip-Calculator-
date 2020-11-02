function Tipcalculator() {
 			var amount = document.getElementById("amount").value;
  		 	var feedback = document.getElementById("feedback").value;
 		 	var numOfPeople = document.getElementById("spiltinto").value;


			  if (amount === "" || feedback == 0) {
			    alert("Please enter values");
			    return;
			  }
			  if (numOfPeople === "" || numOfPeople <= 1) {
			    numOfPeople = 1;
			    document.getElementById("spilt").style.display = "none";
			  } else {
			    document.getElementById("spilt").style.display = "block";
			  }

			  var total = (amount * feedback) / numOfPeople;

			  total = Math.round(total * 100) / 100;

			 total = total.toFixed(2);

			  document.getElementById("totalTip").style.display = "block";
			  document.getElementById("tip").innerHTML = total;

			}


				document.getElementById("totalTip").style.display = "none";
				document.getElementById("spilt").style.display = "none";


				document.getElementById("calculate").onclick = function() {
				  Tipcalculator();

				};