var dialline = document.getElementsByClassName("dialline");
var clocke1 = document.getElementsByClassName("clock")[0];

for (let i = 0; i < 60; i++) {
  clocke1.innerHTML += "<div class='dialline'></div>";
  dialline[i].style.transform = "rotate(" + 6 * i + "deg)";
}
function clock() {
  var weekday = new Array(7);
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var date = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear(),
    hDeg = (h / 12) * 360,
    mDeg = (m / 60) * 360,
    sDeg = (s / 60) * 360,
    he1 = document.querySelector(".hour"),
    me1 = document.querySelector(".minute"),
    se1 = document.querySelector(".second"),
    datee1 = document.querySelector(".date"),
    daye1 = document.querySelector(".day");
  console.log(m);

  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let day = weekday[d.getDay()];
  he1.style.transform = "rotate(" + hDeg + "deg)";
  me1.style.transform = `rotate(${mDeg}deg)`;
  se1.style.transform = `rotate(${sDeg}deg)`;
  datee1.innerHTML = date + "/" + month + "/" + year;
  daye1.innerHTML = day;
}
setInterval(clock, 1000);
clock();
