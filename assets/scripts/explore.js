// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

// Input area
let voice_select; 
let text_area;

let talk_btn;
let voices = [];
let voice = {name: ""};

function init() {
  voice_select = document.getElementById("voice-select");
  text_area = document.getElementById("text-to-speak");
  talk_btn = document.querySelector("button");

  talk_btn.onclick = utter_text;
  voice_select.onchange = voice_change;

  populateVoiceList();
  voice_change();
}

function populateVoiceList() {
  if (typeof synth === "undefined") {
    return;
  }

  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("lang", voices[i].lang);
    option.setAttribute("name", voices[i].name);
    voice_select.appendChild(option);
  }
}

function voice_change(){
  const option = voice_select[voice_select.selectedIndex];
  const selected_name = option.getAttribute("name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selected_name) {
      voice = voices[i];
      return;
    }
  }
}

function utter_text(){
  if(voice.name == "" || text_area.value == "") return;
  const utter = new SpeechSynthesisUtterance(text_area.value);
  utter.voice = voice;
  synth.speak(utter);
}
