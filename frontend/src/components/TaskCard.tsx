import React from 'react';
import { Task } from '../types/task';
import reactLogo from '../assets/tech/react.svg';
import nodeLogo from '../assets/tech/nodedotjs.svg';
import jsLogo from '../assets/tech/javascript.svg';
import tsLogo from '../assets/tech/typescript.svg';
import cssLogo from '../assets/tech/css.svg';
import htmlLogo from '../assets/tech/html5.svg';

const techLogos: Record<string, string> = {
  react: reactLogo,
  nodedotjs: nodeLogo,
  javascript: jsLogo,
  typescript: tsLogo,
  css: cssLogo,
  html5: htmlLogo,
};

interface Props {
  task: Task;
  onClick: (task: Task) => void;
}

const TaskCard: React.FC<Props> = ({ task, onClick }) => (
  <div className="task-card" onClick={() => onClick(task)}>
    <h3>{task.title}</h3>
    <p>{task.date}</p>
    <p>{task.description}</p>
    <p><strong>{task.size}</strong></p>
    {/* Logos de tecnologías */}
    <div className="tech-logos">
      {task.tech?.map((tech) =>
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

export default TaskCard;