import { useState } from "react";
import { useData } from "../providers/DataProvider";
import { TaskItem } from "./TaskItem";
import "./TaskList.css";

export const TaskList = () => {
  const { data, setData } = useData();
  const [textValue, setTextValue] = useState("");
  const [textDesc, setTextDescValue] = useState("");
  const [textAssig, setTextAssigValue] = useState("");
  const [textDate, setTextDateValue] = useState("");

  const tasks = data.tasks;

  const newTask = (name) => {
    const newTask = {
      id: `${tasks.length + 1}`,
      status: "TODO",
      name: name,
      description: textDesc,
      assignedTo: textAssig,
      dueDate: textDate,
    };

    setData((prev) => {
      console.log(prev)
      return ({ ...prev, tasks: [...tasks, newTask] })
    });
  };

  const handleSubmit = (event) => {
    setTextValue("");
    setTextDescValue("");
    setTextDateValue("");
    setTextAssigValue("");
    event.preventDefault();
    newTask(textValue);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };

  const handleTextDescChange = (event) => {
    const value = event.target.value;
    setTextDescValue(value);
  };

  const handleTextAssigChange = (event) => {
    const value = event.target.value;
    setTextAssigValue(value);
  };

  const handleTextDateChange = (event) => {
    const value = event.target.value;
    setTextDateValue(value);
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={textValue}
          onChange={handleTextChange}
          type="text"
          placeholder="Task name"
        />
        <input
          className="input"
          value={textDesc}
          onChange={handleTextDescChange}
          type="text"
          placeholder="Task Description"
        />
        <input
          className="input"
          value={textAssig}
          onChange={handleTextAssigChange}
          type="text"
          placeholder="Task Assigned to"
        />
        <input
          className="input"
          value={textDate}
          onChange={handleTextDateChange}
          type="text"
          placeholder="Task Date"
        />
        <button className="button-17" >Create Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem
              id={task.id}
              taskName={task.name}
              taskDesc={task.description}
              taskDate={task.dueDate}
              taskStatus={task.status}
              taskAssig={task.assignedTo}
            />
          );
        })}
      </ul>
    </article>
  );
};
