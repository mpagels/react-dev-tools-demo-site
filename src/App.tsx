import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    return (
    <div className="App">
        <Counter />
        <TextInput />
    </div>
  );
}

export default App;


function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(prev => prev + 1)
    }

    function sub() {
        setCount(prev => prev - 1)
    }

    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    )
}


function TextInput() {
    const [input, setInput] = useState("");

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }

    return  <div className="TextInput">
   < Input handleOnChange={handleOnChange} input ={input} />
        <Text input={input}/>
    </div>
}

function Text({input} : {input: string}) {
    return <h2>{input}</h2>
}

function Input({handleOnChange, input} : {handleOnChange : (e: ChangeEvent<HTMLInputElement>) => void, input: string}) {
    return <input onChange={handleOnChange} value={input}/>
}