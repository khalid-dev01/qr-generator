let btn = document.getElementById("btn");
let input = document.getElementById("text");
let qr = document.getElementById("qr");
let shareBtn = document.getElementById("shareBtn");
btn.onclick = () => {
    if (input.value.trim() !== "") {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        shareBtn.style.display = "block";
    } else {
        alert("Please enter some text or URL!");
    }
};

shareBtn.onclick = async () => { 
    try {
        const response = await fetch(qr.src);
        const blob = await response.blob();
        const file = new File([blob], "qrcode.png", { type: "image/png" });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                title: 'QR Code',
                text: 'Check out my QR Code!',
                files: [file]
            });
        } else {
            navigator.clipboard.writeText(qr.src);
            alert("QR Code Link copied to clipboard! 📋");
        }
    } catch (err) {
        console.log("Error sharing:", err);
    }
};