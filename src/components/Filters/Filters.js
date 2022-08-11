import { useState, useRef } from "react";
import { connect } from "react-redux";
import { changeDateRange, changeShowTodos, changeTitle } from "../../redux/filterReducer";
const Filters = ({changeDateRange, changeShowTodos, changeTitle}) => {
  
  let [rangeValue, setRangeValue] = useState(7);
  let dateRangeRef = useRef(null);
  const completedFilterRef = useRef(null);
  const titleFilterRef = useRef(null);

  let handleShowAll = () => {
    changeTitle("");
    changeDateRange("30");
    changeShowTodos("all");
  }
  

  return (
    <div
      className="col-8 mt-3"
      style={{
        boxSizing: "border-box",
      }}
    >
      <div className="text-center mb-2">Filter todos</div>
      <div>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="By title"
          ref={titleFilterRef}
          onChange={() => {
            changeTitle(titleFilterRef.current.value);
          }}
        />
      </div>
      <div>
        By deadline:{+rangeValue === 0 ? 
        ' today' : +rangeValue === 1 ? 
        ' tomorrow' : 
        ` after ${+rangeValue} days`}
        
        <input
          type="range"
          className="form-range mb-2"
          id="customRange1"
          min={0}
          max={30}
          defaultValue={7}
          ref={dateRangeRef}
          onChange={(event) => {
            setRangeValue(event.target.value);
            changeDateRange(dateRangeRef.current.value);
          }}
        />
      </div>
      <div className="mb-3">
        <select
          ref={completedFilterRef}
          className="form-select"
          onChange={() => {
            changeShowTodos(completedFilterRef.current.value);
          }}
        >
          <option value="all">Both completed and uncomplete</option>
          <option value="completed">Completed</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-success" onClick={handleShowAll} >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default connect(null, { 
  changeDateRange, 
  changeShowTodos, 
  changeTitle 
})(Filters)