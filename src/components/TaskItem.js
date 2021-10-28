import { useHistory } from "react-router";
import "./TaskItem.css"

export const TaskItem = ({ id, isChecked, taskName, onTaskChange }) => {
  const history = useHistory();

  const ColorComponent = {
    backgroundColor : isChecked ? "#b0f2c2": "",
    opacity : isChecked ? 1: "",
  };

  const styleOfTheComponent={
    textDecoration: isChecked ? "line-through" : "",
    color: isChecked ? "black" : ""
  }

  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  return (
    <li className="item" style={ColorComponent} htmlFor="cb1" onClick={onTaskChange}>
      <input className="check" name="cb1" id="cb1" onChange={onTaskChange} checked={isChecked} type="checkbox" />
      <span className="name" style={styleOfTheComponent}>{taskName}</span>
      <button className="button-17" id="btn" onClick={handleClick}>Edit</button>
    </li>
  );
};
