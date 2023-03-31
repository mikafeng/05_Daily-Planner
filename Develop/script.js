// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtonEl = $('#save-btn');
var calInputEl = $('#cal-text');



function createCal(time) {
  let
}


var saveCalendar = function (event) {
  event.preventDefault();
  var calInput = calInputEl.val();

  if (!calInput) {
    console.log('need to fill out schedule block to save');
    return;
  }
};

var currentHour = parseInt(moment().format("H"));
//Color Blocks
function timeBlock(hour) {
  hour = Number(hour);
  currentHour = Number(currentHour);
  if (hour > currentHour) {
    return 'future'
  } else if (hour === currentHour) {
    return 'present'
  } else{
    return 'past'
  }
};

saveButtonEl.on('click', function(event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
 



//Current Date/Time
var timeNow =  moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(timeNow);





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
