import PropTypes from "prop-types";
import { statusFilters } from "../../constants/constants";

export const StatusFilter = ({ handleFilterChange }) => {
  return (
    <div className="flex gap-3 mr-3">
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
