import React, { useState } from "react";

const Input = () => {
  const initialState = [];
  const [TaskList, setTaskList] = useState(initialState);
  const [task, setTask] = useState("");

  const handleOnClick = () => {
    if (task === "") return;
    setTaskList([...TaskList, task]);
    setTask("");
  };

  const onClickDelete = (index) => {
    const deletedTodoList = [...TaskList];
    deletedTodoList.splice(index, 1);
    setTaskList(deletedTodoList);
  };


  return (
    <>
      <form action="" className="Inputs">
        <input
          className="Input"
          type="text"
          value={task}
          placeholder="Enter TODO-LIst"
          autoComplete="off"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleOnClick()
            }
          }}
        />
      </form>
      {TaskList.map((task, index) => (
        <div className="Current">
          <table key={index} className="Task">
            <tbody>
              <tr className="Buttons">
                <td>{task}</td>
                <td><input type="checkbox" /></td>
                <td align="right">
                  <input type="button" value="Delete" className="Delete" onClick={() => onClickDelete(index)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default Input;
