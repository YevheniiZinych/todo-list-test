import PropTypes from "prop-types";
import { TaskCounter } from "../CounterTask/CounterTask";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const AppBar = ({ handleFilterChange, task }) => {
  return (
    <header className="flex justify-between items-center mb-20">
      <section className=" flex flex-col ml-3  text-center">
        <h2 className="mr-8 font-bold">Tusks</h2>
        <TaskCounter task={task} />
      </section>
      <section className="flex flex-col justify-center text-center">
        <h2 className="mb-3 font-bold">Filter by status</h2>
        <StatusFilter handleFilterChange={handleFilterChange} />
      </section>
    </header>
  );
};

AppBar.propTypes = {
  handleFilterChange: PropTypes.func,
  task: PropTypes.array,
};
