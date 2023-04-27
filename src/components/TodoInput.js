import React,{useState} from 'react';

function TodoInput(props) {
    const [inputText,setInputText] = useState('');

  return (
    <div className='input-container'>
        <input type="text" className='input-box-todo' placeholder='Enter Your Todo' value={inputText}
        onChange={p=>{
            setInputText(p.target.value)
        }} />
        <button className='add-btn' 
        onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
       
    </div>
  )
}

export default TodoInput

