document.addEventListener("keydown", (e) => {
    const keyName = e.key.toUpperCase();
    const audioObject = new Audio(`audio/${keyName}.mp3`);
    audioObject.play();
});