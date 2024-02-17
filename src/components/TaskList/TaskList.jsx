import PropTypes from "prop-types";
import { Task } from "../Task/Task";

export const TaskList = ({ task, setTask, status }) => {
  const deleteTask = (id) => {
    setTask([...task].filter((task) => task.id !== id));
  };

  const onChangeStatus = (id) => {
    setTask(
      [...task].map((task) => {
        if (task.id !== id) {
          return task;
        }
        return { ...task, completed: !task.completed };
      })
    );
  };

  const getVisibleTasks = (task, status) => {
    switch (status) {
      case "active":
        return task.filter((task) => !task.completed);
      case "completed":
        return task.filter((task) => task.completed);
      default:
        return task;
    }
  };

  const visibleTask = getVisibleTasks(task, status);

  return (
    <ul className="flex flex-col items-center overflow-auto w-550 m-margin-auto ">
      {visibleTask?.length > 0 &&
        visibleTask.map(({ id, text, completed }) => (
          <li
            data-testid="task-item"
            key={id}
            className=" flex items-center justify-around [&:not(:last-child)]:mb-3 custom-background border-solid border-2 border-sky-500 w-500 min-h-20 rounded-lg "
          >
            <Task
              id={id}
              text={text}
              completed={completed}
              onDeleteTask={deleteTask}
              onChangeStatus={onChangeStatus}
            />
          </li>
        ))}
    </ul>
  );
};

TaskList.protoType = {
  task: PropTypes.object,
  setTask: PropTypes.func,
  status: PropTypes.string,
};
