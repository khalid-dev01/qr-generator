let btn = document.getElementById("btn");
let input = document.getElementById("text");
let qr = document.getElementById("qr");

btn.onclick = () => {
    if (input.value.trim() !== "") {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

    } else {
        alert("Please enter some text or URL!");
    }
};