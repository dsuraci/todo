$('#new').append("Create New Task");

alert("Make sure to add at least 5 tasks for a new button to appear!");


//create new task
var taskcount = 0;
$('#new').click(function() {
    var taskcontent = prompt("Name your task.");
    while (taskcontent === ''){ //did not include null here in case the user wanted to cancel new task creation.
      taskcontent = prompt("Please provide an entry.")
    };
    $('#tasklist').append("<div class='task'><span class=checkbox></span><span class=content>" +taskcontent+ "</span><span class=delete></span></div>");
    taskcount++;
    if (taskcount === 5) {
      $('#amazing').append("<span id=tranq>Find Tranquility</span>");
    };

    if (tran === 1) {
      $('.checkbox').css({
        'background-image':'url("corgi.jpg")',
        'background-size':'contain'
      });
      $('.delete').css({
        'background-image':'url("cat.jpg")',
        'background-size':'contain'
      });
    };
  });

//mark task as completed or uncompleted
$(document).ready(function () {
    $(document).on('click', '.checkbox', function () {
        $(this).toggleClass('checkmark');
        $(this).parent().toggleClass('completedTask');
        return false;

    });
});

//delete button works
$(document).ready(function () {
    $(document).on('click', '.delete', function () {
        var certain = confirm("Are you sure you want to delete this task?");
        if (certain === true){
        $(this).parent().remove();
      };
        return false;

    });
});


//hover shiny

$(document).ready(function () {
    $(document).on('mouseenter', '.content', function () {
        $(this).css('text-decoration', 'underline');
          return false;

    });
});

$(document).ready(function () {
    $(document).on('mouseleave', '.content', function () {
        $(this).css('text-decoration', 'none');
          return false;

    });
});


//edit task
$(document).ready(function () {
    $(document).on('click', '.content', function () {
        var editcheck = confirm("Do you want to edit this task?");
        if(editcheck===true) {
          var newTask = prompt("What do you want the new task to be?");
          while (newTask=== ''|| newTask === null){
            newTask = prompt("Please provide an entry.");
          }
          $(this).text(newTask);
        }

    });
});


////////// VIEWING OPTIONS
$('#vall').append("View All Tasks");
$('#vcom').append("View Completed Tasks");
$('#vun').append("View Unfinished Tasks");

$('#vall').click(function() {
    $('.task').css('display','block');
  });

  $('#vun').click(function() {
      $('.task').css('display', 'block');
      $('.completedTask').css('display', 'none');
    });

    $('#vcom').click(function() {
      $('.task').css('display','none');
      $('.completedTask').css('display', 'block');
    });


//Just for fun


  var p = 0;
  var tran=0;


$(document).ready(function(){
  $(document).on('click','#amazing', function(){
    if (tran == 0) {
      if (p===0) {
      $('#tasklist').append("<div class='task'><span class=checkbox></span><span class=content>Dream I am a butterfly.</span><span class=delete></span></div>");
      p=1;
    };
    $('#container').toggleClass('yo');
    $('.checkbox').toggleClass("really");
    $('.delete').toggleClass("yup");
    tran = 1;
} else {
  $('#container').removeClass('yo');
  $('.checkbox').removeClass("really");
  $('.delete').removeClass("yup");
  tran = 0;
}
  });
})
