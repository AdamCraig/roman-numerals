
$(document).ready(function() {

  var romanTranslate = function (number) {

  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousandths = ["", "M", "MM", "MMM"];

  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

       var workingNumber = number.split("").reverse();

       var romanNumeral = [];

       var onesPlace = parseInt( workingNumber[0] );
       var tensPlace = parseInt( workingNumber[1] );
       var hundredsPlace = parseInt( workingNumber[2] );
       var thousandthsPlace = parseInt( workingNumber[3] );

       // IF INPUTTED NUMBER HAS ONE DIGIT...
       if ( !parseInt(number) ) {
         alert("Please enter a valid number to convert!");
       } else if (workingNumber.length === 1) {
         for(index = 0; index < ones.length; index++) {
           if (onesPlace === index ) {
             romanNumeral.push(ones[index]);
           }
         }
         // IF INPUTTED NUMBER HAS TWO DIGITS...
       } else if (workingNumber.length === 2) {
          for(index = 0; index < tens.length; index++) {
            if (tensPlace === index) {
              romanNumeral.push(tens[index]);
            }
          }

          for(index = 0; index < ones.length; index++) {
            if (onesPlace === index ) {
              romanNumeral.push(ones[index]);
            }
          }
        // IF INPUTTED NUMBER HAS THREE DIGITS...

      } else if (workingNumber.length === 3) {
          for(index = 0; index < hundreds.length; index++) {
            if(hundredsPlace === index) {
              romanNumeral.push(hundreds[index]);
            }
          }

          for(index = 0; index < tens.length; index++) {
            if (tensPlace === index) {
              romanNumeral.push(tens[index]);
            }
          }

          for(index = 0; index < ones.length; index++) {
            if (onesPlace === index ) {
              romanNumeral.push(ones[index]);
            }
          }
          // IF INPUTTED NUMBER HAS FOUR DIGITS...

      } else if (workingNumber.length === 4 ) {
          for (index = 0; index < thousandths.length; index++) {
            if (thousandthsPlace === index) {
              romanNumeral.push(thousandths[index]);
            }
          }

          for(index = 0; index < hundreds.length; index++) {
            if(hundredsPlace === index) {
              romanNumeral.push(hundreds[index]);
            }
          }

          for(index = 0; index < tens.length; index++) {
            if (tensPlace === index) {
              romanNumeral.push(tens[index]);
            }
          }

          for(index = 0; index < ones.length; index++) {
            if (onesPlace === index ) {
              romanNumeral.push(ones[index]);
            }
          }

      } else {

         alert("Not Implemented Yet");

       }

       romanNumeral = romanNumeral.join("");
       return romanNumeral;
    }

    $("form").submit(function(event) {
      event.preventDefault();
      var arabicNumber = $("#userNumber").val();
      var final = romanTranslate(arabicNumber);
      $("#result").text(final);

 });
});
