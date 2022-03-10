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
    console.log(d);
    const h = Math.floor(totalSec / 3600) % 24;
    console.log(h);
    const m = Math.floor(totalSec / 60) % 60;
    const s = Math.floor(totalSec % 60)
    console.log(d, h, m, s);

}
counDown()
    // setInterval(counDown, 1000)