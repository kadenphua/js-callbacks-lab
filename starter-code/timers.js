window.onload = function () {

  var body = document.querySelector('body');
  var appendCount = document.getElementById('count')
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var count= 0;

  buttonStart.onclick = function() {
    x = window.setInterval(startTimer, 1000);
  }

  buttonStop.onclick = function () {
    window.clearInterval(x)
  }

  buttonReset.onclick = function () {
    window.clearInterval(x);
    count = 0;
    h1timer.textContent = "Stop Watch";
  }

  function startTimer (){
    var h1timer = document.getElementById('timer');
    h1timer.textContent =  "Time elapsed " + count;
    count++;
  }

}
