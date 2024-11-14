import { render, screen } from '@testing-library/react';
import { BackContext } from './Context/BackState';
import Home from './Component/Home';

test('speak function is called with correct parameters', () => {
  const mockSpeak = jest.fn();
  const mockValues = {
    text: 'Hello, world!',
    rate: 1,
    pitch: 1
  };
  const mockVoices = [
    { name: 'Voice1' },
    { name: 'Voice2' }
  ];
  const mockSelectedVoice = 'Voice1';
  const mockPlaying = false;

  render(
    <BackContext.Provider value={{
      values: mockValues,
      voices: mockVoices,
      selectedVoice: mockSelectedVoice,
      playing: mockPlaying,
      speak: mockSpeak
    }}>
      <Home />
    </BackContext.Provider>
  );

  const playButton = screen.getByTitle('Play Note');
  playButton.click();

  expect(mockSpeak).toHaveBeenCalledWith('Hello, world!');
});
