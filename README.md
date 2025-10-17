# PORTAFOLIO

Tareas de Desarrollo Web

---

## Descripción

Este repositorio contiene un portafolio de tareas de desarrollo web. Incluye un frontend (interfaz web) y un backend con las tareas, archivos PDF y enlaces a repositorios y sitios.  
El frontend está desarrollado con TypeScript y React (HTML/CSS/JS) y el backend usa Node.js (según la estructura del proyecto).  
El proyecto permite visualizar tareas, abrir PDFs en un modal y mostrar logos/tecnologías asociadas a cada tarea.

---

## Estructura del proyecto (ejemplo)

- `backend/`    → Código y API del servidor (servir datos, PDFs, etc.)
- `interfaz/`   → Código del frontend (puede llamarse `frontend` si la renombraste)
- `node_modules/` → dependencias (NO subir al repo)
- `README.md`   → Este archivo

Ajusta las rutas de los comandos según el nombre real de la carpeta del frontend en tu repositorio (`interfaz` o `frontend`).

---

## Requisitos

- Node.js v14+ (recomendado LTS)
- npm (v6+) o yarn

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/martinez132/PORTAFOLIO.git
   cd PORTAFOLIO
   ```

2. Instala dependencias del backend (si existe):
   ```bash
   cd backend
   npm install
   # o
   # yarn
   ```

3. Instala dependencias del frontend (carpeta `interfaz` o `frontend`):
   ```bash
   cd ../interfaz   # o cd ../frontend
   npm install
   # o
   # yarn
   ```

---

## Ejecución en desarrollo

- Iniciar el backend (desde la carpeta `backend`):
  ```bash
  npm run dev
  # o
  # npm start  (revisa package.json para el script correcto)
  ```

- Iniciar el frontend (desde la carpeta `interfaz` / `frontend`):
  ```bash
  npm start
  # o
  # npm run dev  (si usas Vite u otro dev server)
  ```

Abre el navegador en `http://localhost:3000` (o el puerto que indique el frontend) y verifica que la app se conecta al backend.

---

## Construcción para producción

- Desde la carpeta del frontend:
  ```bash
  npm run build
  ```

- Sirve la carpeta `build` o `dist` con un servidor estático (o configura el backend para servir esos archivos).

---

## Logos y assets

- Guarda los logos en: `src/assets/tech/`  
  Ejemplos:
  ```
  src/assets/tech/react.svg
  src/assets/tech/javascript.svg
  src/assets/tech/html5.svg
  src/assets/tech/css.svg
  src/assets/tech/typescript.svg
  src/assets/tech/pdf.png
  ```

- En los componentes (por ejemplo `TaskCard.tsx`) importa los assets y mapea por nombre:
  ```ts
  import pdfLogo from '../assets/tech/pdf.png';
  const techLogos = { pdf: pdfLogo, react: reactLogo, ... };
  ```

---

## Manejo de PDFs en el modal

- Opciones:
  - Mostrar con `<iframe src="ruta.pdf#zoom=page-width" />` (rápido, depende del viewer del navegador).
  - Usar PDF.js para control total (render en canvas, control de zoom y sin barras/espacios del viewer).

- Si el nombre del archivo contiene espacios o caracteres especiales, usa `encodeURI()`:
  ```tsx
  <iframe src={encodeURI(task.file) + '#zoom=page-width'} />
  ```

---

## Buenas prácticas

- Añade `node_modules/` a `.gitignore` para no subir dependencias:
  ```
  node_modules/
  .env
  ```
- Evita subir archivos grandes no necesarios (uso de LFS si necesitas grandes binarios).
- Mantén consistencia en nombres (por ejemplo `interfaz` vs `frontend`) para evitar rutas rotas.

---

## Ejemplo de objeto tarea (backend)

```json
{
  "id": 1,
  "title": "Tarea N°1",
  "date": "18/07/2025",
  "description": "GLOSARIO",
  "type": "pdf",
  "file": "/pdfs/Tarea N°1.pdf",
  "size": "40 KB",
  "tech": ["pdf"]
}
```

---

## Contribuciones

Si quieres contribuir:

1. Haz fork del repositorio  
2. Crea una rama nueva:
   ```bash
   git checkout -b feature/nombre
   ```
3. Haz tus cambios y commitea:
   ```bash
   git commit -m "Descripción del cambio"
   ```
4. Haz push y abre un Pull Request a la rama `main` del repo original.

---
## Deploy en Vercel

### Requisitos previos
- Código del frontend en la carpeta `frontend` del repo.
- Script `build` en `frontend/package.json` (CRA ya lo trae: `npm run build`).
- Si el frontend consume una API, tener la URL del backend desplegada (o usar variables de entorno).

---

### Usar la interfaz web de Vercel.

1. Entra a https://vercel.com e inicia sesión con tu cuenta GitHub.
2. Haz clic en "New Project" → "Import Git Repository" → selecciona `martinez132/PORTAFOLIO`.
3. En "Root Directory" escribe `frontend` (para que Vercel construya la carpeta correcta).
4. Framework Preset: Vercel normalmente detecta "Create React App". Si no:
   - Build Command: `npm run build`
   - Output Directory: `build`
5. En "Environment Variables" añade (si aplican):
   - Key: `REACT_APP_API_URL`  Value: `https://tu-backend.com` (o URL de producción de tu API)
   - Añade variables para `production` y `preview` según necesites.
6. Deploy: haz clic en Deploy. Espera a que termine; la URL final aparecerá en el panel del proyecto.

## Licencia

Este proyecto puede licenciarse bajo MIT. Ajusta según prefieras.

---

## Contacto

Autor: martinez132  
Repositorio: https://github.com/martinez132/PORTAFOLIO
