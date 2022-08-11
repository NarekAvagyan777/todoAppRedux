import './App.css';
import Filters from './components/Filters/Filters';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="container px-5">
      <div className="container d-flex border-2 border-bottom border-warning pb-3 mb-2">
        <Filters />
        <Form />
      </div>
      <Todos />
    </div>
  );
}

export default App;