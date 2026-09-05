"use client";

import { useState } from "react";

type Compatibilidad = "compatible" | "precaucion" | "no_directa" | "pendiente";

type Producto = {
  nombre: string;
  marca: string;
  activo: string;
  objetivo: string;
  notas: string;
  modos: {
    CLEAN: Compatibilidad;
    MOIST: Compatibilidad;
    "RF × EMS LIFT": Compatibilidad;
    "RF PUMP": Compatibilidad;
    "EYE CARE": Compatibilidad;
  };
};

const productos: Producto[] = [
  {
    nombre: "Retinal 2000",
    marca: "Gema Herrerías",
    activo: "Retinal",
    objetivo: "Antiedad / renovación / arrugas",
    notas:
      "Tratamiento con retinal. SkinOS debe separar la compatibilidad del activo de la compatibilidad específica con cada modo del dispositivo.",
    modos: {
      CLEAN: "no_directa",
      MOIST: "pendiente",
      "RF × EMS LIFT": "pendiente",
      "RF PUMP": "pendiente",
      "EYE CARE": "no_directa",
    },
  },
  {
    nombre: "Serum 12 Azelaic-N",
    marca: "Gema Herrerías",
    activo: "Ácido azelaico",
    objetivo: "Manchas / inflamación / textura",
    notas:
      "Tratamiento con ácido azelaico. La compatibilidad con el dispositivo no se asumirá automáticamente solo por tratarse de un sérum acuoso.",
    modos: {
      CLEAN: "no_directa",
      MOIST: "pendiente",
      "RF × EMS LIFT": "pendiente",
      "RF PUMP": "pendiente",
      "EYE CARE": "no_directa",
    },
  },
  {
    nombre: "COSRX The 6 Peptide Booster",
    marca: "COSRX",
    activo: "Péptidos",
    objetivo: "Reparación / hidratación / soporte de la barrera",
    notas:
      "Booster de péptidos utilizado actualmente por la noche. SkinOS debe comprobar primero la compatibilidad del producto con el modo del dispositivo antes de asignarlo.",
    modos: {
      CLEAN: "no_directa",
      MOIST: "pendiente",
      "RF × EMS LIFT": "pendiente",
      "RF PUMP": "pendiente",
      "EYE CARE": "no_directa",
    },
  },
];

const modos = [
  "CLEAN",
  "MOIST",
  "RF × EMS LIFT",
  "RF PUMP",
  "EYE CARE",
] as const;

const etiquetas: Record<Compatibilidad, string> = {
  compatible: "COMPATIBLE",
  precaucion: "PRECAUCIÓN",
  no_directa: "NO ES EL USO DIRECTO",
  pendiente: "PENDIENTE DE VERIFICAR",
};

const fondos: Record<Compatibilidad, string> = {
  compatible: "#e8f5e9",
  precaucion: "#fff3e0",
  no_directa: "#f3f3f3",
  pendiente: "#e3f2fd",
};

const texto: Record<Compatibilidad, string> = {
  compatible: "Compatible",
  precaucion: "Precaución",
  no_directa: "No directo",
  pendiente: "Pendiente",
};

export default function CompatibilidadPage() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(
    productos[0].nombre
  );

  const producto =
    productos.find((item) => item.nombre === productoSeleccionado) ??
    productos[0];

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 24px 60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "10px",
        }}
      >
        Compatibilidad SkinOS
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Matriz provisional para relacionar productos, activos y modos del
        Panasonic VITALIFT RF EX EH-SR86.
      </p>

      <section
        style={{
          background: "#f5f5f5",
          padding: "22px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: "20px",
          }}
        >
          🔬 Regla fundamental
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
            marginBottom: 0,
          }}
        >
          SkinOS no considerará que un cosmético es compatible con un
          dispositivo simplemente porque contenga un activo conocido.
          Primero deberá existir información suficiente sobre el producto,
          el modo del dispositivo y las instrucciones del fabricante.
        </p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "23px",
            marginBottom: "15px",
          }}
        >
          Selecciona un producto
        </h2>

        <div
          style={{
            display: "grid",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          {productos.map((item) => {
            const seleccionado = item.nombre === productoSeleccionado;

            return (
              <button
                key={item.nombre}
                onClick={() => setProductoSeleccionado(item.nombre)}
                style={{
                  textAlign: "left",
                  padding: "17px 18px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  background: seleccionado ? "#111" : "#fff",
                  color: seleccionado ? "#fff" : "#111",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                <strong>{item.nombre}</strong>

                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "14px",
                    opacity: seleccionado ? 0.8 : 0.65,
                  }}
                >
                  {item.marca} · {item.activo}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: "16px",
          padding: "22px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: "24px",
          }}
        >
          {producto.nombre}
        </h2>

        <p
          style={{
            color: "#555",
            marginBottom: "8px",
          }}
        >
          <strong>Marca:</strong> {producto.marca}
        </p>

        <p
          style={{
            color: "#555",
            marginBottom: "8px",
          }}
        >
          <strong>Activo:</strong> {producto.activo}
        </p>

        <p
          style={{
            color: "#555",
            marginBottom: "15px",
          }}
        >
          <strong>Objetivo:</strong> {producto.objetivo}
        </p>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            marginBottom: 0,
          }}
        >
          {producto.notas}
        </p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "23px",
            marginBottom: "15px",
          }}
        >
          Panasonic EH-SR86
        </h2>

        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {modos.map((modo) => {
            const estado = producto.modos[modo];

            return (
              <div
                key={modo}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                  padding: "18px",
                  border: "1px solid #e5e5e5",
                  borderRadius: "14px",
                }}
              >
                <div>
                  <strong
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    {modo}
                  </strong>

                  {modo === "CLEAN" && (
                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#666",
                        fontSize: "13px",
                      }}
                    >
                      Cuidado diario · aproximadamente 3 min
                    </p>
                  )}

                  {modo === "MOIST" && (
                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#666",
                        fontSize: "13px",
                      }}
                    >
                      Cuidado diario · aproximadamente 3 min
                    </p>
                  )}

                  {modo === "RF × EMS LIFT" && (
                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#666",
                        fontSize: "13px",
                      }}
                    >
                      Cuidado especial · aproximadamente 6 min
                    </p>
                  )}

                  {modo === "RF PUMP" && (
                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#666",
                        fontSize: "13px",
                      }}
                    >
                      Cuidado especial · aproximadamente 6 min
                    </p>
                  )}

                  {modo === "EYE CARE" && (
                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#666",
                        fontSize: "13px",
                      }}
                    >
                      Cuidado especial · aproximadamente 2 min
                    </p>
                  )}
                </div>

                <span
                  style={{
                    background: fondos[estado],
                    padding: "8px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  {texto[estado]}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section
        style={{
          marginTop: "30px",
          padding: "22px",
          borderRadius: "16px",
          background: "#fff8e8",
          border: "1px solid #f0dfb0",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: "20px",
          }}
        >
          ⚠️ Qué significa "pendiente de verificar"
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
            marginBottom: 0,
          }}
        >
          No significa que el producto sea incompatible. Significa que SkinOS
          todavía no dispone de suficiente información específica para
          recomendar esa combinación como regla automática.
        </p>
      </section>

      <p
        style={{
          marginTop: "30px",
          color: "#777",
          fontSize: "13px",
          lineHeight: "1.5",
        }}
      >
        La matriz se ampliará progresivamente con documentación oficial de
        fabricantes, composición de cada producto, evidencia científica,
        objetivos cosméticos y reglas de seguridad.
      </p>
    </main>
  );
}