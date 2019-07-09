import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../pages/lingvist';

describe('lingvist page', () => {
  let wrap, instance;
  beforeEach(() => {
    wrap = shallow(<App />);
    instance = wrap.instance();
  });

  it('should not decrement index when index < 1', function() {
    expect(wrap.state('currentIndex')).toBe(0);
    instance.handleLeftClick();
    expect(wrap.state('currentIndex')).toBe(0);
  });
  it('should not decrement index isPrev', function() {
    instance.setState({ currentIndex: 1, isPrev: true });
    expect(wrap.state('currentIndex')).toBe(1);
    instance.handleLeftClick();
    expect(wrap.state('currentIndex')).toBe(1);
  });
  it('should decrement index when index > 1', function() {
    instance.setState({ currentIndex: 1 });
    expect(wrap.state('currentIndex')).toBe(1);
    instance.handleLeftClick();
    expect(wrap.state('currentIndex')).toBe(0);
  });
  it('should not increment index when index >= words.length - 1', function() {
    instance.setState({ currentIndex: 1 });
    expect(wrap.state('currentIndex')).toBe(1);
    instance.handleRightClick();
    expect(wrap.state('currentIndex')).toBe(1);
  });
  it('should not increment index when isPrev is false', function() {
    const emptyWordObj = {
      spanishWord: '',
      spanishPhrase: '',
      englishPhrase: '',
      englishWord: ['', ''],
      wordStrength: 0,
      wordDetails: '',
      partOfSpeech: ''
    };
    expect(wrap.state('currentIndex')).toBe(0);
    instance.setState({
      words: [Object.assign({}, emptyWordObj), Object.assign({}, emptyWordObj)]
    });
    expect(wrap.state('currentIndex')).toBe(0);
    instance.handleRightClick();
    expect(wrap.state('currentIndex')).toBe(0);
  });
  it('should increment index', function() {
    const emptyWordObj = {
      spanishWord: '',
      spanishPhrase: '',
      englishPhrase: '',
      englishWord: ['', ''],
      wordStrength: 0,
      wordDetails: '',
      partOfSpeech: ''
    };
    expect(wrap.state('currentIndex')).toBe(0);
    instance.setState({
      words: [Object.assign({}, emptyWordObj), Object.assign({}, emptyWordObj)],
      isPrev: true
    });
    expect(wrap.state('words').length).toBe(2);
    instance.handleRightClick();
    expect(wrap.state('currentIndex')).toBe(1);
  });
  it('handle success increments index', function() {
    expect(wrap.state('currentIndex')).toBe(0);
    instance.handleSuccess();
    expect(wrap.state('currentIndex')).toBe(1);
  });
  it('toggleModal method should toggleModal in state', function() {
    expect(wrap.state('showModal')).toBe(false);
    instance.toggleModal();
    expect(wrap.state('showModal')).toBe(true);
  });
});
