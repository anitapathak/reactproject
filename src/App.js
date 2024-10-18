import './style.css'
import { useState } from 'react'

function App() {
  let [Counter , setcounter]=useState(15);
  const addvalue=()=>{
    //Counter=Counter+1;
    setcounter(Counter+1);
  }
  const removevalue=()=>{
    //Counter=Counter-1;
    if (Counter>0){
    setcounter(Counter-1);
    }
    else{
      alert("can't removes")
    }
  }
  
  return (
    <>
 
   <h1>Counter: {Counter}</h1>
   <div class='container'>
   <button onClick={addvalue}>ADD VALUE {Counter}</button>
   <br />

   <button onClick={removevalue}>SUBTRACT VALUE {Counter}</button>
   
   <br />
   <footer >footer:{Counter}</footer>
   </div>

    </>
  );
}

export default App;
