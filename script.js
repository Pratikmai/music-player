console.log("Welcome to Spotify");

// Initialize variable
let songIndex = 0;
let audioElement = new Audio("Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItems"));

let songs = [
  {
    songName: "Yeuta Machheko Mayale Kati",
    filePath: "Songs/1.mp3",
    coverPath: "Covers/cover1.jpg",
  },
  {
    songName: "Kehi Mitho Baat Gara",
    filePath: "Songs/2.mp3",
    coverPath: "Covers/cover2.jpg",
  },
  {
    songName: "Parkhi Base Aula Bhani",
    filePath: "Songs/3.mp3",
    coverPath: "Covers/cover3.jpg",
  },
  {
    songName: "Yeti Dherai Maya Dii",
    filePath: "Songs/4.mp3",
    coverPath: "Covers/cover4.jpg",
  },
  {
    songName: "Timro Jasto Mutu",
    filePath: "Songs/5.mp3",
    coverPath: "Covers/cover5.png",
  },
  {
    songName: "Mero Pyaro Okhaldhunga",
    filePath: "Songs/6.mp3",
    coverPath: "Covers/cover6.jpg",
  },
  {
    songName: "Malai Nasodha",
    filePath: "Songs/7.mp3",
    coverPath: "Covers/cover7.jpg.jpg",
  },
  {
    songName: "Jun Fula Maile",
    filePath: "Songs/8.mp3",
    coverPath: "Covers/cover8.jpg",
  },
  {
    songName: "Mero Behosi",
    filePath: "Songs/9.mp3",
    coverPath: "Covers/cover9.jpg",
  },
  {
    songName: "Mata Laligurash Vayechhu",
    filePath: "Songs/10.mp3",
    coverPath: "Covers/cover10.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    e.target.classList.remove("fa-circle-pause");
    e.target.classList.add("fa-circle-play");
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      if (e.target.classList.contains("fa-circle-play")) {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
      }
      else{
        
      }
      // if(audioElement.paused || audioElement.currentTime<=0){
      //     makeAllPlays();
      //     songIndex = parseInt(e.target.id);
      //     audioElement.src=`Songs/${songIndex+1}.mp3`;
      //     e.target.classList.remove('fa-circle-play');
      //     e.target.classList.add('fa-circle-pause');
      //     audioElement.currentTime=0;
      //     audioElement.play();
      //     masterSongName.innerText = songs[songIndex].songName;
      //     gif.style.opacity = 1;
      //     masterPlay.classList.remove('fa-circle-play');
      //     masterPlay.classList.add('fa-circle-pause');
      // }
      // else{
      //     makeAllPlays();
      //     e.target.classList.remove('fa-circle-pause');
      //     e.target.classList.add('fa-circle-play');
      //     audioElement.pause();
      //     gif.style.opacity = 0;
      //     masterPlay.classList.remove('fa-circle-pause');
      //     masterPlay.classList.add('fa-circle-play');
      // }
      // e.target.classList.remove('fa-circle-play');
      // e.target.classList.add('fa-circle-pause');
      // audioElement.currentTime=0;
      // audioElement.play();
      // masterSongName.innerText = songs[songIndex].songName;
      // gif.style.opacity = 1;
      // masterPlay.classList.remove('fa-circle-play');
      // masterPlay.classList.add('fa-circle-pause');
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
