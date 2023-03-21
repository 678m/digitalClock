function time() {
  let sec = document.querySelector(".sec");
  let date = new Date();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  sec.innerHTML = seconds;
}

let interval = setInterval(time, 1000);
