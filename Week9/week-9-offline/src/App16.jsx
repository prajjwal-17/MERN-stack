import React, { useState } from 'react';



const App = () => {
  const todos=[{
    key:1,
    title: "Go to Gym",
    done: false
  },
  {
    key:2,
    title:"Go to College",
    done: true
  }
]
const todosComponent=todos.map(todo=><Todo key={todo.key} title={todo.title} done={todo.done}/>)
    return (
        <div>
            {todosComponent}
        </div>
    );
};
const Todo = ({ title, done }) => {

  return (
      <div>
         {title} - {done ? "Done!":"Not Done" } 
      </div>
  );
};

export default App;

