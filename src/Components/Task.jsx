import React from "react";

const Task = ({title,Description, deleteTask ,index}) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{Description}</span>
      </div>
      <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
