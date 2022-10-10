import React, { useState } from 'react';
import SingleColor from  './SingleColor';
import Values from 'values.js';
import './App.css';


function App() {
  const [color, setColor] = useState('');
  const [error,setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10)
    console.log(colors)
  }

  return (
    <>
      <section className="container">
        <h3>ColorGenerator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>List Goes Here</h4>
      </section>
    </>
  );
}

export default App;
