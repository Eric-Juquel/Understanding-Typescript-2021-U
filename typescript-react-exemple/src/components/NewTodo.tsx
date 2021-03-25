import React, { useRef } from 'react';
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (todoText:string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText)
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
