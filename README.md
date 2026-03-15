# QA Automation – SauceDemo E2E Tests

[![Cypress E2E Tests](https://github.com/maikyyyyy/qa-automation-saucedemo/actions/workflows/cypress.yml/badge.svg)](https://github.com/maikyyyyy/qa-automation-saucedemo/actions/workflows/cypress.yml)

Suite de pruebas E2E automatizadas con Cypress sobre [SauceDemo](https://www.saucedemo.com), una aplicación de ecommerce diseñada para práctica de testing.

## 🧪 ¿Qué se testea?

- **Login:** acceso con usuario válido, usuario bloqueado, contraseña incorrecta y campos vacíos
- **Carrito:** añadir producto, eliminar producto e ir al checkout
- **Logout:** cierre de sesión y redirección correcta

## 🏗️ Estructura del proyecto
```
cypress/
├── e2e/              # Tests organizados por funcionalidad
│   ├── login.cy.js
│   ├── cart.cy.js
│   └── logout.cy.js
├── pages/            # Page Object Model
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CartPage.js
└── support/
cypress.config.js
```

## 🚀 Cómo ejecutar los tests

### Modo visual
```bash
npx cypress open
```

### Modo headless
```bash
npx cypress run
```

## 🛠️ Tecnologías

- [Cypress](https://www.cypress.io/)
- Page Object Model (POM)
- JavaScript

## 📋 Usuarios de prueba disponibles

| Usuario | Contraseña | Descripción |
|---|---|---|
| standard_user | secret_sauce | Usuario estándar |
| locked_out_user | secret_sauce | Usuario bloqueado |
| problem_user | secret_sauce | Usuario con problemas visuales |