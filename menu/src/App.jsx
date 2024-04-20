import { Categories } from './Categories';
import { MenuItem } from './MenuItem';
import { Title } from './Title';
import { useState } from 'react';
import data from './data';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  console.log(categories);

  const filterItems = (category) => {
    if (category !== 'all') {
      const newMenu = data.filter((item) => {
        return item.category === category;
      });
      console.log(newMenu);
      setMenu(newMenu);
    } else {
      setMenu(data);
    }
  };
  return (
    <main className='menu'>
      <Title title={'Our Menu'} />
      {/* btns */}
      <Categories categories={categories} filterItems={filterItems} />
      {/* menu */}
      <section className='section-center'>
        {menu.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};
export default App;
