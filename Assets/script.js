//Current Date/Time
var timeNow =  moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(timeNow);

var time = [
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
];
var timeBlock = $(`#time-block`);
var saveButtonEl = $('#saveBtn');


var setTimeBlocks = function() {
  localStorage.setItem("timeBlocks", JSON.stringify(timeBlock));
}

var getTimeBlocks = function() {
  var loadBlocks = JSON.parse(localStorage.getItem("timeBlocks"));
  if (loadBlocks) {
    timeBlocks = loadBlocks

    $.each(timeBlocks, function(hour, timeBlock) {
      var hourDiv = $("#" + hour);
      createBlock(timeBlock, hourDiv);
    })
  }
};


var currentHour = parseInt(moment().format("H"));
//Color Blocks
function timeBlock(hour) {
  hour = $(`#hour`);
  currentHour = Number(currentHour);
  if (hour > currentHour) {
    return 'future'
  } else if (hour === currentHour) {
    return 'present'
  } else{
    return 'past'
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
