const a1 = [[5, 41], [7, 26], [9, 16], [11, 6], [12, 56], [14, 56], [16, 46], [18, 46], [20, 41], [22, 31]];
const b1 = [[5, 31], [6, 41], [7, 51], [9, 31], [10, 41], [11, 51], [13, 1], [14, 41], [15, 51], [17, 1], [18, 11], [19, 51], [21, 1], [22, 11]];
const c1 = [[6, 1], [7, 11], [9, 6], [10, 31], [11, 46], [13, 11], [14, 36], [16, 1], [17, 36], [19, 1], [20, 56], [22, 31]];
const d1 = [[5, 31], [5, 51], [6, 11], [6, 31], [6, 51], [7, 11], [7, 31], [7, 51], [8, 11], [8, 31], [8, 46], [9, 1], [9, 16], [9, 31], [9, 46], [10, 1], [10, 16], [10, 31], [10, 46], [11, 1], [11, 16], [11, 31], [11, 46], [12, 1], [12, 16], [12, 31], [12, 46], [13, 1], [13, 16], [13, 31], [13, 46], [14, 1], [14, 21], [14, 41], [15, 1], [15, 21], [15, 41], [16, 1], [16, 31], [17, 1], [17, 31], [18, 6], [18, 31], [19, 1], [19, 31], [20, 1], [20, 31], [21, 1]]
const d2 = [[7, 1], [7, 31], [8, 1], [8, 31], [9, 1], [9, 31], [10, 1], [10, 31], [11, 1], [11, 31], [12, 1], [12, 31], [13, 1], [13, 31], [14, 1], [14, 31], [15, 1], [15, 31], [16, 1], [16, 31], [17, 1], [17, 31], [18, 1], [18, 31], [19, 1]];
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
// 현재 방향 감지
var currentOrientation = window.orientation;

// 방향 변경 시 이벤트 핸들러 등록
window.addEventListener("orientationchange", function() {
  // 현재 방향 감지
  var newOrientation = window.orientation;
  if (newOrientation !== currentOrientation) {
    // 가로모드인 경우 body에 클래스 추가
    if (newOrientation === 90 || newOrientation === -90) {
      document.body.classList.add("landscape");
    } else {
      // 세로모드인 경우 body에서 클래스 제거
      document.body.classList.remove("landscape");
    }
    // 방향 변경 후 현재 방향 갱신
    currentOrientation = newOrientation;
  }
});
