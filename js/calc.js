$(document).ready(function() {
  var total = "";

  $("input[type='button']").click(function() {
    var value = $(this).val();
    switch($(this).val()) {
      case "CE":
          total = "";
          break;
      case "=":
          total = eval(total);
          break;
      default:
        total = total.concat(value);
    }

    $(".answers").val(total);

  });
})
