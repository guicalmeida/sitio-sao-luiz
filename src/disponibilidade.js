import { generate, renderElement } from "./shortcutFunctions";

function createCalendar() {
    let calendarDiv = generate("div", "calendarDiv");
    let calendarEl = generate("div");
    calendarEl.setAttribute("id", "calendar");
    (function () {
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          height: "100%",
          locale: "pt-br"

        });
        calendar.render();
      })();
    calendarDiv.appendChild(calendarEl)
    return calendarDiv;
}

export {createCalendar}

