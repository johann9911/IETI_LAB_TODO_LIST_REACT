import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams();
  const task = data.tasks.find((task) => task.id === taskId);

  const [text, setText] = useState(task?.name ?? "");
  const [isChecked, SetChecked] = useState(!task?.isCompleted ?? false)
  console.log(data.tasks);
  if (!task) {
    return <div>Task not found</div>;
  }

  const handleChange = (e) => {
    const inputName = e.target.value;

    setText(inputName);
  };

  const handleInputChange = (e) => {
    const isCompleted = e.target.checked

    SetChecked(isCompleted);
  }

  const handleSave = () => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: text, isCompleted: isChecked };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));

    history.goBack();
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Task Name"
        value={text}
        onChange={handleChange}
      />
      <input type="checkbox" className="check" checked={isChecked} onChange={handleInputChange} />

      <button type="button" className="button-17" onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
