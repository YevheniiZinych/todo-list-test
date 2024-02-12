import PropTypes from "prop-types";

export const TaskCounter = ({ task }) => {
  const count = [...task].reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div className="flex gap-10 ">
      <p className="border-2 border-violet rounded-xl p-1 font-bold">
        Active: {count.active}
      </p>
      <p className="border-2 border-violet rounded-xl p-1 font-bold">
        Completed: {count.completed}
      </p>
    </div>
  );
};

TaskCounter.propTypes = {
  task: PropTypes.object,
};
