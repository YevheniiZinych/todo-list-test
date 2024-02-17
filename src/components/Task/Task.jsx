import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

export const Task = ({ id, text, completed, onDeleteTask, onChangeStatus }) => {
  return (
    <>
      <input
        className=" h-5 w-5"
        type="checkbox"
        checked={completed}
        onChange={() => onChangeStatus(id)}
      />
      <div>
        <p className=" w-350 break-words text-wrap">{text}</p>
      </div>
      <button
        data-testid="delete-btn"
        type="button"
        onClick={() => onDeleteTask(id)}
      >
        <MdClose
          className=" w-6 h-6"
          style={{
            color: "red",
          }}
        />
      </button>
    </>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  task: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onChangeStatus: PropTypes.func,
  completed: PropTypes.bool,
};
