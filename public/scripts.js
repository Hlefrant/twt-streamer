console.log("It works!");
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');

socket.addEventListener('open', event => {
    console.log("connected", event);
});

socket.addEventListener('message', event => {
    const items = JSON.parse(event.data);
    const elements = document.querySelectorAll('.club');
    elements.forEach(element => {
        const valueSection = element.querySelector('.value');
        let dataName = element.dataset.name;
        const keys = Object.keys(items);
        keys.forEach(key => {
            if (key.toLowerCase() === dataName) {
                valueSection.innerHTML = items[key].value;
            }
        })
    })
    socket.send("message received!");
});

stop.addEventListener('click', () => {
    socket.send("stop");
})

restart.addEventListener('click', () => {
    socket.send("restart");
})





