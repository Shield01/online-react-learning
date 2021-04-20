import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Content =() =>{
  return(

    <>
    <Macbook />
    </>
  )
}

const Macbook = () => {
  return(
    <>
      <Image />
      <Question />
      <Answer year = {2018}/>
      <WithLink />

      <Image />
      <Question />
      <Answer year = {2019} />
      <WithLink />

      <Image />
      <Question />
      <Answer year = {2020} />
      <WithLink />
    </>
  )
  };
  // constants
  const question = {q: 'What I want for my birthday ?'}
  // const answer =  `Macbook Pro 2018 or Later`
  const img = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-family-compare-201810?wid=1500&hei=690&fmt=jpeg&qlt=80&.v=1603318779000"
  const buy = "Buy here"

// components
  const Image = () => 
  <div className="card">
    <div className="image" ><img src={img} alt="" /></div>
  </div> ;

  const Question = () => <p className="what">{question.q}</p>

  const Answer = (props) => {
    return (
      <>
      <h3 className="quest">Macbook Pro {props.year} or Later</h3>
      </>
    )
  };
  const WithLink = () => {
    return (
    <>
      <div className="btns">
      <a href="https://locate.apple.com/ng/en/" className="btn">{buy}</a>
      </div>
    </>
    )
  }

ReactDom.render(
<Content />
, document.getElementById('root')
);