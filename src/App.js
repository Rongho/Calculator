import { useState } from 'react';
import './App.css';

function App() {
  const[input, setinput]=useState("");

  const clickHandler=(evt)=>{
    setinput(input.concat(evt.target.value))
  }

  const ClearDisplay=()=>{
    setinput("")
  }
  const Calculate=()=>{
   setinput(eval(input).toString())
  }
  return (
    <>
    <h1 className='heading'>CALCULATOR</h1>
    <div className='calc'>
       <input type='text' placeholder='0' id='answer' value={input}/>
       <input type='button' value='9' className="button" onClick={clickHandler}/>
       <input type='button' value='8' className="button" onClick={clickHandler}/>
       <input type='button' value='7' className="button" onClick={clickHandler}/>
       <input type='button' value='6' className="button" onClick={clickHandler}/>
       <input type='button' value='5' className="button" onClick={clickHandler}/>
       <input type='button' value='4' className="button" onClick={clickHandler}/>
       <input type='button' value='3' className="button" onClick={clickHandler}/>
       <input type='button' value='2' className="button" onClick={clickHandler}/>
       <input type='button' value='1' className="button" onClick={clickHandler}/>
       <input type='button' value='0' className="button" onClick={clickHandler}/>
       <input type='button' value='.' className="button" onClick={clickHandler}/>
       <input type='button' value='+' className="button" onClick={clickHandler}/>
       <input type='button' value='-' className="button" onClick={clickHandler}/>
       <input type='button' value='/' className="button" onClick={clickHandler}/>
       <input type='button' value='×' className="button" onClick={clickHandler}/>
       <input type='button' value='%' className="button" onClick={clickHandler}/>
       <input type='button' value='CLEAR' className="button1" onClick={ClearDisplay} />
       <input type='button' value='=' className="button1" onClick={Calculate}/>
    </div>
    </>
  );
}

export default App;
