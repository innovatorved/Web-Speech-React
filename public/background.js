chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'speak') {
    const utterance = new SpeechSynthesisUtterance(message.text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === message.voice);
    speechSynthesis.speak(utterance);
  }
});
