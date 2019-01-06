

var month = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var lectures = [
  ["HOLIDAY", "","","","","","","","","",""],
  ["PM C101", "IC C101", "BREAK", "DS Pract C103", "", "BREAK", "", "", "BREAK", "", ""],
  ["DS C001", "ECO C001", "BREAK", "CS C001", "", "BREAK", "EWP C104", "", "BREAK", "IC Pracct. C105", ""],
  ["", "", "BREAK", "CE1 C205", "", "BREAK", "", "", "BREAK", "", ""],
  ["IC C101", "", "BREAK", "CE1 C205", "PM C101", "BREAK", "CE Pract. C102", "", "BREAK", "", ""],
  ["DS C001", "", "BREAK","ECO E303", "", "BREAK","", "", "BREAK","", ""],
  ["CS PRACTICE C201", "", "BREAK", "CS C001", "", "BREAK", "", "", "BREAK", "", ""],
];

var iterator = 0;

function defaultFunction() {
  
  var nowDateTime = new Date();
  var completeTodayDate = week[nowDateTime.getDay()] + " " + nowDateTime.getDate() + " " + month[nowDateTime.getMonth()] + " " +  nowDateTime.getFullYear();
  
  document.getElementById("todayIS").innerHTML = completeTodayDate;
  //alert(lectures[nowDateTime.getDay()]);

  for(iterator = 1; iterator < 12; iterator++) {
    document.querySelectorAll('div.row div.col-8 p')[iterator].innerHTML = lectures[nowDateTime.getDay()][iterator-1];
    //document.querySelectorAll('div div p')[iterator].className = "border border-primary";

  }

}
