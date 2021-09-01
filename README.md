# Configuración base

Este repo contiene una plantilla base para un front-end basado en una arquitectura de microservicios.

## Uso

- Actualizar el nombre del micro front-end en el archivo webpack.config.js (línea 7), por ejemplo microfront >>> login
- Actualizar el nombre del micro front-end en el archivo tsconfig.json (línea 3), por ejemplo src/sfleet-test.tsx >>> "src/sfleet-login.tsx"
- Actualizar el nombre del archivo en src/sfleet-microfront.tsx para que refleje el nombre del micro front-end en cuestión, por ejemplo: sfleet-microfrontend.tsx >>> sfleet-login.tsx
- Cambiar el puerto en package.json (línea 4) para evitar conflictos con otros micro front-ends durante el desarrollo.

## Plantilla de configuración base para micro front-ends

[Repositorio](https://github.com/rmzNadir/microfrontend-root-config-boilerplate)
