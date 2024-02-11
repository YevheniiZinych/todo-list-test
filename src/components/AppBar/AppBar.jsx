import PropTypes from "prop-types";
import { TaskCounter } from "../CounterTask/CounterTask";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const AppBar = ({ handleFilterChange }) => {
  return (
    <header>
      <section>
        <h2>Tusks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter handleFilterChange={handleFilterChange} />
      </section>
    </header>
  );
};

AppBar.propTypes = {
  handleFilterChange: PropTypes.func,
};
