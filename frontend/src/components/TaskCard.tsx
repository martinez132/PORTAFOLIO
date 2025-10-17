import React from 'react';
import { Task } from '../types/task';
import reactLogo from '../assets/tech/react.svg';
import nodeLogo from '../assets/tech/nodedotjs.svg';
import jsLogo from '../assets/tech/javascript.svg';
import tsLogo from '../assets/tech/typescript.svg';
import cssLogo from '../assets/tech/css.svg';
import htmlLogo from '../assets/tech/html5.svg';
import pdfLogo from '../assets/tech/pdf.png';

const techLogos: Record<string, string> = {
  react: reactLogo,
  nodedotjs: nodeLogo,
  javascript: jsLogo,
  typescript: tsLogo,
  css: cssLogo,
  html5: htmlLogo,
  pdf: pdfLogo, // mapeo para pdf
};

interface Props {
  task: Task;
  onClick: (task: Task) => void;
}

const TaskCard: React.FC<Props> = ({ task, onClick }) => {
  // Aseguramos un array aunque task.tech no exista
  const techFromTask = task.tech ?? [];

  // Usamos un Set para evitar duplicados y forzamos mostrar 'pdf' si corresponde
  const logosSet = new Set<string>(techFromTask);
  if (task.type === 'pdf' || task.file) {
    logosSet.add('pdf');
  }
  const logosToShow = Array.from(logosSet);

  return (
    <div className="task-card" onClick={() => onClick(task)}>
      <h3>{task.title}</h3>
      {task.date && <p>{task.date}</p>}
      {task.description && <p>{task.description}</p>}
      {task.size && <p><strong>{task.size}</strong></p>}

      {/* Logos de tecnologías */}
      <div className="tech-logos">
        {logosToShow.map((tech) =>
          techLogos[tech] ? (
            <img
              key={tech}
              src={techLogos[tech]}
              alt={tech}
              title={tech.charAt(0).toUpperCase() + tech.slice(1)}
              className="tech-logo"
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default TaskCard;