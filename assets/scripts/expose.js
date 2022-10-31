// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  let horn_selection = document.getElementById('horn-select');
  let images = document.getElementsByTagName('img');
  let horn_image = images[0];
  let audio_element = document.getElementsByTagName('audio');
  audio_element = audio_element[0];
  horn_selection.addEventListener('change', (event) => {
    if(event.target.value == 'air-horn'){
      horn_image.src = 'assets/images/air-horn.svg';
      horn_image.alt = "Air Horn image selected";
      audio_element.src = 'assets/audio/air-horn.mp3';
    }
    else if(event.target.value == 'car-horn'){
      horn_image.src = 'assets/images/car-horn.svg';
      horn_image.alt = "Car Horn image selected";
      audio_element.src = 'assets/audio/car-horn.mp3';
    }
    else if(event.target.value == 'party-horn'){
      horn_image.src = 'assets/images/party-horn.svg';
      horn_image.alt = "Party Horn image selected";
      audio_element.src = 'assets/audio/party-horn.mp3';
    }
  });
  let sound_element = document.getElementById('volume-controls');
  let sound_image = images[1];
  let sound_level = 50;
  sound_element.addEventListener('change', (event) =>{
    if(event.target.value == 0){
      sound_image.src = 'assets/icons/volume-level-0.svg';
      sound_image.alt = "Volume Level 0";
      sound_level = parseInt(event.target.value);
    }
    else if(event.target.value <= 33){
      sound_image.src = 'assets/icons/volume-level-1.svg';
      sound_image.alt = "Volume Level 1";
      sound_level = parseInt(event.target.value);
    }
    else if(event.target.value <= 67){
      sound_image.src = 'assets/icons/volume-level-2.svg';
      sound_image.alt = "Volume Level 2";
      sound_level = parseInt(event.target.value);
    }
    else{
      sound_image.src = 'assets/icons/volume-level-3.svg';
      sound_image.alt = "Volume Level 3";
      sound_level = parseInt(event.target.value);
    }
  });
  let play_sound_button = document.getElementsByTagName('button');
  play_sound_button = play_sound_button[0];
  play_sound_button.addEventListener('click', (event) => {
    console.log(typeof(sound_level));
    audio_element.volume = sound_level/100;
    audio_element.play()
    if(horn_image.alt == "Party Horn image selected") {
      jsConfetti.addConfetti();
    }
  });
}