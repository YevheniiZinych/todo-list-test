import PropTypes from "prop-types";
import { statusFilters } from "../../constants/constants";

export const StatusFilter = ({ handleFilterChange }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Complete
      </button>
    </div>
  );
};

StatusFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};
