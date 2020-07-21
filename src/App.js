import React, {useState} from 'react';

let userInput = null;


function App() {
  let state = useState(["Starting", "todo"]);
  let todos = state[0];
  let updateTodo = state[1];
  
  let list = todos.map(todo =><li>{todo}</li>);
  
  
  return (
    <div>
      <input ref={ (inputElm) => {
        userInput = inputElm;
      }} />
      <button onClick={()=>{
        updateTodo(todos.concat(userInput.value));
        userInput.value = "";
      }}>
        Save To-do</button>
      <ul>
        {list}
      </ul>
      </div>
  );
}

export default App;
