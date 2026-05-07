import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/projects",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://team-task-manager-igd6.onrender.com/api/projects",
        {
          title,
          description,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      setTitle("");
      setDescription("");

      fetchProjects();
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
          <h1>Projects</h1>

          <form onSubmit={createProject}>
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Create Project</button>
          </form>

          <div style={{ marginTop: "20px" }}>
            {projects.map((project) => (
              <div key={project._id} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;