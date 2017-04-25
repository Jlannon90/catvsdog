$(function() {
  $(".catsbutton").click(function() {
    $(".catsul").prepend("<li>Meow!<li>");
    $(".dogsul").prepend("<li>Woof!<li>");
  });

  $(".dogsbutton").click(function() {
    $(".catsul").prepend("<li>Hiss!<li>");
    $(".dogsul").prepend("<li>Ruff!<li>");
  });






});
