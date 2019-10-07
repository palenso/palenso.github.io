var timerValue = 0;
var timerValueTime = 9000;

function changeTimerValue(index) {
  timerValue = index;
  timerValueTime = 9000;
}

function activeAndDeactive(index) {
  if (index > 0) {
    document
      .getElementsByClassName("palenso-nav-tab-item")
      [index - 1].classList.remove("active");
    document
      .getElementsByClassName("palenso-nav-tab-content")
      [index - 1].classList.remove("show", "active");
  }
  if (index === 0) {
    document
      .getElementsByClassName("palenso-nav-tab-item")[5]
      .classList.remove("active");
    document
      .getElementsByClassName("palenso-nav-tab-content")[5]
      .classList.remove("show", "active");
  }
  document
    .getElementsByClassName("palenso-nav-tab-item")
    [index].classList.add("active");
  document
    .getElementsByClassName("palenso-nav-tab-content")
    [index].classList.add("show", "active");
}

function timerLoop() {
  activeAndDeactive(timerValue);
  timerValue = timerValue + 1;
  if (timerValue >= 6) {
    timerValue = 0;
  }
  if (timerValue >= 0) {
    setTimeout(timerLoop, timerValueTime);
  }
}

timerLoop();
