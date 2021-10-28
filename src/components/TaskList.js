import { useState } from "react";
import { useData } from "../providers/DataProvider";
import { TaskItem } from "./TaskItem";
import "./TaskList.css";

export const TaskList = () => {
  const { data, setData } = useData();
  const [textValue, setTextValue] = useState("");

  const tasks = data.tasks;

  const handleTaskChange = (index) => () => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));
  };

  const newTask = (name) => {
    const newTask = {
      id: `${tasks.length + 1}`,
      isCompleted: false,
      name: name,
    };

    setData((prev) => {
      console.log(prev)
      return ({ ...prev, tasks: [...tasks, newTask] })
    });
  };

  const handleSubmit = (event) => {
    setTextValue("");
    event.preventDefault();
    newTask(textValue);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
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
        <button className="button-17" >Create Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskItem
              id={task.id}
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
            />
          );
        })}
      </ul>
    </article>
  );
};
