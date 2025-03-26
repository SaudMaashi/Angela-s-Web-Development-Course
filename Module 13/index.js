const sounds = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3",
};

// document.querySelector("button").addEventListener("click", function () {
//     var audio = new Audio(sounds["d"]);
//     audio.play();
// });


const keys = Object.keys(sounds);
for (let i = 0; i < Object.keys(sounds).length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio(sounds[keys[i]]);
        audio.play();
        this.classList.add("pressed");
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 100);
    });
}

document.addEventListener("keydown", function (event) {
    var audio = new Audio(sounds[event.key]);
    audio.play();
    document.querySelector(`.${event.key}`).classList.add("pressed");
    setTimeout(() => {
        document.querySelector(`.${event.key}`).classList.remove("pressed");
    }, 100);
});