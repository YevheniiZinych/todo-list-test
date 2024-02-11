import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export const TaskForm = ({ setTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: nanoid(),
      text: value,
      completed: false,
    };

    setTask((prevTask) => [...prevTask, newTask]);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter task text"
      />
      <button type="submit">Add task</button>
    </form>
  );
};

TaskForm.propTypes = {
  setTask: PropTypes.func,
};
