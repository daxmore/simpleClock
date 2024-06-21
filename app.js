let curtime = document.querySelector(".clock");

let clock = () => {
    let time = new Date();
    let realtime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    curtime.innerText = realtime;
}
setInterval(() => {
    clock();
}, 1000);
clock();