var timeHiscore = 0;
var timerStart; // = performance.now();

showAfterTimeout();

function showAfterTimeout() {
  setTimeout(displayShape, Math.floor(Math.random() * 2000));
}

function displayShape()
{
  document.getElementById("shape").style.display = "block";
  timerStart = new Date().getTime();
}

function randomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1)? '0'+s: s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

document.getElementById("shape").onclick = function()
{
  var timeTaken;
  var timeEnd = new Date().getTime();
  var width = 50 + Math.floor(Math.random() * 150);
  var left = Math.floor(Math.random() * 400);
  var top = Math.floor(Math.random() * 300);
  var vertSize = top + width;

  if (vertSize > 400)
  {
    top = top - (vertSize - 400);

  }
  if (Math.random() > 0.5)
  {
    document.getElementById("shape").style.borderRadius = "50%";
  }
  else
  {
    document.getElementById("shape").style.borderRadius = "0%";
  }

  document.getElementById("shape").style.backgroundColor = randomColor(32);
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";
  document.getElementById("shape").style.display = "none";
  timeTaken = (timeEnd - timerStart) / 1000;
  if (timeHiscore == 0 || timeTaken < timeHiscore)
  {
    timeHiscore = timeTaken;
    document.getElementById('timeTaken').style.color = "red";
  }
  else
  {
    document.getElementById('timeTaken').style.color = "black";

  }

  document.getElementById('timeTaken').innerHTML = timeTaken + "s (Hiscore: " + timeHiscore + "s)";
  showAfterTimeout();
}



