// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  let voice_selection = document.getElementById('voice-select');
  let all_voices = window.speechSynthesis.getVoices();
  let voices_dict = {};
  for(let i = 0; i < all_voices.length; i++){
    const new_option = document.createElement('option');
    new_option.textContent = `${all_voices[i].name} (${all_voices[i].lang})`;
    voices_dict[`${all_voices[i].name} (${all_voices[i].lang})`] = all_voices[i];
    if (all_voices[i].default) {
      new_option.textContent += ' — DEFAULT';
    }
    new_option.setAttribute('data-lang', all_voices[i].lang);
    new_option.setAttribute('data-name', all_voices[i].name);
    voice_selection.appendChild(new_option);
  }
  let text_box = document.getElementById('text-to-speak');
  let talk_button = document.getElementsByTagName('button')[0];
  let image = document.getElementsByTagName('img')[0];
  let voice_selected = 'none';
  voice_selection.addEventListener('change', (event) => {
    voice_selected = event.target.value;
  });
  console.log(voice_selected);
  talk_button.addEventListener('click', () => {
    let utterThis = new SpeechSynthesisUtterance(text_box.value);
    utterThis.voice = voices_dict[voice_selected];
    image.src = 'assets/images/smiling-open.png';
    image.alt = 'Speaking Face';
    window.speechSynthesis.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      image.src = "assets/images/smiling.png";
    });
  });
  
  //image.src = 'assets/images/smiling.png';
  //image.alt = 'Smiling Face';
}
