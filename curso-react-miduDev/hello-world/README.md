# 🐦 Hello World - Twitter Follow Card

<div align="center">

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-9.39.4-4B32C3?logo=eslint&style=for-the-badge)

**Un proyecto de aprendizaje de React que simula la funcionalidad de seguir usuarios de Twitter/X.**

</div>

---

## 📋 Descripcion

Esta aplicacion demuestra los fundamentos de **React** mediante la creacion de tarjetas de perfil de usuario con funcionalidad de seguimiento, similar a la interfaz de Twitter/X.

### ✨ Caracteristicas

| Caracteristica | Descripcion |
|----------------|-------------|
| 🔄 `TwFollowCard` | Componente reutilizable de tarjeta de usuario |
| 🎮 Estados interactivos | Boton dinamico Seguir/Siguiendo |
| 🏅 Sistema de ranking | Badges con colores distintivos por posicion |
| 📱 Responsive | Diseno adaptable a diferentes pantallas |
| 🖼️ Avatares dinamicos | Generacion de avatares via `unavatar.io` |



---

## 🚀 Inicio Rapido

```bash
# 1. Clonar el repositorio
git clone 

# 2. Entrar al directorio
cd hello-world

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en navegador
# http://localhost:5173
```

### 📦 Scripts Disponibles

| Script | Descripcion |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |

---

## 📁 Estructura del Proyecto

```
hello-world/
│
├── 📂 src/
│   │
│   ├── 📂 components/            # Componentes React
│   │   ├── TwFollowCard.tsx      # ⭐ Componente principal
│   │   └── TWFolloCard.css       # Estilos scoped
│   │
│   ├── 📂 utils/                 # Utilidades y constantes
│   │   └── topUsers.tsx          # Configuracion de colores ranking
│   │
│   ├── App.tsx                   # Componente raiz
│   ├── App.css                   # Estilos globales de App
│   ├── index.css                 # Estilos globales
│   └── main.tsx                 # Entry point
│
├── 📂 public/                    # Archivos estaticos
├── index.html                    # HTML principal
├── vite.config.ts               # Configuracion de Vite
├── tsconfig.json                # Configuracion de TypeScript
└── package.json                 # Dependencias y scripts
```

---

## 🎯 Componentes

### `TwFollowCard`

Componente principal que renderiza una tarjeta de usuario con avatar, nombre y boton de seguimiento.

```tsx
<TwFollowCard 
  name="Midudev" 
  userName="midudev" 
  rank={1} 
/>
```

#### 📥 Props

| Prop | Tipo | Requerido | Descripcion |
|------|------|-----------|-------------|
| `name` | `string` | ✅ | Nombre completo del usuario |
| `userName` | `string` | ✅ | Nombre de usuario de GitHub |
| `rank` | `number` | ✅ | Posicion en el ranking (1-5) |

---

### Sistema de Ranking

Colores asignados segun la posicion del usuario:

```
    🥇  1er Lugar  │  #FFD700  │  ██████████  │  Dorado
    🥈  2do Lugar  │  #C0C0C0  │  ██████████  │  Plata
    🥉  3er Lugar  │  #CD7F32  │  ██████████  │  Bronce
    🟢  4to Lugar  │  #66BB6A  │  ██████████  │  Verde
    🔵  5to Lugar  │  #42A5F5  │  ██████████  │  Azul
```