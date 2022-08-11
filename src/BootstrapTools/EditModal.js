import { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function EditModal({
  todo,
  changeTodo,
  setEditMode,
  title,
  setTitle,
}) {
  const [show, setShow] = useState(true);
  const dateRef = useRef(null);
  const date = new Date();

  const handleSave = () => {
    if (title === todo.title && !dateRef.current.value) {
      return setEditMode(false);
    }
    if (title.trim() || dateRef.current.value) {
      const newDeadline = dateRef.current.value
        ? new Date(dateRef.current.value).getTime()
        : todo.deadline;

      changeTodo(todo.id, title, newDeadline);
    }

    setEditMode(false);
  };

  const handleClose = () => {
    setEditMode(false);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <span>Title</span>
          <input
            title="Todo title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control ms-5 border-primary border-2"
            autoFocus={true}
            spellCheck="false"
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span>Deadline</span>
          <input
            title="Deadline"
            type="date"
            min={date.toISOString().slice(0, 10)}
            max={new Date(date.getTime() + 30 * 86400000)
              .toISOString()
              .slice(0, 10)}
            ref={dateRef}
            defaultValue={new Date(todo.deadline).toISOString().slice(0, 10)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
