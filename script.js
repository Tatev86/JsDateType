const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');
const date3 = document.getElementById('date3');
const date4 = document.getElementById('date4');
const timer = document.getElementById('timer-content');


function dateFormatted () {
    const date = new Date();

    const year = date.getFullYear();
    let month = 1 + date.getMonth();
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    } 
    if (day < 10) {
        day = '0' +day;
    }
    return `${day}/${month}/${year}`;
}

date1.innerHTML = dateFormatted();
date2.innerHTML = dateFormatted();
date3.innerHTML = dateFormatted();
date4.innerHTML = dateFormatted();

let minutes = 0;
let seconds = 0;

setInterval(() => {
seconds ++;
if (seconds == 60){
    minutes ++;
    seconds = 0
}

let formattedTime= (minutes < 10 ?  '0' + minutes : minutes) + ':' 
+ (seconds < 10 ? '0' + seconds : seconds);
    

timer.innerHTML = formattedTime
}, 1000) 


