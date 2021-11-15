const startingMinutes = 1;
let time = startingMinutes*10;

const countdown = document.getElementById('countdown');

setInterval(updatecountdown, 1000);

function updatecountdown()
{
    const minutes = Math.floor(time/60);
    let seconds = time%60;

    countdown.innerHTML = `${minutes}:0${seconds} seconds`;
    time--;

}