/* Tours images */
import toursImg1 from './images/tour-1.jpeg';
import toursImg2 from './images/tour-2.jpeg';
import toursImg3 from './images/tour-3.jpeg';
import toursImg4 from './images/tour-4.jpeg';

/* data */
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',

    className: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',

    className: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    className: 'fab fa-squarespace',
  },
];

export const serviceArticles = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
];

export const toursData = [
  {
    id: 1,
    img: toursImg1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'china',
    days: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: toursImg2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    days: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: toursImg3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    days: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: toursImg4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: 'kenya',
    days: 20,
    cost: 3300,
  },
];
