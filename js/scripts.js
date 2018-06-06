$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var string = $("input#year").val();
    var string1 = string.toLowerCase()//.trim();
    var arr = string1.split(" ");
    var arr1 = [];


    for ( var i=0; i<arr.length; i++){
      var newArr = arr[i];
      var newArr2 = newArr.split("");
      arr1.push(newArr2);
    }

    //$("#result").text(arr1[0][1]);

    var vowels = ["a", "e", "i", "o", "u"];
    var test = ""


    for (var a = 0; a < arr.length; a++) { //loop through array
      for (var i = 0; i < vowels.length; i++) { //loop through vowels
        if (arr1[a][0] === vowels[i]) {
          var outPut = arr1[a];
          var outPut2 = outPut.join("");
          test += outPut2 + "Way ";
        // test += arr1[a].length;
      } else if (arr1[0][0] !== vowels[0]) {
      //
      //
             test += "TEST";
       }
          }
          }
  //  $("#result").text(arr1[0] + "Way");
  $("#result").text(test);

//arr1[a].length &&

  });
});
