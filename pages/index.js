import React from 'react';
import LingvistModel from '../src/comp/LingvistModel';

const LingvistPage = (props) => {
  return (
    <div>
      <LingvistModel foreignWords={props.data.words}/>
    </div>
  )
}

LingvistPage.getInitialProps = async () => {
  const res = await fetch("https://alexabush.github.io/portfolio-data/json/lingvist-data.json")
  const data = await res.json()
  console.log('data',data.words)
  return {data}
}

export default LingvistPage;
