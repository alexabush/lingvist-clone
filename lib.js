export function compareAttemptWithCorrectWord(correctWord, attempt) {
  const letters = correctWord.split('');
  const correctLetters = {};
  const freq = {};
  for (let i = 0; i < letters.length; i++) {
    if (freq[letters[i]]) {
      freq[letters[i]].push(i);
    } else {
      freq[letters[i]] = [i];
    }
  }
  for (let i = 0; i < attempt.length; i++) {
    const letter = attempt[i];
    if (freq[letter]) {
      const correctIdx = freq[letter].shift();
      correctLetters[correctIdx] = letter;
    }
  }
  return correctLetters;
}
