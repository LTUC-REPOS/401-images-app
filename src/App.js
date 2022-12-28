
import { useState } from 'react';
import './App.css';
import data from './data.json'
import { Footer } from './Footer';
import { Header } from './Header';
import { NaturalCards } from './NaturalCards';

function App() {

  const [total,setTotal] = useState(0)

  return (
    <>
    <Header/>
    <div className="App">
      <h1>Total likes: {total}</h1>
      <div className='cardsContainer'>
      {data.map(obj => {
        return (<NaturalCards data={obj} setTotal = {setTotal} total={total} />)
      })}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
