"use client";

import { useState } from "react";

type Regla = {
  titulo: string;
  descripcion: string;
  tipo: "diaria" | "especial" | "compatibilidad" | "seguridad";
};

const reglas: Regla[] = [
  {
    titulo: "CLEAN",
    descripcion:
      "Modo de cuidado diario. Panasonic indica una frecuencia de 1 vez al día. Se utiliza antes del cuidado de penetración y con algodón y loción/tónico según las instrucciones del fabricante.",
    tipo: "diaria",
  },
  {
    titulo: "MOIST",
    descripcion:
      "Modo de cuidado diario. Panasonic lo destina al cuidado de la penetración de los cosméticos en el estrato córneo. Frecuencia: 1 vez al día.",
    tipo: "diaria",
  },
  {
    titulo: "RF × EMS LIFT",
    descripcion:
      "Modo de cuidado especial. Panasonic recomienda utilizarlo 2-3 veces por semana y no combinarlo el mismo día con los demás modos de cuidado especial.",
    tipo: "especial",
  },
  {
    titulo: "RF PUMP",
    descripcion:
      "Modo de cuidado especial. Está destinado al tratamiento con RF y al cuidado de penetración de cosméticos. No debe utilizarse el mismo día que RF × EMS LIFT o EYE CARE.",
    tipo: "especial",
  },
  {
    titulo: "EYE CARE",
    descripcion:
      "Modo de cuidado especial para el contorno de ojos. No debe utilizarse sobre los párpados. No debe coincidir el mismo día con los otros modos de cuidado especial.",
    tipo: "especial",
  },
  {
    titulo: "Productos utilizados con RF / EMS",
    descripcion:
      "Panasonic permite utilizar cosméticos habituales además del gel específico. Para RF × EMS LIFT recomienda mantener la piel bien húmeda y señala que los productos con mucho aceite pueden dificultar la transmisión de RF o EMS.",
    tipo: "compatibilidad",
  },
  {
    titulo: "No asumir compatibilidades",
    descripcion:
      "SkinOS no considerará automáticamente compatible un activo con un dispositivo. La compatibilidad deberá estar respaldada por las instrucciones del fabricante, documentación técnica fiable o evidencia científica suficiente.",
    tipo: "compatibilidad",
  },
  {
    titulo: "Orden de los tratamientos",
    descripcion:
      "SkinOS tendrá en cuenta el orden de aplicación del cosmético, las instrucciones del fabricante del dispositivo y las características de cada producto antes de construir una rutina.",
    tipo: "compatibilidad",
  },
  {
    titulo: "Prioridad de seguridad",
    descripcion:
      "Si existe una incompatibilidad conocida, una contraindicación o información insuficiente para recomendar una combinación, SkinOS deberá priorizar la seguridad y evitar esa combinación.",
    tipo: "seguridad",
  },
];

const colores = {
  diaria: "#e8f5e9",
  especial: "#fff3e0",
  compatibilidad: "#e3f2fd",
  seguridad: "#ffebee",
};

const etiquetas = {
  diaria: "CUIDADO DIARIO",
  especial: "CUIDADO ESPECIAL",
  compatibilidad: "COMPATIBILIDAD",
  seguridad: "SEGURIDAD",
};

export default function ReglasPage() {
  const [abierta, setAbierta] = useState<string | null>(null);

  function alternar(titulo: string) {
    setAbierta((actual) => (actual === titulo ? null : titulo));
  }

  return (
    <main
      style={{
        maxWidth: "800px",
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
        Reglas de SkinOS
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Motor de decisión que relacionará perfil, productos, activos,
        dispositivos y rutina.
      </p>

      <section
        style={{
          padding: "22px",
          borderRadius: "16px",
          background: "#f5f5f5",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginTop: 0,
            marginBottom: "12px",
          }}
        >
          🧠 Cómo decidirá SkinOS
        </h2>

        <p
          style={{
            margin: 0,
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          Perfil → Objetivos → Productos → Activos → Dispositivo →
          Compatibilidades → Rutina
        </p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "18px",
          }}
        >
          Reglas actuales
        </h2>

        {reglas.map((regla) => {
          const estaAbierta = abierta === regla.titulo;

          return (
            <div
              key={regla.titulo}
              onClick={() => alternar(regla.titulo)}
              style={{
                border: "1px solid #e2e2e2",
                borderRadius: "14px",
                marginBottom: "12px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#fff",
              }}
            >
              <div
                style={{
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "bold",
                      letterSpacing: "0.5px",
                      marginBottom: "7px",
                      color: "#666",
                    }}
                  >
                    {etiquetas[regla.tipo]}
                  </div>

                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    {regla.titulo}
                  </div>
                </div>

                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: colores[regla.tipo],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {estaAbierta ? "−" : "+"}
                </div>
              </div>

              {estaAbierta && (
                <div
                  style={{
                    padding: "0 20px 20px",
                    color: "#555",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                >
                  {regla.descripcion}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section
        style={{
          marginTop: "35px",
          padding: "20px",
          border: "1px solid #e5e5e5",
          borderRadius: "14px",
        }}
      >
        <h2
          style={{
            fontSize: "19px",
            marginTop: 0,
          }}
        >
          🔬 Principio científico
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
            marginBottom: 0,
          }}
        >
          Una recomendación de SkinOS deberá poder explicar por qué se
          recomienda, qué información la respalda y qué condiciones podrían
          hacer que deje de ser adecuada.
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
        Esta capa es provisional. Se ampliará progresivamente con evidencia
        científica, documentación de fabricantes y reglas de compatibilidad
        entre activos, cosméticos y dispositivos.
      </p>
    </main>
  );
}