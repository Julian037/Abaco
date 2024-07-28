module.exports = {
  // Directorios donde Jest buscará archivos de prueba
  roots: ["<rootDir>/src"],
  // Extensiones de archivo que Jest reconocerá
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  // Configuración de transformaciones para archivos JavaScript y JSX
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\\/]+$",
    "/src/assets/images/Abaco - copia-fotor-bg-remover-2023072611547.png"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/assets/images/Abaco - copia-fotor-bg-remover-2023072611547.png",
  },
  testEnvironment: "jsdom",
};
