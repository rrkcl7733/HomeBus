const a1 = [[5, 41], [7, 26], [9, 16], [11, 6], [12, 56], [14, 56], [16, 46], [18, 46], [20, 41], [22, 31]];
const b1 = [[5, 31], [6, 41], [7, 51], [9, 31], [10, 41], [11, 51], [13, 1], [14, 41], [15, 51], [17, 1], [18, 11], [19, 51], [21, 1], [22, 11]];
const c1 = [[6, 1], [7, 11], [9, 6], [10, 31], [11, 46], [13, 11], [14, 36], [16, 1], [17, 36], [19, 1], [20, 56], [22, 31]];
const d1 = [[5, 31], [6, 1], [6, 21], [6, 41], [7, 1], [7, 16], [7, 31], [7, 46], [8, 1], [8, 16], [8, 31], [8, 46], [9, 1], [9, 16], [9, 31], [9, 46], [10, 1], [10, 16], [10, 31], [10, 46], [11, 1], [11, 16], [11, 31], [11, 46], [12, 1], [12, 16], [12, 31], [12, 46], [13, 1], [13, 16], [13, 31], [13, 46], [14, 1], [14, 21], [14, 41], [15, 1], [15, 21], [15, 41], [16, 1], [16, 21], [16, 41], [17, 1], [17, 31], [18, 1], [18, 31], [19, 1], [19, 31], [20, 1], [20, 31], [21, 1], [21, 31]]
const d2 = [[6, 31], [7, 16], [8, 1], [8, 46], [9, 16], [9, 46], [10, 16], [10, 46], [11, 16], [11, 46], [12, 16], [12, 46], [13, 16], [13, 46], [14, 16], [14, 46], [15, 16], [15, 46], [16, 16], [17, 16], [17, 46], [19, 16], [20, 46]];
const x1 = [a1, a1, b1, b1, c1, c1, d1, d2];
const x2 = [['H50-3_time1', 'H50-3_rest1'], ['H50-3_time2', 'H50-3_rest2'], ['H50-4B_time1', 'H50-4B_rest1'], ['H50-4B_time2', 'H50-4B_rest2'], ['H106_time1', 'H106_rest1'], ['H106_time2', 'H106_rest2'], ['50-8_time1', '50-8_rest1'], ['50-8_time2', '50-8_rest2']];


function updateTime() {
      let now = new Date();
	  let date = new Date();
	  for(let i=0; x1.length; i++) {
		  let ele = document.getElementById(x2[i][0]);
		  if (ele != null) {
			  for (let time of x1[i]) {
				  date.setHours(time[0]);
				  date.setMinutes(time[1]);
				  date.setSeconds(0);
				  date.setMilliseconds(0);
				  if (now <= date) {
					  let hour = date.getHours().toString().padStart(2, '0')
					  let min = date.getMinutes().toString().padStart(2, '0')
					  ele.innerHTML = hour + ' : ' + min;
					  let diff = date.getTime() - now.getTime();
					  let s = Math.floor(diff / 1000);
					  let m = Math.floor(s / 60);
					  s = s % 60;
					  let rest = document.getElementById(x2[i][1]);
					  rest.innerHTML = m + '분 ' + s + '초';
					  if (m < 10) {
						  ele.style.color = 'red';
						  rest.style.color = 'red';
					  } else {
						  ele.style.color = '';
						  rest.style.color = '';
					  }
					  break;
				  }
			  }
			  if (ele && !ele.innerHTML) {
				  ele.innerHTML = '버스가 없어!';
			  }
		  }
	  }
}

setInterval(updateTime, 1000);