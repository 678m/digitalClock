function time() {
  let sec = document.querySelector(".sec");
  let min = document.querySelector(".min");
  let hrs = document.querySelector(".hrs");
  let amPm = document.querySelector('.AMPM');
  let am = 'AM';
  let date = new Date();
  
 

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();


  if(hrs > 12){
    hrs -= 12;
    am = 'PM'

  }
  hrs.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  amPm.innerHTML = am;

}

let interval = setInterval(time, 1000);
