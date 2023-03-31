var timeBlock = $(`.time-block`);
var saveButtonEl = $('#saveBtn');
var timeArray = [
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
];

//Current Date/Time
var timeNow =  moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(timeNow);


var currentHour = moment().hour() - 9;

//Color Blocks
function setColor () {

  for (i=0; i < timeArray.length; i++) {

  if (i < currentHour) {
      timeBlock[i].addClass("past");
  } else if (i === currentHour) {
    timeBlock[i].addClass("present");
  } else {
      timeBlock[i].addClass("future");
  }
}
};




function handleBlockSubmit(event){
  event.preventDefault();

  var calendarItem = calInputEl.val().trim();
  printBlockData(calendarItem)
};

saveButtonEl.on('click', handleBlockSubmit);







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
