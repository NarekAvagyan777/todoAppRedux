import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = ({ todos, dateRange, showTodos, title }) => {
  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div>
      {todos
        .filter((item) => {
          return (
            item.deadline <= Date.now() + +dateRange * 86400000 &&
            (showTodos === "completed"
              ? item.completed
              : showTodos === "uncomplete"
              ? !item.completed
              : true) &&
            item.title.toLowerCase().includes(title.trim().toLowerCase())
          );
        })
        .map((item) => (
          <Todo todo={item} key={item.id} />
        ))}
    </div>
  );
};

export default connect(
  (state) => ({
    todos: state.todos,
    dateRange: state.filters.dateRange,
    showTodos: state.filters.showTodos,
    title: state.filters.title,
  }),
  null
)(Todos);
