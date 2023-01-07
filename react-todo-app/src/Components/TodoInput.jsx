import React from "react";

const TodoInput =  ({ todo, setTodo, addTodo}) => {
    return(
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Задание"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Создать
        </button>
      </div>
    )
  }

export default TodoInput;