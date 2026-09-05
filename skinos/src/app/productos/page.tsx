"use client";

import { useEffect, useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  activo: string;
};

const productosIniciales: Producto[] = [
  {
    id: 1,
    nombre: "Retinal 2000",
    marca: "Gema Herrerías",
    categoria: "Retinoide",
    activo: "Retinal",
  },
  {
    id: 2,
    nombre: "Serum 12 Azelaic-N",
    marca: "Gema Herrerías",
    categoria: "Tratamiento",
    activo: "Ácido azelaico",
  },
  {
    id: 3,
    nombre: "COSRX The 6 Peptide Booster",
    marca: "COSRX",
    categoria: "Péptidos",
    activo: "Péptidos",
  },
];

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [activo, setActivo] = useState("");

  useEffect(() => {
    const guardados = localStorage.getItem("skinos-productos");

    if (guardados) {
      try {
        setProductos(JSON.parse(guardados));
      } catch {
        setProductos(productosIniciales);
      }
    } else {
      setProductos(productosIniciales);
      localStorage.setItem(
        "skinos-productos",
        JSON.stringify(productosIniciales)
      );
    }
  }, []);

  function guardarProducto() {
    if (!nombre.trim()) {
      alert("Introduce el nombre del producto");
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: nombre.trim(),
      marca: marca.trim(),
      categoria,
      activo: activo.trim(),
    };

    const nuevosProductos = [...productos, nuevoProducto];

    setProductos(nuevosProductos);

    localStorage.setItem(
      "skinos-productos",
      JSON.stringify(nuevosProductos)
    );

    setNombre("");
    setMarca("");
    setCategoria("");
    setActivo("");
    setMostrarFormulario(false);
  }

  function eliminarProducto(id: number) {
    const nuevosProductos = productos.filter(
      (producto) => producto.id !== id
    );

    setProductos(nuevosProductos);

    localStorage.setItem(
      "skinos-productos",
      JSON.stringify(nuevosProductos)
    );
  }

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "8px",
        }}
      >
        Mis productos
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
          lineHeight: "1.5",
        }}
      >
        Aquí puedes guardar los productos que utilizas.
        SkinOS los utilizará posteriormente para construir tu
        rutina personalizada.
      </p>

      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "12px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: "17px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        {mostrarFormulario
          ? "Cerrar"
          : "+ Añadir producto"}
      </button>

      {mostrarFormulario && (
        <section
          style={{
            padding: "20px",
            marginBottom: "30px",
            border: "1px solid #ddd",
            borderRadius: "14px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Nuevo producto
          </h2>

          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Nombre del producto
          </label>

          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Retinal 2000"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Marca
          </label>

          <input
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Ej. Gema Herrerías"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Categoría
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          >
            <option value="">
              Selecciona una categoría
            </option>
            <option value="Limpieza">
              Limpieza
            </option>
            <option value="Antioxidante">
              Antioxidante
            </option>
            <option value="Retinoide">
              Retinoide
            </option>
            <option value="Tratamiento">
              Tratamiento
            </option>
            <option value="Péptidos">
              Péptidos
            </option>
            <option value="Hidratación">
              Hidratación
            </option>
            <option value="Protector solar">
              Protector solar
            </option>
            <option value="Exfoliante">
              Exfoliante
            </option>
            <option value="Dispositivo">
              Dispositivo
            </option>
            <option value="Otro">
              Otro
            </option>
          </select>

          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Activo principal
          </label>

          <input
            value={activo}
            onChange={(e) => setActivo(e.target.value)}
            placeholder="Ej. Retinal"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={guardarProducto}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              background: "#111",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Guardar producto
          </button>
        </section>
      )}

      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        Productos registrados
      </h2>

      {productos.length === 0 && (
        <p
          style={{
            color: "#666",
          }}
        >
          Todavía no tienes productos registrados.
        </p>
      )}

      {productos.map((producto) => (
        <article
          key={producto.id}
          style={{
            padding: "18px",
            marginBottom: "12px",
            border: "1px solid #e5e5e5",
            borderRadius: "12px",
            background: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "15px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "18px",
                }}
              >
                {producto.nombre}
              </h3>

              <p
                style={{
                  margin: "0 0 8px",
                  color: "#666",
                }}
              >
                {producto.marca}
              </p>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                {producto.categoria}
                {producto.activo
                  ? ` · ${producto.activo}`
                  : ""}
              </p>
            </div>

            <button
              onClick={() =>
                eliminarProducto(producto.id)
              }
              style={{
                border: "none",
                background: "transparent",
                color: "#999",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Eliminar
            </button>
          </div>
        </article>
      ))}

      <p
        style={{
          marginTop: "30px",
          color: "#666",
          fontSize: "13px",
          lineHeight: "1.5",
        }}
      >
        Esta es la primera versión de la biblioteca de
        productos. Posteriormente SkinOS podrá enriquecer
        automáticamente cada producto con sus activos,
        evidencia científica, objetivos y compatibilidades.
      </p>
    </main>
  );
}