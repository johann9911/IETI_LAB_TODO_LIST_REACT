import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams();
  const task = data.tasks.find((task) => task.id === taskId);

  const [text, setText] = useState(task?.name ?? "");
  const [desc, setTextDescValue] = useState(task?.description ?? "");
  const [assig, setTextAssigValue] = useState(task?.assignedTo ?? "");
  const [date, setTextDateValue] = useState(task?.dueDate ?? "");
  console.log(data.tasks);
  if (!task) {
    return <div>Task not found</div>;
  }

  const handleChange = (e) => {
    const inputName = e.target.value;

    setText(inputName);
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

  const handleSave = (event) => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: text, description: desc, assignedTo: assig, dueDate: date };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));
    event.preventDefault();
    history.goBack();
  };

  return (

    <form className="form" >
      <input
        className="input"
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Task name"
      />
      <input
        className="input"
        value={desc}
        onChange={handleTextDescChange}
        type="text"
        placeholder="Task Description"
      />
      <input
        className="input"
        value={assig}
        onChange={handleTextAssigChange}
        type="text"
        placeholder="Task Assigned to"
      />
      <input
        className="input"
        value={date}
        onChange={handleTextDateChange}
        type="text"
        placeholder="Task Date"
      />
      <button className="button-17" onClick={handleSave}>Save</button>
    </form>
  );
};
