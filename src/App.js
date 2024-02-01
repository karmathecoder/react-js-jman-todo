// import {Fragment} from 'react'
import { useState } from "react";
import Header from "./component/header/header";
import { Form } from "./component/form/form";
import { DynamicList } from "./component/dynamicTest/dynamicList";

function App() {
  const [tasksData, setTasksData] = useState([]);

  const addTaskHandler = (enteredTask) => {
    // arrow function more explain
    setTasksData((prevTask) => {
      const updatedTask = [...prevTask];
      updatedTask.unshift({ text: enteredTask, id: Math.random().toString() });
      // console.log(updatedTask.unshift())
      return updatedTask;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasksData((prevTask) => {
      const updatedTask = prevTask.filter((task) => task.id !== taskId);
      return updatedTask;
    });
  };

  let content = (<p>Hello there</p>);

  if(tasksData.length > 0){
    content = <DynamicList onDeleteItem={deleteTaskHandler} taskrray={tasksData} />
  }

  return (
    <div>
      <Header />
      <Form onTaskInsert={addTaskHandler}/>
      {content}
    </div>
  );
}

export default App;
