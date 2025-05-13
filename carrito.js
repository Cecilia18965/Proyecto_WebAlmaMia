document.addEventListener("DOMContentLoaded", function () {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    const contador = document.querySelector(".contador-carrito");
    const listaCarrito = document.getElementById("lista-carrito");
    const carritoContenido = document.querySelector(".carrito-contenido");
    const carritoIcono = document.getElementById("carrito-icono");
  
    let cantidad = 0;
  
    botonesAgregar.forEach(boton => {
      boton.addEventListener("click", () => {
        const producto = boton.closest(".producto");
        const nombre = producto.querySelector("h3")?.textContent;
  
        if (!nombre) return;
  
        const li = document.createElement("li");
        li.textContent = nombre;
  
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", () => {
          li.remove();
          cantidad--;
          actualizarContador();
        });
  
        li.appendChild(eliminarBtn);
        listaCarrito.appendChild(li);
  
        cantidad++;
        actualizarContador();
      });
    });
  
    carritoIcono.addEventListener("click", function (e) {
      e.preventDefault();
      carritoContenido.style.display =
        carritoContenido.style.display === "none" ? "block" : "none";
    });
  
    function actualizarContador() {
      contador.textContent = cantidad;
    }
  });
  