const socket = io();
let input = document.getElementById('info');
input.addEventListener('keyup',(e)=>{
    if (e.key==='Enter') {
        socket.emit("message", e.target.value)
    }
})

socket.on('Welcome',data=>{
    alert(data);
});
socket.on('log',data=>{
    let div= document.getElementById('log');
    if(div.firstChild)div.removeChild(div.firstChild)
    let p = document.createElement('p')
    let mensajes= data.map(message=>{
        return `<div><span>${message.user} dice: ${message.message}</span></div>`
    }).join('');
    console.log(data)
    p.innerHTML = JSON.stringify(data);
    div.appendChild(p)
})