let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("button").addEventListener("click", () => {
  if (voices.length > 0) {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value];
    window.speechSynthesis.speak(speech);
  } else {
    console.error("Voices not available yet. Please try again.");
  }
});