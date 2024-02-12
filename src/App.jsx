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
    <div className="bg-[url('./img/back.jpg')] bg-no-repeat bg-center bg-cover">
      <Layout>
        <h1 className="mx-auto mt-10 mb-20 font-bold text-l text-yellow tracking-s text-shadow-default ">
          ToDo List
        </h1>
        <AppBar task={task} handleFilterChange={handleFilterChange} />
        <TaskForm setTask={setTask} />
        <TaskList task={task} setTask={setTask} status={status} />
      </Layout>
    </div>
  );
}

export default App;
