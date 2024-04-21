import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';

export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className='slick-container'>
      {list.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} className='person-img' />
            <h3 className='name'>{name}</h3>
            <h4 className='title'>{title}</h4>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
    </Slider>
  );
}
