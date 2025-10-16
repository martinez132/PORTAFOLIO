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
    
  id: 2,
  title: "Tarea N°2",
  type: "link",
  date: '25/07/2025',
  description: " Página Web - Hoja de Vida",
  repo: "https://github.com/martinez132/WEB.git",
  site: "https://martinez132.github.io/WEB/",
  tech: ["react", "css","nodedotjs", "html5"]
},
  
    {
    id: 3,
    title: 'Tarea N°3',
    date: '01/08/2025',
    description: 'Investigación',
    type: 'pdf',
    file: '/pdfs/Tarea N°3.pdf',
    size: '185 KB'  
  }, 

  {
    id: 4,
    title: 'Tarea N°4',
    type: "link",
    date: '08/08/2025',
    description: 'Formulario',
  repo: "https://github.com/martinez132/Formulario.git",
  tech: ["react", "css","nodedotjs", "html5"]
},
  
  {
    id: 5,
    title: 'Tarea N°5',
    type: "link",
    date: '08/08/2025',
    description: 'Diseño Responsivo',
  repo: "https://github.com/martinez132/RESPONSIVO.git",
  site: "https://martinez132.github.io/RESPONSIVO/",
  tech: ["react", "css","nodedotjs","typescript", "html5"]
},
{
    id: 6,
    title: 'Tarea N°6',
    type: "link",
    date: '22/08/2025',
    description: 'API',
  repo: "https://github.com/martinez132/EXPEDIENTES.git",
  tech: ["react", "css","nodedotjs","typescript", "html5"]
},
{
    id: 7,
    title: 'Tarea N°7',
    type: "link",
    date: '29/08/2025',
    description: 'Frontend del API',
  repo: "https://github.com/martinez132/EXPEDIENTES.git",
  tech: ["react", "css","nodedotjs","typescript", "html5"]
},
{
    id: 8,
    title: 'Tarea N°8',
    type: "link",
    date: '10/10/2025',
    description: 'Certificado',
  repo: "https://www.freecodecamp.org/certification/fcc-191687f0-7aab-46e3-a53e-4915694b1275/front-end-development-libraries",
},
];

app.get('/api/tasks', (_req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
