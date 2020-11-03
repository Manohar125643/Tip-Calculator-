function Tipcalculator() {
    var amount = document.getElementById("amount").value;
    var feedback = document.getElementById("feedback").value;
    var numOfPeople = document.getElementById("spiltinto").value;


    var amountElement = document.getElementById("amount");
    if (!amountElement.checkValidity()) {
        document.getElementById("amountValidation").innerHTML = amountElement.validationMessage;
        return;
    }

    if (feedback == 0) {
        alert("Slect an option");
        return;
    }

    var numOfPeopleElement = document.getElementById("spiltinto");
    if (!numOfPeopleElement.checkValidity()) {
        document.getElementById("numberofpeopleValidation").innerHTML = numOfPeopleElement.validationMessage;
        return;
    }



    var total = (amount * feedback) / numOfPeople;
    //total = Math.round(total);
    total = total.toFixed(2);

    var totalt = (amount * feedback);
    //totalt = Math.round(totalt);
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