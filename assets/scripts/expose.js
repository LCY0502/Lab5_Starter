// expose.js

window.addEventListener('DOMContentLoaded', init);

let horn, volume,
vol_img, horn_img, horn_audio;
let jsConfetti;
function init() {
  horn = document.getElementsByName("horn")[0];
  horn.onchange = horn_change;

  volume = document.getElementsByName("volume")[0];
  volume.onchange = volume_change;


  vol_img = document.querySelector("#volume-controls img")
  horn_img = document.querySelector("img");
  horn_audio = document.querySelector("audio");
  // set button to play music
  document.querySelector("button").onclick = play_audio;
  // Make the Confetty object
  jsConfetti = new JSConfetti();
  horn_change();
  volume_change();
}

function play_audio(){
  if(horn.value != "select")
    if(horn.value  == "party-horn")
      jsConfetti.addConfetti();

    horn_audio.play();
}

function horn_change(){
  set_horn_img();
  set_audio();
}

function volume_change(){
  let value = volume.value
  if(value == 0){
    vol_img.src = "assets/icons/volume-level-0.svg";

  }
  else if(value < 33){
    vol_img.src = "assets/icons/volume-level-1.svg";
  }
  else if(value < 67){
    vol_img.src = "assets/icons/volume-level-2.svg";
  }
  else{
    vol_img.src = "assets/icons/volume-level-3.svg";
  }
  // horn_audio.volume = value / 100;
}

function set_audio(){
  let new_horn = horn.value;
  if(new_horn == "select") return;
  let audio_path = "assets/audio/";
  horn_audio.src = audio_path + new_horn + ".mp3";

}
function set_horn_img(){
  let new_horn = horn.value;
  let path = "assets/images/";
  // Set path
  if(new_horn != "air-horn" && new_horn != "car-horn"
    && new_horn != "party-horn"){
      path = path + "no-image.png";
  }
  else{
    path = path + new_horn + ".svg";
  }

  horn_img.src = path;
}

