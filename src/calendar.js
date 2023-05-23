function nextCalendar() {
    // let current = new Date();
    // let year = current.getFullYear();
    // let month = current.getMonth();
    // let date = current.getDate();

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    // default setup
    let defaultDisplay = document.querySelector(".calendar h2");
    // if (defaultDisplay.textContent != monthName[month]) {
    //     defaultDisplay.textContent = monthName[month];
    // }
    console.log(defaultDisplay);
    let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
    console.log('i', i);
    if (i == 11) {
        i = 0;
    } else {
        i += 1;
    }
    defaultDisplay.textContent = monthName[i];

}

function backCalendar() {
    // let current = new Date();
    // let year = current.getFullYear();
    // let month = current.getMonth();
    // let date = current.getDate();

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    // default setup
    let defaultDisplay = document.querySelector(".calendar h2");
    // if (defaultDisplay.textContent != monthName[month]) {
    //     defaultDisplay.textContent = monthName[month];
    // }
    console.log(defaultDisplay);
    let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
    console.log('i', i);
    if (i == 0) {
        i = 11;
    } else {
        i -= 1;
    }
    defaultDisplay.textContent = monthName[i];

}

function dayIncluded() {
    let defaultDisplay = document.querySelector(".calendar h2");
    let current = new Date();
    let year = current.getFullYear();
    let month = current.getMonth();
    let date = current.getDate();

    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (month < 9) {
        month = '0' + (month + 1);
    }
    else {
        month = (month + 1).toString();
    }
    let monthStart = new Date(`${year}-${month}-01`);
    console.log(monthStart);
    let weekday = {
        0: 'Su',
        1: 'Mo',
        2: 'Tu',
        3: 'We',
        4: 'Th',
        5: 'Fr',
        6: 'Sa'
    };
    let dow = weekday[monthStart.getDay()];
    let numOfDaysFeb;
    if (year % 4 == 0) {
        numOfDaysFeb = 29;
    }
    else {
        numOfDaysFeb = 28;
    }
    let numOfDays = {
        'January': 31,
        'February': numOfDaysFeb,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31
    };
    // let firstWeek = document.querySelector(".calendar table tbody tr td");
    switch (dow) {
        case 'Mo':
            console.log('mo');
            for (let i = 0; i < numOfDays[i]; i++) {
                document.querySelectorAll(".calendar table tbody tr td")[i].style.color = "#FFFFFF";
                document.querySelectorAll(".calendar table tbody tr td")[i].textContent = `${i + 1}`;
            }
            break;
        case 'Tu':
            {
                console.log('tu');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 0) {
                    i = 11;
                } else {
                    i -= 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    if (index == 0) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        case 'We':
            {
                console.log('we');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 0) {
                    i = 11;
                } else {
                    i -= 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    if (index <= 1) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        case 'Th':
            {
                console.log('th');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 0) {
                    i = 11;
                } else {
                    i -= 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    if (index <= 2) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        case 'Fr':
            {
                console.log('fr');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 0) {
                    i = 11;
                } else {
                    i -= 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    if (index <= 3) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        case 'Sa':
            {
                console.log('sa');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 0) {
                    i = 11;
                } else {
                    i -= 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    if (index <= 4) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        case 'Su':
            {
                console.log('su');
                let i = monthName.findIndex((mo) => mo == defaultDisplay.textContent);
                // console.log('i', i);
                if (i == 11) {
                    i = 0;
                } else {
                    i += 1;
                }
                for (let index = 0; index < numOfDays[i]; index++) {
                    // console.log(document.querySelectorAll(".calendar table tbody tr td"));
                    if (index <= 5) {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#A1A5A1";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${numOfDays[i]}`;
                    }
                    else {
                        document.querySelectorAll(".calendar table tbody tr td")[index].style.color = "#FFFFFF";
                        document.querySelectorAll(".calendar table tbody tr td")[index].textContent = `${index + 1}`;
                    }
                }
            }
            break;
        default:
            break;
    }

}

function changeNextMonth() {
    nextCalendar();
    dayIncluded();
}

function changePrevMonth() {
    backCalendar();
    dayIncluded();
}

function curMonth() {
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let today = new Date();
    let month = today.getMonth();
    return monthName[month];
}


export { changeNextMonth, changePrevMonth, curMonth };