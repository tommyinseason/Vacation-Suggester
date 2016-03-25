$(document).ready(function() {
  $("form").submit(function(event) {

    var score = 0;

    var result = parseInt($("input:radio[name=setting]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=breakfast]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=president]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=pet]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=softdrink]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=dayoff]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=liquor]:checked").val());
    score += result;

    // calculate results //
    if (score > 225) {
      alert("");
    }
    else if (score > 150) {
      alert("Angelina Jolie");
    }
    else if (score > 75) {
      alert("Angelina Jolie");
    }
    else if (score > 0) {
      alert("Whoopi Goldberg!");
    }
    else {
      alert("Rosanne");
    }
    event.preventDefault();
  });
});
