console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let mastersong = document.getElementById('mastersong');
let myprogressbar = document.getElementById('myprogressbar');
let songitemplay = document.getElementsByClassName('songitemplay fa-solid fa-circle-play')
let gif = document.getElementById('gif')
let songs = [
    { songName: "permisson to dance", filePath: "1.mp3" },
    { songName: "Fake Love", filePath: "2.mp3" },
    { songName: "Dynamite", filePath: "3.mp3" },
    { songName: "HOME", filePath: "4.mp3" }

]
// audioelement.play();


masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.toggle("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.toggle(' fa-pause-circle');
        gif.style.opacity = 0;
    }
})




myprogressbar.addEventListener("timeupdate", () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress
})
myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName("songitemplay fa-solid fa-circle-play")).forEach((element) => {
        // console.log(element.target);
        audioelement.pause();
        element.classList.toggle("fa-play-circle");
        

    })


}

Array.from(document.getElementsByClassName("songitemplay fa-solid   fa-circle-play")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();

        songindex = parseInt(e.target.id);
        e.target.classList.toggle('fa-circle-pause');
        audioelement.src = `${songindex}.mp3`;
        mastersong.innerText = songs[songindex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.toggle = "fa-pause-circle";
        
    })


});
document.getElementById('next').addEventListener('click', () => {
    if (songindex > 4) {
        songindex = 0;

    } else {
        songindex += 1;
    }
    audioelement.src = `${songindex}.mp3`;
    mastersong.innerText = songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.toggle = "fa-pause-circle";
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;

    } else {
        songindex -= 1;
    }
    audioelement.src = `${songindex}.mp3`;
    mastersong.innerText = songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.toggle = "fa-pause-circle";
})