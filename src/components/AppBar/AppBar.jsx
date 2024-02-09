import { TaskCounter } from "../CounterTask/CounterTask";
import { StatusFilter } from "../StatusFilter/StatusFilter";
export const AppBar = () => {
  return (
    <header>
      <section>
        <h2>Tusks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
