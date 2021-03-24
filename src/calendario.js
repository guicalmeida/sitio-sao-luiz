import { generate, multiAppend } from "./shortcutFunctions";

  let priceH1 = generate("h1", "priceH1", "Clique nas datas para simular o preço de sua estadia");
  let calendar = generate("div", "calendar");
  let month = generate("div", "month");
  let prev = generate("i", "fas");
  prev.classList.add("fa-angle-left");
  prev.classList.add("prev");
  let calDate = generate("div", "date");
  let monthTitle = generate("h1", "monthTitle");
  let subtitleDiv = generate("div", "subtitleDiv");
  let subtitleP = generate("p");
  let airbnbBtn = generate("button","airbnbBtn", "reserve agora");
  let airbnbIco = generate("i", "fab");
    airbnbIco.classList.add("fa-airbnb");
    airbnbBtn.addEventListener("click", e =>{return window.open("https://www.airbnb.com.br/rooms/43450708")})
    airbnbBtn.appendChild(airbnbIco);
  let next = generate("i", "fas");
  next.classList.add("fa-angle-right");
  next.classList.add("next");
  let weekDays = generate("div", "weekdays");
  let dom = generate("div", "day", "dom");
  let seg = generate("div", "day", "seg");
  let ter = generate("div", "day", "ter");
  let qua = generate("div", "day", "qua");
  let qui = generate("div", "day", "qui");
  let sex = generate("div", "day", "sex");
  let sab = generate("div", "day", "sab");
  let allDays = generate("div", "days");
  allDays.setAttribute("id", "days");
  multiAppend(subtitleDiv, subtitleP, airbnbBtn)
  multiAppend(calDate, monthTitle, subtitleDiv);
  multiAppend(month, prev, calDate, next);
  multiAppend(weekDays, dom, seg, ter, qua, qui, sex, sab);
  multiAppend(calendar, month, weekDays, allDays);


(function calendarJS() {
  const date = new Date();

  const renderCalendar = () => {

    date.setDate(1);

    const monthDays = allDays;

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    monthTitle.innerHTML = months[date.getMonth()];

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date" value="${prevLastDay - x + 1}">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today" value="${i}">${i}</div>`;
      } else {
        days += `<div value="${i}">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date" value="${j}">${j}</div>`;
      monthDays.innerHTML = days;
    }
  };

  prev.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    lodgingValue();
  });
  
  next.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    lodgingValue();
  });

  return renderCalendar();
})();

function lodgingValue() {
  let days = document.getElementById("days").querySelectorAll("div");
  let userQuery = [];
  let price;
  let costPerNight = 749;
  let cleaningCost = 300;
  let today = document.querySelector(".today");

  days.forEach(day => {
    if (
    day.getAttribute("class") == undefined &&
    (today === null ||
      Number(day.getAttribute("value")) > Number(today.getAttribute("value")))

    ) {
      day.addEventListener("click", i => {
        if (userQuery.length == 0) {
          userQuery.push(Number(day.getAttribute("value")));
          day.style.background = "#b5fad2";
          price = costPerNight + cleaningCost;
          subtitleP.textContent = `R$${price}`;
        } else if (userQuery.length == 1) {
          userQuery.push(Number(day.getAttribute("value")));
          userQuery.sort(function (a, b) { return a - b; });
          for (let value of days.values()) {
            if (
              Number(value.getAttribute("value")) >= userQuery[0] &&
              Number(value.getAttribute("value")) <= userQuery[1] &&
              value.getAttribute("class") == undefined
            ) {
              value.style.background = "#b5fad2";
            };
          }
          price = (userQuery[1] - userQuery[0]) * costPerNight + cleaningCost;
          subtitleP.textContent = `R$${price}`;

        } else {
          userQuery = [];
          for (let value of days.values()) {
            value.style.background = "rgba(0,0,0,0)";
          }
          day.style.background = "#b5fad2";
          subtitleP.textContent = `R$${costPerNight + cleaningCost}`;
          userQuery.push(Number(day.getAttribute("value")));
        }
      })
    } else {day.setAttribute("style", "cursor: not-allowed; opacity: 0.5")};
  })
}

export { calendar,priceH1, lodgingValue }