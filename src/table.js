import CalendarDates from "calendar-dates";

async function createTable() {
    let calendarDates = new CalendarDates();
    let includedDates = await calendarDates.getMatrix(new Date());
    console.log('includedDates', includedDates);
    let a = document.createAttribute("class");
    a.value = "prev-month";
    // let tbody = document.querySelector(".calendar tbody");
    // console.log('.calendar tbody', tbody, typeof tbody);
    // let tr = document.querySelectorAll(".calendar tbody tr");
    // console.log('.calendar tbody tr', tr);

}

export {createTable};