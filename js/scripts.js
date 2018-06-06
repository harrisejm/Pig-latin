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
    var test = ""

    for (var a = 0; a < arr1.length; a++) {
      var outPut = arr1[a];
      var outPut2 = outPut.join("");

      if (arr1[a][0] === "a" || arr1[a][0] === "e" || arr1[a][0] === "i" || arr1[a][0] === "o" || arr1[a][0] === "u") {
        test += outPut2 + "Way ";

      } else if (arr1[a][0] === "q" && arr1[a][1] === "u") {
        var singleConsonant = arr1[a].slice(2);
        singleConsonant.splice(arr1[a].length, 0, arr[a].slice(0,2));
        var singleConsonantOutput = singleConsonant.join("");
        test += singleConsonantOutput + " ";

      } else if ((arr1[a][0] !== "a" || arr1[a][0] !== "e" || arr1[a][0] !== "i" || arr1[a][0] !== "o" || arr1[a][0] !== "u")
      && (arr1[a][1] !== "a" || arr1[a][1] !== "e" || arr1[a][1] !== "i" || arr1[a][1] !== "o" || arr1[a][1] !== "u")) {

        var singleConsonant = arr1[a].slice(2);
        singleConsonant.splice(arr1[a].length, 0, arr[a].slice(0,2));
        var singleConsonantOutput = singleConsonant.join("");
        test += singleConsonantOutput + "Ay" + " ";
      } else if (arr1[a][0] !== "a" || arr1[a][0] !== "e" || arr1[a][0] !== "i" || arr1[a][0] !== "o" || arr1[a][0] !== "u") {
        var singleConsonant = arr1[a].slice(1);
        singleConsonant.splice(arr1[a].length, 0, arr[a].slice(0,1));
        var singleConsonantOutput = singleConsonant.join("");
        test += singleConsonantOutput + "Ay" + " ";
      }
    }

    $("#result").text(test);

  });
});
