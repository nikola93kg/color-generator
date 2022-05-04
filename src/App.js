import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';


function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f00').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3 style={{ color: '#ff1919' }}>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className={`${error ? 'error' : null}`} value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />
          <button className="btn" type='submit'>submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>

  )
}

export default App