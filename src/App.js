import logo from './logo.svg';
import './App.scss';
import React, {useRef, useEffect, useState} from 'react';

function App() {
  const el = useRef(null)
  let array =  ['A', 'B', 'C', 'D']
  const [arr, setArr] = useState(array);
  const [target, setTarget] = useState([]);
  const [endArr, setEndArr] = useState(array);

  // useEffect(() => {
  //   setTarget(el.current)
  // });

  useEffect(() => {
    setTarget(el.current)
    let Arr = [];
    for (let i = 0; i < arr.length ; i++) {
      let div = document.createElement('div');
      div.innerHTML = array[i];
      div.style.width = "10px"
      div.style.height = "1Opx"
      Arr.push(div);
    }
    console.log(Arr)
    setEndArr(Arr)
  },[array]);

  useEffect(()=> {
    console.log(...endArr)
    // target.append(...endArr);
  },[endArr])

 

  return (
    <div ref={el} className="container">
      
    </div>
  );
}

export default App;
