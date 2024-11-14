document.addEventListener('DOMContentLoaded', function() {
  const speakButton = document.getElementById('speak-button');
  const textInput = document.getElementById('text-input');
  const voiceSelection = document.getElementById('voice-selection');

  function populateVoiceList() {
    const voices = speechSynthesis.getVoices();
    voiceSelection.innerHTML = '';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelection.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', function() {
    const text = textInput.value;
    const voice = voiceSelection.value;
    chrome.runtime.sendMessage({ action: 'speak', text: text, voice: voice });
  });
});
