import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://team-task-manager-igd6.onrender.com/api/tasks",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <h1>Dashboard</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;