import React from 'react';
import { Task } from '../types/task';

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
  </div>
);

export default TaskCard;
