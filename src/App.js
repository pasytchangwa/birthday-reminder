import React, {useState} from 'react';
import data from './data';
import Items from './component/Items';


function App() {
  const [infos, setInfos] = useState(data)
  
  const handleClick = () => {
    setInfos([])
  }
  return (
    <>
      <main>
        <section className='container'>
          <h3>{infos.length} birthdays today</h3>
          <Items dates={infos} />
          <button type='button' onClick={() => handleClick()}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
