var timerValue = 0;
var timerValueTime = 9000;
// star timer value
var starTimerValue = 0;
var starTimerValueTime = 9000;

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

function starActiveAndDeactive(index) {
  console.log(index);
  if (index > 0) {
    document
      .getElementsByClassName("palenso-flex-item-circle")
      [index - 1].classList.remove("active");
    document
      .getElementsByClassName("palenso-stars")
      [index - 1].classList.remove("active");
  }
  if (index === 0) {
    document
      .getElementsByClassName("palenso-flex-item-circle")[4]
      .classList.remove("active");
    document
      .getElementsByClassName("palenso-stars")[4]
      .classList.remove("active");
  }
  document
    .getElementsByClassName("palenso-flex-item-circle")
    [index].classList.add("active");
  document
    .getElementsByClassName("palenso-stars")
    [index].classList.add("active");
}

function starTimerLoop() {
  console.log(starTimerValue);
  starActiveAndDeactive(starTimerValue);
  starTimerValue = starTimerValue + 1;
  if (starTimerValue >= 5) {
    starTimerValue = 0;
  }
  if (starTimerValue >= 0) {
    setTimeout(starTimerLoop, starTimerValueTime);
  }
}

timerLoop();
starTimerLoop();
