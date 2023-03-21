function time() {
  let sec = document.querySelector(".sec");
  let min = document.querySelector('.min');
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();

  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}

let interval = setInterval(time, 1000);
