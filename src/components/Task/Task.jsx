import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

export const Task = ({ id, text, completed, onDeleteTask, onChangeStatus }) => {
  return (
    <div className="flex justify-around ">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChangeStatus(id)}
      />
      <div>
        <a href=""></a>
        <p className=" w-350 break-words text-wrap">{text}</p>
      </div>
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
  completed: PropTypes.bool,
};
