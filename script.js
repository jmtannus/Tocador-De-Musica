const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');

const weaponOfChoice = {
  songName : "Weapon of Choice" ,
  artist : "Fatboy Slim" ,
  file : "weapon-of-choice"
} ;
const hangingByaMoment = {
  songName : "Hanging by a moment" ,
  artist : "Lifehouse" ,
  file : "hanging-by-a-moment"
};
const littleTalks = {
  songName : "Little Talks" ,
  artist : "Of Monsters and Men" ,
  file : "littleTalks"
};
const lastNite = {
  songName : "Last Nite" ,
  artist : "Jumbonics" ,
  file : "lastNite"
};
const andreaDoria = {
  songName : "Andrea Doria" ,
  artist : "Legiao Urbana" ,
  file : "andreaDoria"
} ;
const hearMeOut = {
  songName : "Hear Me Out" ,
  artist : "Frou Frou" ,
  file : "hearMeOut"
};
const cmere = {
  songName : "C mere" ,
  artist : "Interpol" ,
  file : "cmere"
};
const faint = {
  songName : "Faint" ,
  artist : "Linkin Park" ,
  file : "faint"
};
const wish = {
  songName : "I Wish I Knew How It Would Feel To Be Free" ,
  artist : "Billy Taylor" ,
  file : "wish"
};
const rockafellerSkank = {
  songName : "The Rockafeller Skank " ,
  artist : "Fatboy Slim" ,
  file : "rockafellerSkank"
};
const thatGirl = {
  songName : "That Girl" ,
  artist : "Maxi Priest & Shaggy" ,
  file : "thatGirl"
};
const euSei = {
  songName : "Eu sei" ,
  artist : "Papas Na Lingua" ,
  file : "euSei"
};
let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
const originalPlaylist = [weaponOfChoice, hangingByaMoment, littleTalks, lastNite, andreaDoria, hearMeOut, cmere, faint, wish, rockafellerSkank, thatGirl, euSei];
let sortedPlaylist = [...originalPlaylist]
let index = 0;

function playSong() {  
  play.querySelector('.bi').classList.remove("bi-play-circle-fill");
  play.querySelector('.bi').classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector('.bi').classList.add("bi-play-circle-fill");
  play.querySelector('.bi').classList.remove("bi-pause-circle-fill");
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
  cover.src = `images/${sortedPlaylist[index].file}.jpg`;
  song.src = `songs/${sortedPlaylist[index].file}.mp3`;
  songName.innerText = sortedPlaylist[index].songName;
  bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = sortedPlaylist.length - 1;
  } else {
    index -= 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === sortedPlaylist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initializeSong();
  playSong();
}

function updateProgressBar() {
  const barWidht = (song.currentTime/song.duration)*100;
  currentProgress.style.setProperty("--progress", `${barWidht}%`);
};

function jumpTo(event) {
  const width = progressContainer.clientWidht;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition/width)* song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
  const size = preShuffleArray.length;
  let currentIndex = size -1;
  while(currentIndex > 0){
    let randomIndex = Math.floor(Math.random()* size);
    let aux = preShuffleArray[currentIndex];
    preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
    preShuffleArray[randomIndex] = aux;
    currentIndex -= 1;
  } 
}

function shuffleButtonClicked() {
  if(isShuffled === false){
    isShuffled = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add("button-active");
  }
  else {
    isShuffled = false;
    shuffleArray(...originalPlaylist);
    shuffleButton.classList.remove("button-active");

  }
}

function repeatButtonClicked() {

}

initializeSong();

play.addEventListener("click" , playPauseDecider);
previous.addEventListener("click" , previousSong);
next.addEventListener("click" , nextSong);
song.addEventListener('timeupdate' , updateProgressBar);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);