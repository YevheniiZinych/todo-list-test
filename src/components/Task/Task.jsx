import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

export const Task = ({ id, text, completed, onDeleteTask, onChangeStatus }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChangeStatus(id)}
      />
      <p>{text}</p>
      <button type="button" onClick={() => onDeleteTask(id)}>
        <MdClose
          style={{
            color: "red",
          }}
        />
      </button>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  task: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onChangeStatus: PropTypes.func,
};
