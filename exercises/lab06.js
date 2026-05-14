let following = false;

$("#creature").click(function () {
    $(this).toggleClass("transformed");
    $(this).toggleClass("transformed");
  $("#status").text("The creature changed shape.");
});
$("#creature").hover(
  function () {
$("#thought").stop(true, true).slideDown(300);
 $("#status").text("The creature revealed a thought.");
  },
  function () {
$("#thought").stop(true, true).slideUp(300);
$("#status").text("The thought disappeared.");
  }

$(document).keydown(function (event) {
if (event.key === " " || event.code === "Space"); {

}
});