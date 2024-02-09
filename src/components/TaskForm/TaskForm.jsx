import { useState } from "react";
import { nanoid } from "nanoid";

export const TaskForm = ({ setTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: nanoid(),
      text: value,
      status: "Active",
    };

    setTask(task);
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
