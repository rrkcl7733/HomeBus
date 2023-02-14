function updateTime() {
      var now = moment();
      var currentTime = now.format('hh:mm:ss');
      document.getElementById('current-time').innerHTML = currentTime;
}

setInterval(updateTime, 1000);