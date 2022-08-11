import { useState, useEffect } from "react";
import { connect } from "react-redux/es/exports";
import { toggleTodo, deleteTodo, changeTodo } from "../../redux/todosReducer";
import EditModal from "../../BootstrapTools/EditModal";

const Todo = ({ todo, toggleTodo, deleteTodo, changeTodo }) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(todo.title);
  
    const handleInputChange = () => {
      toggleTodo(todo.id);
    };
  
    const handleDelete = () => {
      deleteTodo(todo.id);
    };
  
    useEffect(() => {
      setTitle(todo.title);
    }, [editMode, todo.title]);
  
    return (
      <>
        {editMode && (
          <EditModal
            todo={todo}
            changeTodo={changeTodo}
            setEditMode={setEditMode}
            title={title}
            setTitle={setTitle}
          />
        )}
        <div
          className={`border border-primary rounded m-2 mt-3 p-1 d-flex justify-content-between `}
        >
          <div className="d-flex align-items-center justify-content-between">
            <input
              className="form-check-input ms-1"
              type="checkbox"
              id={todo.id}
              onChange={handleInputChange}
              checked={todo.completed}
              style={{
                cursor: "pointer",
              }}
            />
  
            <label
              className={
                (todo.completed && "text-decoration-line-through ") +
                "form-check-label ps-3 "
              }
              htmlFor={todo.id}
              style={{
                cursor: "pointer",
              }}
            >
              {todo.title}
            </label>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              Deadline: {new Date(todo.deadline).toISOString().slice(0, 10)}
            </div>
  
            <button
              className="btn btn-warning"
              onClick={() => setEditMode(!editMode)}
              title="Edit todo item"
            >
              Edit
            </button>
  
            <button className="btn btn-danger ms-2" onClick={handleDelete} title="Delete todo item">
              Delete
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default connect(null, {
    deleteTodo,
    toggleTodo,
    changeTodo,
  })(Todo);
  