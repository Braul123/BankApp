# BankApp

BankApp es una aplicación bancaria diseñada para facilitar la gestión de cuentas bancarias, transferencias y consultas de saldo.

## Características

- **Gestión de cuentas**: Crear, editar y eliminar cuentas bancarias.
- **Transferencias**: Realizar transferencias entre cuentas.
- **Consultas de saldo**: Ver el saldo actual de las cuentas.


## Configuración del proyecto

El proyecto está organizado siguiendo algunos principios de la arquitectura hexagonal, que promueve una separación clara entre la lógica de negocio y las implementaciones técnicas. Esto facilita el mantenimiento, escalabilidad y testeo de la aplicación.

### Carpetas principales

```plaintext
src/
  ├── assets/
  │   ├── icons/
  │   ├── images/
  ├── components/
  │   ├── atoms/
  │   ├── molecules/
  │   └── organism/
  ├── context/
  ├── hooks/
  ├── layouts/
  ├── pages/
  ├── routes/
  ├── services/
  ├── styles/
  ├── types/
  │   ├── interface/
  │   ├── types/
  ├── utils/
  ├── App.tsx
index.js
tsconfig.json
package.json
README.md
```

### Description

#### `assets/`

  - **icons/**: Contiene las definiciones de los iconos que son consumidos en toda la aplicacion.
  - **images/**: Contiene las imagenes de la aplicación.

#### `components/`

  - **atoms/**: Componentes básicos, reutilizables y sin dependencias externas, como botones o etiquetas..
  - **molecules/**: Componentes formados por una combinación de átomos, como formularios simples o grupos de etiquetas.
  - **organism/**: Componentes más complejos, compuestos por moléculas y átomos, como secciones completas de la interfaz.

#### `context/`

  - **context/**: Contiene las definiciones de los iconos que son consumidos en toda la aplicacion.

#### `hooks/`

  - **hooks/**: Incluye hooks personalizados para encapsular y reutilizar lógica, como manejo de formularios o peticiones API.

#### `layouts/`

  - **layouts/**: Componentes encargados de definir la estructura general de las páginas, como encabezados, barras laterales o pies de página.

#### `pages/`

  - **pages/**: Contiene los componentes que representan páginas completas y únicas de la aplicación, generalmente asociadas a una ruta específica.

#### `routes/`

  - **routes/**: Define las rutas principales de la aplicación, incluyendo la configuración de navegación y protección de rutas (guardias).

#### `services/`

  - **services/**: Contiene funciones o clases dedicadas a interactuar con APIs externas, manejar datos o realizar lógica de negocio.

#### `styles/`

  - **styles/**: Almacena los estilos globales o compartidos, como hojas de estilo CSS o temas para la aplicación.

#### `types/`

  - **types/**: Estructura los tipos e interfaces utilizados en la aplicación para aprovechar las capacidades de TypeScript.

#### `utils/`

  - **utils/**: Incluye funciones auxiliares y utilitarias, como manejo de fechas, validaciones o transformaciones de datos.


## Requisitos

- Node.js (>= 20.x)
- npm (>= 10.x) o yarn (>= 1.22.x)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Braul123/BankApp.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd bankapp
   ```
3. Instala las dependencias:
   ```bash
   yarn install
   ```

4. Intala cocoapods
   - Navega a la plataforma ios/
   ```bash
   pod install
   ```

## Uso

1. Inicia la aplicación:
   ```bash
   yarn start
   ```

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama nueva (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -m '[feat]: Agrega nueva característica'`).
4. Sube tus cambios a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Todos los derechos reservados

### &copy; 2024 TI