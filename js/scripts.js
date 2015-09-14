$(document).ready(function() {
  $("form#tasks-form").submit(function(event) {
    var inputtedTask = $("input#new-task").val();

    $("ul#to-do-tasks").append("<li><span class= 'task'>" + inputtedTask + "</span></li>")

    $("li").click(function() {
      $(this).remove();
      $("ul#completed-tasks").prepend(this);

    });

    $("input#new-task").val("");

    event.preventDefault();
  });
});
