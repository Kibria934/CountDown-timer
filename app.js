const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const counDown = () => {
    const newDate = '1 jan 2023'
    const expectedDate = new Date(newDate)
    const date = new Date()
    const totalSec = (expectedDate - date) / 1000;
    //     console.log(secs);
    const d = Math.floor(totalSec / 3600 / 24)
    const h = Math.floor(totalSec / 3600) % 24;
    const m = Math.floor(totalSec / 60) % 60;
    const s = Math.floor(totalSec % 60)

    // ui design
    days.innerHTML = format(d);
    hours.innerHTML = format(h);
    mins.innerHTML = format(m);
    secs.innerHTML = format(s);
}
const format = (time) => {
    return time < 10 ? `${time}` : time;
}
counDown();
setInterval(counDown, 1000)

// Formating some time;