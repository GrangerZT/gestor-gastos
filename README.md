# Gestor de gastos — Simulador de compras en JavaScript

Mi primer proyecto de JavaScript, desarrollado como ejercicio final para poner en práctica los fundamentos del lenguaje.

El programa simula una serie de compras a partir de un **presupuesto inicial de 200**. Recorre una lista de productos, comprueba si queda dinero suficiente para cada uno y muestra en la consola cuáles se aprueban o rechazan, así como un resumen final.

## Funcionalidades

- Define un presupuesto inicial.
- Recorre una lista de productos con su nombre y precio.
- Comprueba si el saldo disponible alcanza para comprar cada producto.
- Descuenta únicamente el importe de las compras aprobadas.
- Cuenta las compras aprobadas y rechazadas.
- Calcula el gasto total y muestra el saldo restante.
- Muestra los resultados en la consola.

## Conceptos de JavaScript utilizados

- Variables con `let` y `const`.
- Arrays de objetos.
- Funciones con parámetros y valores de retorno.
- Bucle `for...of`.
- Condicionales `if` / `else`.
- Operadores de comparación y asignación.
- Salida por consola mediante `console.log()`.

## Ejemplo de funcionamiento

Los productos incluidos en el código son:

| Producto | Precio | Resultado |
| --- | ---: | --- |
| Videojuego | 60 | Compra aprobada |
| Teclado | 50 | Compra aprobada |
| Monitor | 120 | Compra rechazada |
| Ratón | 20 | Compra aprobada |

El programa los procesa **en ese orden**, actualizando el balance después de cada compra aprobada.

**Resumen esperado:**

```text
Balance inicial: 200

Compra aprobada: Videojuego - Precio: 60
Compra aprobada: Teclado - Precio: 50
Compra rechazada: Monitor - Precio: 120
Compra aprobada: Ratón - Precio: 20

Gastos totales: 130
Balance final: 70
Compras aprobadas: 3
Compras rechazadas: 1
```

## Cómo ejecutarlo

1. Descarga o clona este repositorio.
2. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
3. Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
node gestor_gastos_funciones.js
```

> Si tu archivo JavaScript tiene otro nombre, sustituye `gestor_gastos_funciones.js` por el nombre correspondiente.

No necesita instalar bibliotecas adicionales.

## Alcance actual

Este proyecto es un **simulador por consola**: el presupuesto y los productos están definidos directamente en el código. No tiene interfaz gráfica, entrada de datos del usuario ni almacenamiento persistente.

## Posibles mejoras

- Permitir introducir productos y precios.
- Validar los datos de entrada.
- Construir una interfaz con HTML y CSS.
- Guardar los datos en el navegador mediante `localStorage`.

## Objetivo del proyecto

Practicar cómo combinar datos, funciones, condiciones y bucles para resolver un problema sencillo, y aprender a explicar la lógica y los resultados de un programa propio.