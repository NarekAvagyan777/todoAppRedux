import { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";

export default function TodoModal({ setAddTodoButton, addTodo }) {
  const [show, setShow] = useState(true);
  let titleRef = useRef(null)
  let dateRef = useRef(null)
  let date = new Date();

let handleCreate = () => {
  if(titleRef.current.value.trim()){
    let newTodo = {
      title: titleRef.current.value.trimStart(),
      id: Date.now(),
      completed: false,
      deadline: new Date(dateRef.current.value).getTime()
    }
    addTodo(newTodo)
    setAddTodoButton(false)
  }
}

let handleClose = () => {
  setShow(false)
  setAddTodoButton(false)
}
  

  return (
    <Modal backdrop="static" show={show} onHide={handleClose} keyboard={false}>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <span>Title</span>
          <input
            title="Todo title"
            type="text"
            className="form-control ms-5 border-primary border-2"
            autoFocus={true}
            spellCheck="false"
            ref={titleRef}
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span>Deadline</span>
          <input type="date" defaultValue={new Date(date.getTime() + 7 * (24 * 3600 * 1000)).toISOString().slice(0, 10)} ref={dateRef} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}