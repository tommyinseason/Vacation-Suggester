$(document).ready(function() {
  $("#survey").submit(function(event) {

    var nameInput = $("input#name").val();
  $(".name").text(nameInput);

    event.preventDefault();

    var score = 0;

    var result = parseInt($("input:radio[name=setting]:checked").val());
    score += result;
    var result = parseInt($("input:radio[name=breakfast]:checked").val());
    score += result;
    var result = parseInt($("input:radio[name=president]:checked").val());
    score += result;
    var result = parseInt($("input:radio[name=pet]:checked").val());
    score += result;
    var result = parseInt($("input:radio[name=softdrink]:checked").val());
    score += result;
    var result = parseInt($("input:radio[name=liquor]:checked").val());
    score += result;

    // calculate results //
    if (score > 225) {
      $("amazon-rainforest").show();
    }
    else if (score > 150) {
      $("#thailand").show();
    }
    else if (score > 75) {
      $("#havasu-falls").show();
    }
    else if (score > 10) {
      $("#cruise-bahamas").show();
    }
  });
});
