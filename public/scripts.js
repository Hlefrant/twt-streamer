console.log("It works!");
const list = document.querySelector('.list');
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

socket.addEventListener('open', event => {
    console.log("connected", event);
});

socket.addEventListener('message', event => {
    const items = JSON.parse(event.data);
    const elements = document.querySelectorAll('tr');

    elements.forEach(element => {
        const valueSection = element.querySelector('.value');
        let dataName = element.dataset.name;
        const keys = Object.keys(items);
        keys.forEach(key => {
            if (key === dataName){
                valueSection.innerHTML = items[key].value;
            }

        })

    })



    socket.send("message received!");
});