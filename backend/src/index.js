const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const tasks = [
  {
    id: 1,
    title: 'Tarea N°1',
    date: '18/07/2025',
    description: 'GLOSARIO',
    type: 'pdf',
    file: 'pdfs/Tarea N°1.pdf',
    size: '40 KB'
  },
  {
    
  id: 4,
  title: "Tarea N°4",
  type: "link",
  description: "Formulario en React",
  repo: "https://github.com/usuario/tarea-formulario",
  site: "https://tarea-formulario.vercel.app/"
},
  
    {
    id: 3,
    title: 'Tarea N°3',
    date: '01/08/2025',
    description: 'Formulario e Investigación',
    type: 'pdf',
    file: '/pdfs/Tarea N°3.pdf',
    size: '185 KB'
  }, 
  
  {
    id: 3,
    title: 'Tarea N°3',
    date: '01/08/2025',
    description: 'Formulario e Investigación',
    type: 'pdf',
    file: '/pdfs/.pdf',
    size: '185 KB'
  }
];

app.get('/api/tasks', (_req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
