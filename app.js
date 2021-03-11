function calcTip() {
    let billTotal = document.getElementById('billAmount').valueAsNumber;
    let tipPercentage = document.getElementById('tipPercentage').valueAsNumber;
    let numPeople = document.getElementById('numPeople').value;
  
    //check for valid entries
    if (isNaN(billTotal) || billTotal <= 0) {
        alert("Please enter a positive number."); 
    }

    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please enter a positive number."); 
    }

    if (numPeople === "" || numPeople <= 0) {
       numPeople = 1;
       document.getElementById("numPeople").value = numPeople;
    }

   
    //do the calculations
    let tipAmount = ((tipPercentage / 100) * billTotal)/numPeople;
    let tipRounded = Math.round(tipAmount * 100 + Number.EPSILON)/100;
    let totalAmount = Math.round(((billTotal / numPeople) + tipRounded) * 100 + Number.EPSILON)/100;

    //show the amount in the display
    document.getElementById("display").innerHTML = `The tip will be $${tipRounded} per person. <br><br>
    The total bill per person including tip is $${totalAmount}`;
    

   //document.getElementsById("calcTip").onclick = calcTip();
}