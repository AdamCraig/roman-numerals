var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousandths = ["", "M", "MM", "MMM"];

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var arabicNumber = $("#userNumber").val();
var workingNumber = arabicNumber.split("");
var romanNumeral = [];

var onesPlace = workingNumber[0];
var tensPlace = workingNumber[1];
var hundredsPlace = workingNumber[2];
var thousandthsPlace = workingNumber[3];

if (workingNumber.length === 1) {
  for(index = 0; index < ones.length; index++) {
    if (onesPlace === digits[index]) {
      romanNumeral.push(ones[index]);
    }
  }
} else {
  alert("Not Implemented Yet");
}

romanNumeral.reverse().join("");


$("form").submit(function(event) {
       event.preventDefault();
       $("#result").text(romanNumeral);
 });
