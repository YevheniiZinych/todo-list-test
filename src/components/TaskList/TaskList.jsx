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
    <ul>
      {[...visibleTask].length > 0 &&
        [...visibleTask].map(({ id, text, completed }) => (
          <li key={id}>
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
