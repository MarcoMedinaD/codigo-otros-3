// Tenemos un li de productos

document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];

  const li = document.getElementById("lista-de-productos"); // Usamos id
  const $i = document.querySelector(".input");
  const botonDeFiltro = document.querySelector(".btn-filtrar"); // Usamos clase específica

 // Se da funcionalidad adecuada 
  const displayProductos = (productos) => {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
    for (let i = 0; i < productos.length; i++) {
      const d = document.createElement("div");
      d.classList.add("producto");

      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = productos[i].nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute("src", productos[i].img);

      d.appendChild(ti);
      d.appendChild(imagen);

      li.appendChild(d);
    }
  };

  displayProductos(productos);

  // Se crea filtro para productos
  const filtrado = (productos = [], texto) => {
    return productos.filter(
      (item) => item.tipo.includes(texto) || item.color.includes(texto)
    );
  };

  // Evento del botón
  botonDeFiltro.onclick = function () {
    const texto = $i.value.toLowerCase().trim();
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);
  };
});
