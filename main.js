const units = document.querySelectorAll(
  ".events .container .info .time .unit h3",
);
const ourSkills = document.querySelector(".our-skills");
const skillProggNum = document.querySelectorAll(".skill h3");
const ourSkillsProgg = document.querySelectorAll(".skill .progg span");
const statsSection = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats-content .number");
/* Our Skills Section*/
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop + 20) {
    ourSkillsProgg.forEach((progg) => {
      progg.style.width = progg.dataset.progg;
    });
    skillProggNum.forEach((progg) => {
      if (progg.dataset.progg === "0") {
        let counter = 0;
        let maxProggLength = +progg.dataset.maxProgg;
        let countInervar = setInterval(() => {
          counter++;
          progg.dataset.progg = counter;
          if (counter >= maxProggLength) clearInterval(countInervar);
        }, 16);
      }
    });
  }
};
/* Units Code*/
let countDownDate = new Date("31 Dec 2026 23:59:59").getTime();
function updateCountdown() {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  if (dateDiff <= 0) {
    clearInterval(counter);
    units.forEach((unit) => {
      unit.textContent = "00";
    });
    return;
  }
  // Get Time Units
  let d = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let h = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.trunc((dateDiff % (1000 * 60)) / 1000);
  let unitsNumbers = [d, h, m, s];

  units.forEach((unit, index) => {
    unit.textContent = String(unitsNumbers[index]).padStart(2, "0");
  });
}
updateCountdown();
let counter = setInterval(updateCountdown, 1000);
/* stats Section */
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      statsNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(el) {
  let goal = +el.dataset.number;
  let countInerval = setInterval(() => {
    el.textContent++;
    if (el.textContent >= goal) clearInterval(countInerval);
  }, 2000 / goal);
}
