import PropTypes from "prop-types";
import { TaskCounter } from "../CounterTask/CounterTask";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const AppBar = ({ handleFilterChange }) => {
  return (
    <header className="flex justify-between items-center mb-20">
      <section className=" flex flex-col ml-10  text-center">
        <h2 className="mr-8">Tusks</h2>
        <TaskCounter />
      </section>
      <section className="flex flex-col justify-center text-center">
        <h2 className="mb-3">Filter by status</h2>
        <StatusFilter handleFilterChange={handleFilterChange} />
      </section>
    </header>
  );
};

AppBar.propTypes = {
  handleFilterChange: PropTypes.func,
};
