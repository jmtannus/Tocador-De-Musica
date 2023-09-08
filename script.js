const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

//seção de variáveis auxiliares para o meu código
const weaponOfChoice = {
  songName: "Weapon of Choice",
  artist: "Fatboy Slim",
  file: "weapon-of-choice"
};
const hangingByaMoment = {
  songName: "Hanging by a moment",
  artist: "Lifehouse",
  file: "hanging-by-a-moment"
};
const littleTalks = {
  songName: "Little Talks",
  artist: "Of Monsters and Men",
  file: "littleTalks"
};
const lastNite = {
  songName: "Last Nite",
  artist: "Jumbonics",
  file: "lastNite"
};
const andreaDoria = {
  songName: "Andrea Doria",
  artist: "Legiao Urbana",
  file: "andreaDoria"
};
const hearMeOut = {
  songName: "Hear Me Out",
  artist: "Frou Frou",
  file: "hearMeOut"
};
const cmere = {
  songName: "C mere",
  artist: "Interpol",
  file: "cmere"
};
const faint = {
  songName: "Faint",
  artist: "Linkin Park",
  file: "faint"
};
const wish = {
  songName: "I Wish I Knew How It Would Feel To Be Free",
  artist: "Billy Taylor",
  file: "wish"
};
const rockafellerSkank = {
  songName: "The Rockafeller Skank ",
  artist: "Fatboy Slim",
  file: "rockafellerSkank"
};
let isPlaying = false;
const playlist = [weaponOfChoice, hangingByaMoment, littleTalks, lastNite, andreaDoria, hearMeOut, cmere, faint, wish, rockafellerSkank];
let index = 0;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
  cover.src = `images/${playlist[index].file}.webp`;
  song.src = `songs/${playlist[index].file}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].artist;
  likeButtonRender();
}

function previousSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

function updateProgressBar(){
  const barWidht = (song.currentTime/song.duration)*100;
  currentProgress.style.setProperty(`--progress`, `${barWidth}%`);
};

function jumpTo(event){
  const width: 
  const 
  const 
  song.
}

initializeSong();

play.addEventListener("click" , playPauseDecider);
previous.addEventListener("click" , previousSong);
next.addEventListener("click" , nextSong);
song.addEventListener('timeupdate' , updateProgressBar);
progressContainer.addEventListener('click', jumpTo);