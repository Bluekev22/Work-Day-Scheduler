window.onload = function() {
    whatHourIsIt();
    nine();
}

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var hour = moment().format("H");
console.log(hour);

function whatHourIsIt() {
    if (hour > 9) {
      $("#9").addClass("past");
    } else if (hour >= 9 && hour < 10) {
      $("#9").addClass("present");
    } else if (hour < 9) {
      $("#9").addClass("future");
    }
    if (hour > 10) {
      $("#10").addClass("past");
    } else if (hour >= 10 && hour < 11) {
      $("#10").addClass("present");
    } else if (hour < 10) {
      $("#10").addClass("future");
    }
    if (hour > 11) {
      $("#11").addClass("past");
    } else if (hour >= 11 && hour < 12) {
      $("#11").addClass("present");
    } else if (hour < 11) {
      $("#11").addClass("future");
    }
    if (hour > 12) {
      $("#12").addClass("past");
    } else if (hour >= 12 && hour < 13) {
      $("#12").addClass("present");
    } else if (hour < 12) {
      $("#12").addClass("future");
    }
    if (hour > 13) {
      $("#13").addClass("past");
    } else if (hour >= 13 && hour < 14) {
      $("#13").addClass("present");
    } else if (hour < 13) {
      $("#13").addClass("future");
    }
    if (hour > 14) {
      $("#14").addClass("past");
    } else if (hour >= 14 && hour < 15) {
      $("#14").addClass("present");
    } else if (hour < 14) {
      $("#14").addClass("future");
    }
    if (hour > 15) {
      $("#15").addClass("past");
    } else if (hour >= 15 && hour < 16) {
      $("#15").addClass("present");
    } else if (hour < 15) {
      $("#15").addClass("future");
    }
    if (hour > 16) {
      $("#16").addClass("past");
    } else if (hour >= 16 && hour < 17) {
      $("#16").addClass("present");
    } else if (hour < 16) {
      $("#16").addClass("future");
    }
    if (hour > 17) {
      $("#17").addClass("past");
    } else if (hour >= 17 && hour < 18) {
      $("#17").addClass("present");
    } else if (hour < 17) {
      $("#17").addClass("future");
    }
  }

  
  
  