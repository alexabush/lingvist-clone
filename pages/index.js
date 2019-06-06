import Card from '../src/comp/Card';
import Scroller from '../src/comp/Scroller';

function onSlideTester() {
  console.log('on slide');
}
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mod = {
  '8': <div style={{ width: 8, height: 8, borderRadius: 4, border: '1px dotted black' }} />,
  '10': <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />,
};

const updateModifier = num => {
  mod[num] = <div style={{ width: 6, height: 6, borderRadius: 3, background: 'black' }} />;
  console.log(mod);
};

export default () => (
  <div style={{ width: '700px' }}>
    <Scroller values={oneToTen} modifiers={mod} onChange={updateModifier} onSlide={onSlideTester} />
  </div>
);
