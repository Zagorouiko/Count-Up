var countsUp = function(number) {
  var arrayNumbers = []
  for (var i = 1; i <= number; i++) {
    arrayNumbers.push(i)
  }
  return arrayNumbers;
}

function countsUpBy(limit, multiple) {
  var arrayNumbers = []
  for (var i = multiple; i <= limit; i+= multiple) {
    arrayNumbers.push(i)
  }
  return arrayNumbers;
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var limit = parseInt($("input#limit").val());
    var multiple = parseInt($("input#multiple").val());

    var array = countsUpBy(limit, multiple);
    var string = array.join(", ")
    $("p#results").text(string);
    event.preventDefault();
  });


})
