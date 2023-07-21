import React, {useState} from 'react';

import './App.css';

function App() {
  const [myName,setMyName] = useState('codecuri');
 
  const changeName = () =>{
    let val = myName;

    if (val === 'codecuri') {
      setMyName('svci computer')
    }else {
      setMyName('codecuri')
    }
  }

  return (
    <div>
       <h1>{ myName }</h1>
       <button className="btn" onClick={changeName}>click me plz </button>
    </div>
  );
}

export default App;
