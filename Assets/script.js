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


function saveTask() {
  localStorage.setItem($(this).attr("id"), $(this).prev().val());

  $(this).prev().transfer({
    to: $($(this)),
    duration: 10000
  });
}

function handleBlockSubmit(event){
  event.preventDefault();

  var calendarItem = calInputEl.val().trim();
  printBlockData(calendarItem)
};

saveButtonEl.on('click', saveTask);

