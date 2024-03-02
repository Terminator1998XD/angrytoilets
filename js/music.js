var MusEnable = true;
var UserMusEnable = true;
var MusVolume = 0.15;

function setVolume(vol){
  MusVolume = vol;
  if(mus instanceof Audio)mus.volume = vol;
}

var music = [];
var mfplay = false;
for(let i = 0; i < 8; i++) music.push('mp3/'+i+".mp3");

var currentMusic = 0;

function curmusic(){
	return music[currentMusic];
}

function nextMusic(){
	currentMusic++;

	if(currentMusic >= music.length){
		currentMusic = 0;
	}

	playMusic();
}

function playMusic(){
  if(!mfplay) return;

	let _m = curmusic();

	if(!(_m instanceof Audio)){
		_m = new Audio(_m);
		_m.volume = MusVolume;
		_m.addEventListener("ended", nextMusic);
		music[currentMusic] = _m;
	}

	if(MusEnable && UserMusEnable)_m.play();
}

function pauseMusic(){
		let mus = curmusic();
		if(mus instanceof Audio)mus.pause();
}
