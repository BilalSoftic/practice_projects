import { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  console.log(data);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <div className='container'>
        <h1>Questions</h1>
        {questions.map((item) => {
          const { id, title, info } = item;
          return (
            <Question
              key={id}
              id={id}
              title={title}
              info={info}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;
