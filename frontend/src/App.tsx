import React, { useEffect, useState } from 'react';
import './App.css';
import { Task } from './types/task';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import banner from './assets/Adrian.jpeg';
import logoUniversidad from './assets/UMG.png'; // <-- Importa el logo
import reactLogo from './assets/tech/react.svg';
import nodeLogo from './assets/tech/nodedotjs.svg';
import jsLogo from './assets/tech/javascript.svg';
import tsLogo from './assets/tech/typescript.svg';
import cssLogo from './assets/tech/css.svg';
import htmlLogo from './assets/tech/html5.svg';

const techLogos: Record<string, string> = {
  react: reactLogo,
  nodedotjs: nodeLogo,
  javascript: jsLogo,
  typescript: tsLogo,
  css: cssLogo,
  html5: htmlLogo,
};

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
      {/* Logo independiente en esquina superior izquierda */}
      <img src={logoUniversidad} alt="Logo Universidad" className="logo-independiente" />
      
      {/* Título centrado debajo del logo */}
      <h1 className="titulo-universidad">Portafolio de Tareas de Desarrollo Web</h1>
      
      <img src={banner} alt="Foto perfil" className="profile-img" />
<div className="profile-info">
  <h2>Milton Adrian Martínez Avila</h2>
  <p>
    Soy estudiante de Ingeniería en Sistemas, apasionado por la tecnología y el desarrollo de soluciones innovadoras. Me interesa el análisis, diseño y programación de sistemas, así como la gestión de proyectos tecnológicos. 
  </p>
</div>
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