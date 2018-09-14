
//waits for document to be ready
$(document).ready(function(){
//works sections
  for(var i = 0; i < work.length; i++ ) {
    $("#work").append("\
    <div class= 'col-md-4 col-xs-12'>\
      <a href='" + work[i].src + "' class='work-img'>\
      <img src= '" + work[i].pic + "' class='img-responsive'> \
      <span class= 'info'><p class='proj-title'>Title:</p> " + work[i].title +" \
      <a href='" + work[i].code + "' class='code-img'>\
      <img src= '" + work[i].github + "' class='git-img-responsive'> \
       </span>\
      </a>\
    </div>\
    ");
  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
  };
//tooltips

    $(function() {
      $('#item1').tooltip();
    })

    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

//smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

var charCount = "string";

  $("#message-box").on("keyup", function() {
    var charCount = $("#message-box").val().length;
    $("#char-count").html(charCount);
    if(charCount>50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    }
  });

  $("#submit").on("click", function(){
    var name = $("#Name").val();
    $("#visible-name").html(name);
    $("#Name").hide();
    var number = $("#number").val();
    $("#visible-number").html(number);
    $("#number").hide();
    var email= $("#Email").val();
    $("#visible-email").html(email);
    $("#Email").hide();
    var comment = $("#message-box").val();
    $("#visible-comment").html(comment);
    if ($("#message-box").val() === "") {
      $("#message-box").css("border", "2px solid red");
    } else {
      $("#message-box").hide();
    }
    alert("We recieved your message!" + '\n' + name + '\n' + number + '\n' + email + '\n' + comment);
    return false;
  });
})
