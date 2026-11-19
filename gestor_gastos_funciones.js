let balance = 200;
let gastos = 0;
let comprasaprobadas = 0;
let comprasrechazadas = 0;

console.log("Balance inicial: " + balance);

console.log();

const productos = [
    { producto: "Videojuego", precio: 60 },
    { producto: "Teclado", precio: 50 },
    { producto: "Monitor", precio: 120 },
    { producto: "Ratón", precio: 20 }
];

function haybalancesuficiente(balance, precio) {
    return balance >= precio;
}

for (const producto of productos) {
    if (haybalancesuficiente(balance, producto.precio)) {
        balance -= producto.precio;
        gastos += producto.precio;
        comprasaprobadas++;
        console.log("Compra aprobada: " + producto.producto + " - Precio: " + producto.precio);
    } else {
        comprasrechazadas++;
        console.log("Compra rechazada: " + producto.producto + " - Precio: " + producto.precio);
    }
}

console.log();

console.log("Gastos totales: " + gastos);
console.log("Balance final: " + balance);
console.log("Compras aprobadas: " + comprasaprobadas);
console.log("Compras rechazadas: " + comprasrechazadas);