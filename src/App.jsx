import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
  const [task, setTask] = useState([]);
  const [status, setStatus] = useState("");

  const handleFilterChange = (status) => {
    setStatus(status);
  };

  return (
    <Layout>
      <AppBar handleFilterChange={handleFilterChange} />
      <TaskForm setTask={setTask} />
      <TaskList task={task} setTask={setTask} status={status} />
    </Layout>
  );
}

export default App;
