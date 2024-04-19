import reviews from './data';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevReview = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const surpriseMe = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length);
    console.log(randomNumber);
    setIndex(randomNumber);
  };

  const { id, name, job, image, text } = reviews[index];
  return (
    <main>
      <div className='review' key={id}>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h3 className='author'>{name}</h3>
        <h3 className='job'>{job}</h3>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button
            className='prev-btn'
            type='button'
            onClick={() => prevReview()}
          >
            <FaAngleLeft />
          </button>
          <button
            className='next-btn'
            type='button'
            onClick={() => nextReview()}
          >
            <FaAngleRight />
          </button>
        </div>
        <button className='btn' type='button' onClick={() => surpriseMe()}>
          Surprise me
        </button>
      </div>
    </main>
  );
};
export default App;
