import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
function App() {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <Layout>
      <AppBar />
      <TaskForm setTask={setTask} />
      <TaskList />
    </Layout>
  );
}

export default App;
