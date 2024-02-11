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
    <div className="flex justify-center  w-full">
      <form onSubmit={handleSubmit} className="flex gap-10">
        <input
          type="text"
          name="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter task text"
          className="block w-96 outline-0 border-violet shadow-2xl rounded-xl flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex w-30 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  setTask: PropTypes.func,
};
