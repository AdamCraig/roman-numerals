$(document).ready(function() {

$("form").submit(function(event) {

  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousandths = ["", "M", "MM", "MMM"];

  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

       var arabicNumber = $("#userNumber").val();
       var workingNumber = arabicNumber.split("");

       var romanNumeral = [];

       var onesPlace = parseInt( workingNumber[0] );
       var tensPlace = parseInt( workingNumber[1] );
       var hundredsPlace = parseInt( workingNumber[2] );
       var thousandthsPlace = parseInt( workingNumber[3] );

       if (workingNumber.length === 1) {
         for(index = 1; index < ones.length; index++) {
           if (onesPlace === index ) {
             romanNumeral.push(ones[index]);
           }
         }
       } else {
         alert("Not Implemented Yet");
       }

       romanNumeral.join("");
       console.log(onesPlace);
       $("#result").text (romanNumeral);
       event.preventDefault();
 });
});
