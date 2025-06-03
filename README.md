# 🧩 Sistema de Gestión de Proyectos – Fase 1

Aplicación web full-stack diseñada para facilitar la organización de proyectos, tareas y usuarios dentro de un equipo de desarrollo ágil.

---

## 🎯 Objetivo

Desarrollar una plataforma colaborativa que permita a los usuarios:

- Crear y administrar proyectos.
- Asignar, visualizar y gestionar tareas por proyecto.
- Registrar e iniciar sesión mediante autenticación segura (JWT).
- Establecer comunicación efectiva entre frontend y backend.

---

## 🧰 Tecnologías Utilizadas

| Capa          | Tecnología             |
|---------------|------------------------|
| Frontend      | React + Vite           |
| Backend       | Node.js + Express      |
| Base de Datos | MongoDB                |
| Autenticación | JSON Web Tokens (JWT)  |
| Comunicación  | Axios                  |

---

## 📁 Estructura del Proyecto

proyecto-gestion/
├── backend/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── projectController.js
│ │ └── taskController.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Project.js
│ │ └── Task.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── projectRoutes.js
│ │ └── taskRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── AuthForm.jsx
│ │ │ ├── ProjectForm.jsx
│ │ │ ├── ProjectList.jsx
│ │ │ ├── TaskForm.jsx
│ │ │ └── TaskList.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.css
│ ├── vite.config.js
│ └── package.json
│
├── README.md
└── .gitignore

yaml
Copiar
Editar

---

## 🔧 Requisitos Previos

- Node.js (versión 18.x o superior)
- npm (incluido con Node.js) - volver a instalar nuevamente
- MongoDB Community Server o MongoDB Atlas
- Git (opcional, para control de versiones)

---

## ▶️ Instrucciones de Ejecución

### 1️⃣ Iniciar el Backend

```bash
cd backend
npm install
npm start
El servidor estará disponible en:
👉 http://localhost:3001

2️⃣ Iniciar el Frontend
bash
Copiar
Editar
cd ../frontend
npm install
npm run dev
La aplicación estará disponible en:
👉 http://localhost:5173

⚙️ Scripts Disponibles
Backend (backend/package.json):

json
Copiar
Editar
"scripts": {
  "start": "node server.js"
}
Frontend (frontend/package.json):

json
Copiar
Editar
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
📦 Conexión con MongoDB
En el archivo backend/server.js, asegúrate de establecer correctamente la conexión con tu base de datos local o en la nube:

js
Copiar
Editar
mongoose.connect('mongodb://localhost:27017/gestionProyectos')
💡 Puedes reemplazar la URI anterior por tu cadena de conexión de MongoDB Atlas si deseas desplegarlo en la nube.

✅ Funcionalidades Implementadas
Registro e inicio de sesión de usuarios con validación y encriptación ✅

CRUD completo de proyectos ✅

CRUD de tareas asociadas a proyectos ✅

CRUD básico de usuarios (opcional en versión extendida) ✅

Consumo de API REST desde el frontend con Axios ✅

Uso de JWT para protección de rutas y recursos del backend ✅

Configuración de proxy en Vite para desarrollo local fluido ✅

🧪 Pruebas Realizadas
Verificación del registro de usuario con validación de campos.

Inicio de sesión y almacenamiento de token JWT en localStorage.

Creación, edición y eliminación de proyectos.

Asociación de tareas a proyectos y visualización dinámica.

Validación en formularios frontend (campos vacíos, requeridos, etc.).

Pruebas de rutas protegidas en backend mediante JWT.

Comunicación exitosa entre frontend y backend con Axios.

Pruebas manuales realizadas en entorno de desarrollo.

📎 Espacios reservados para incluir capturas de pantalla de pruebas.

🧾 Documentación Técnica
Estructura modular por capas (modelo-controlador-ruta).

Autenticación protegida con middleware.

Componentes reutilizables en frontend con React.

Separación lógica de carpetas y archivos.

Variables sensibles no incluidas en el repositorio (.env).

🔗 Repositorio Público
Puedes acceder al código completo del proyecto desde el siguiente enlace:

🔗 Repositorio GitHub - Sistema de Gestión de Proyectos

🙌 Agradecimientos
Gracias por utilizar el Sistema de Gestión de Proyectos. Esperamos que esta herramienta contribuya a mejorar la eficiencia y organización de tu equipo de desarrollo.

Si tienes sugerencias, errores que reportar o deseas colaborar, no dudes en abrir un issue o contribuir al repositorio.

© 2025 – Desarrollado con 💻 y ❤️ por flinoz.
