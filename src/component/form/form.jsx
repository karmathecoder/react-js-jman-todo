import React, { useState } from "react";

export const Form = (props) => {
    const [inputS, setInputS] = useState("");


  const handelChange = (e) => {
    setInputS(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    props.onTaskInsert(inputS)
  };
  
  return (
    <div>
      <form id="myform" >
        <input type="text" id="new-task-input" placeholder="Inset Task" value={inputS} onChange={handelChange} />
      </form>
      <button type="submit" onClick={handelSubmit} id="new-task-submit">Add Task</button>

    </div>
  );
};
