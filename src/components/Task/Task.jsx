import { MdClose } from "react-icons/md";

export const Task = () => {
  return (
    <div>
      <input type="checkbox" />
      <p>Text</p>
      <button>
        <MdClose
          style={{
            color: "red",
          }}
        />
      </button>
    </div>
  );
};
