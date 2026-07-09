let seconds = 0;

function updateTime() {
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
}

let timer = setInterval(updateTime, 1000);

function stopWatch() {
    clearInterval(timer);
}