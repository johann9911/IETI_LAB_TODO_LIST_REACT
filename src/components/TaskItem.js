import { useHistory } from "react-router";
import { useData } from "../providers/DataProvider";
import "./TaskItem.css"

export const TaskItem = ({ id, taskName, taskDesc, taskAssig, taskDate, taskStatus }) => {
  const history = useHistory();
  const { data, setData } = useData();


  const ColorComponent = {
    backgroundColor: taskStatus === "DONE" ? "#b0f2c2" : taskStatus === "IN_PROGGRES" ? "#b0c2f2" : taskStatus === "REVIEW" ? "#fcb7af" : "",
    opacity: (taskStatus === "DONE" || taskStatus === "IN_PROGGRES" || taskStatus === "REVIEW") ? 1 : ""
  };

  const styleOfTheComponent = {
    textDecoration: taskStatus === "DONE" ? "line-through" : ""
  }

  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  const handleChancheSelect = (event) => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: event.target.value };
      }
      return task;
    });
    setData((prev) => ({ ...prev, tasks: newTasks }));
  }

  return (
    <li className="item" style={ColorComponent} >

      <select name="select" value={taskStatus} onChange={handleChancheSelect} >
        <option value="TODO">TODO</option>
        <option value="IN_PROGGRES">IN_PROGGRES</option>
        <option value="REVIEW">REVIEW</option>
        <option value="DONE">DONE</option>
      </select>

      <div className="item2" >
        <span className="name" style={styleOfTheComponent}>{taskName}</span>
        <span className="name" style={styleOfTheComponent}>{taskDesc}</span>
        <span className="name" style={styleOfTheComponent}>{taskDate}</span>
      </div>
      <span>{taskAssig}</span>
      <button className="button-17" id="btn" onClick={handleClick}>Edit</button>
    </li>
  );
};
