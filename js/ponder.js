function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var now = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var month = document.getElementById('month');
console.log(thisMonth);

if(month.textContent !== undefined) {
  month.textContent = thisMonth;
}
else {
  month.innerText = thisMonth;
}

var d = new Date();
document.getElementById("date").innerHTML = d.getDate();
