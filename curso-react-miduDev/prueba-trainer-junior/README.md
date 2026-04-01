# Prueba Técnica React - curso-react-miduDev

## Descripción del proyecto

Aplicación de gatos que obtiene un hecho aleatorio de [Cat Facts](https://catfact.ninja/fact), extrae la primera palabra del hecho y muestra una imagen de gato generada por [CATAAS](https://cataas.com/) con esa palabra como texto.

## Funcionamiento actual

- Al iniciar, se solicita un `fact` desde `https://catfact.ninja/fact`.
- Se guarda el texto completo en estado (`fact`).
- Se extrae la primera palabra del `fact` y se guarda en estado (`word`).
- Se solicita la imagen en `https://cataas.com/cat/says/${word}?json=true`.
- Se muestra el hecho y la imagen resultante.

## API usadas

- <https://catfact.ninja/fact>
- <https://cataas.com/cat/says/:text?json=true>

## Cómo ejecutar

1. `cd curso-react-miduDev/hello-world`
2. `npm install` (o `yarn`)
3. `npm run dev` (o `yarn dev`)

> El proyecto usa Vite + React + TypeScript.

## Estructura del repo

- `hello-world/` : ejercicio inicial de la prueba técnica.
- `prueba-trainer-junior/` : versión actual de la prueba con el mismo comportamiento.

## Objetivos

- Aprender uso de hooks (`useEffect`, `useState`) para llamadas API y efectos.
- Manipular cadenas (extraer la primera palabra).
- Mostrar imagen dinámicamente basada en el contenido de la API.
