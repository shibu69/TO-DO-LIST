import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function Home() {

  const initialArray = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
  const [task, setTask] = useState(initialArray );
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title,   Description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filterArray = task.filter((val,i)=>{
       return i!==index;
    })
    setTask(filterArray);
  }

  useEffect(()=>{
    
    localStorage.setItem("task",JSON.stringify(task))
  },[task]);
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <h1>Daily Routine</h1>
          Task:
          <input
            type="name"
            placeholder="Enter you task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          Enter you task description:
          <textarea
            rows="2"
            placeholder="Enter Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add to list</button>
          {task.map((item, index) => (
            <Task
              key={index}
              title={item.title}
              Description={item.Description}
              deleteTask={deleteTask}
              index={index}
            />
          ))}
        </div>
      </form>
    </>
  );
}
