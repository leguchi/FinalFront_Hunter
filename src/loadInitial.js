window.addEventListener('load', async () => {
    //gets day list for current month
    const date = new Date();
    
    //Set month Label on top of calendar
    const month = document.getElementById('monthLabel');
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month.textContent = monthsArray[date.getMonth()];

    //Get month data
    const url = `http://127.0.0.1:5001/api/calendar/${date.getFullYear()}/${date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1):date.getMonth()+1}`;
    let data = await fetch(url, { method: "GET" }).then(rsp => {
        return rsp.json()
    });

    //sets title column for week days
    let calendarGrid = document.getElementById('calendarGrid');
    //adds days to calendar
    calendarGrid.innerHTML = data.days;

})