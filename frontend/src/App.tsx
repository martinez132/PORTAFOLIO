import React, { useEffect, useState } from 'react';
import './App.css';
import { Task } from './types/task';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import banner from './assets/Adrian.jpeg';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Portafolio de Tareas de Desarrollo Web</h1>
      <img src={banner} alt="Foto perfil" className="profile-img" />
      <SearchBar search={search} setSearch={setSearch} />

      <div className="task-list">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={setSelectedTask} />
        ))}
      </div>

      <Modal show={!!selectedTask} onClose={() => setSelectedTask(null)}>
        {selectedTask?.type === "pdf" ? (
          <iframe
            src={selectedTask.file}
            width="100%"
            height="500px"
            title={selectedTask.title}
          />
        ) : selectedTask?.type === "link" ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h3>{selectedTask.description}</h3>

            <p><strong>Link del repositorio:</strong></p>
            <a
              href={selectedTask.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "16px", color: "#007bff", display: "block", marginBottom: "20px" }}
            >
              {selectedTask.repo}
            </a>

            <p><strong>Link de donde se publicó:</strong></p>
            <a
              href={selectedTask.site}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "16px", color: "#28a745" }}
            >
              {selectedTask.site}
            </a>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

export default App;
