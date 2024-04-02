import Person from './Person';
function List({ people }) {
  return (
    <section>
      {people.map((item) => (
        <Person
          name={item.name}
          key={item.id}
          image={item.image}
          age={item.age}
        />
      ))}
    </section>
  );
}
export default List;
