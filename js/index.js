

$('#toggleOn, #list').hide();
$('#toggleOff,#toggleOn').on("click", function() {
$('#toggleOff, #toggleOn').toggle();
  $("#list").toggle();
})
