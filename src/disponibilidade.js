import { generate, renderElement } from "./shortcutFunctions";

function createCalendar() {
    let calendarDiv = generate("div", "calendarDiv");
    calendarDiv.setAttribute("style", "height: 80vh; width: 80vw; display: block; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)");
    let calendarEl = generate("div");
    calendarEl.setAttribute("id", "calendar");
    (function () {
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          height: "100%",
          locale: "pt-br"

        });
      })();
    calendarDiv.appendChild(calendarEl)
    return calendarDiv;
}

export {createCalendar}

