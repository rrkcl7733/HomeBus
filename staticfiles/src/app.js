const a = [[5, 42], [7, 26], [9, 16], [11, 6], [12, 56], [14, 56], [16, 46], [18, 46], [20, 41], [22, 31]];


function updateTime() {
      let now = new Date();
      for (var time of a) {
		  let date = new Date();
		  date.setHours(time[0]);
		  date.setMinutes(time[1]);
		  date.setSeconds(0);
		  date.setMilliseconds(0);
		  if (now <= date) {
			  let a_format = date.getHours() + ' : ' + date.getMinutes();
			  document.getElementById('H50-3').innerHTML = a_format;

			  let diff = date.getTime() - now.getTime();
			  console.log(date);
			  let s = Math.floor(diff / 1000);
			  let m = Math.floor(s / 60);
			  s = s % 60;
			  let rest = m + '분 ' + s + '초';
			  document.getElementById('H50-3_time').innerHTML = rest;
			  break;
		  }
      }
}

setInterval(updateTime, 1000);