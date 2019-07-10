import { compareAttemptWithCorrectWord } from '../lib';

describe('compareAttemptWithCorrectWord', () => {
  it('returns empty object if no correct letters', () => {
    expect(compareAttemptWithCorrectWord('eres', 'duck')).toEqual({});
  });
  it('returns in place letter correctly', () => {
    expect(compareAttemptWithCorrectWord('eres', 'arm')).toEqual({
      '1': 'r'
    });
  });
  it('returns out of place letter correctly', () => {
    expect(compareAttemptWithCorrectWord('eres', 'swan')).toEqual({
      '3': 's'
    });
  });
  it('returns duplicate letters correctly', () => {
    expect(compareAttemptWithCorrectWord('eres', 'emet')).toEqual({
      '0': 'e',
      '2': 'e'
    });
  });
  it('returns out of order letters in correct order', () => {
    expect(compareAttemptWithCorrectWord('eres', 'asar')).toEqual({
      '1': 'r',
      '3': 's'
    });
  });
  it.todo('handles out of order lettering');
});
