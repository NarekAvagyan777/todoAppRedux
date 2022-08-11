import { useState } from "react";
import TodoModal from "../../BootstrapTools/TodoModal";
import { connect } from "react-redux";
import { addTodo } from "../../redux/todosReducer";

const Form = ({addTodo}) => {
  
  let [addTodoButton, setAddTodoButton] = useState(false)

  let handleButtonClick = () => {
    setAddTodoButton(true)
  }

  return (
    <>
      {addTodoButton && <TodoModal setAddTodoButton={setAddTodoButton} addTodo={addTodo} />}
      <div
        className="mt-3 col-3 offset-1 d-flex flex-column align-items-stretch"
        style={{
          boxSizing: "border-box",
        }}
      >
        <div className="text-center mb-2">Create todo</div>
          <button className="btn btn-primary" title="Create todo item" onClick={handleButtonClick} >
            Add todo
          </button>
      </div>
    </>
  );
};

export default connect(null, {
  addTodo,
})(Form);