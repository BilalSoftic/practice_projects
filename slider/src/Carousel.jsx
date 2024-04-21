import { useEffect, useState } from 'react';
import { list } from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className='slider-container'>
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            key={id}
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: currentPerson === index ? 1 : 0,
              visibility: currentPerson === index ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className='person-img' />
            <h3 className='name'>{name}</h3>
            <h4 className='title'>{title}</h4>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
}
export default Carousel;
