"use client";

import { useState } from "react";

type Activo = {
  nombre: string;
  categoria: string;
  evidencia: "A" | "B" | "C" | "D";
  objetivos: string[];
  uso: string;
  precauciones: string;
  compatibilidades: string[];
};

const activos: Activo[] = [
  {
    nombre: "Retinal",
    categoria: "Retinoide",
    evidencia: "A",
    objetivos: [
      "Fotoenvejecimiento",
      "Arrugas",
      "Textura",
      "Pigmentación",
    ],
    uso: "Principalmente por la noche.",
    precauciones:
      "Introducción progresiva. Puede producir irritación, sequedad o descamación.",
    compatibilidades: [
      "Hidratantes",
      "Péptidos",
      "Ácido azelaico según tolerancia",
    ],
  },
  {
    nombre: "Ácido azelaico",
    categoria: "Tratamiento despigmentante / antiinflamatorio",
    evidencia: "A",
    objetivos: [
      "Hiperpigmentación",
      "Manchas",
      "Inflamación",
      "Textura",
    ],
    uso: "Mañana o noche según formulación y tolerancia.",
    precauciones:
      "Puede producir escozor o irritación al comenzar.",
    compatibilidades: [
      "Retinoides según tolerancia",
      "Vitamina C",
      "Hidratantes",
      "Protector solar",
    ],
  },
  {
    nombre: "Ácido glicólico",
    categoria: "AHA",
    evidencia: "A",
    objetivos: [
      "Textura",
      "Pigmentación",
      "Luminosidad",
      "Fotoenvejecimiento",
    ],
    uso: "Preferentemente por la noche y con frecuencia controlada.",
    precauciones:
      "Puede aumentar la irritación si se combina con demasiados activos exfoliantes o irritantes.",
    compatibilidades: [
      "Hidratantes",
      "Ingredientes reparadores",
    ],
  },
  {
    nombre: "Vitamina C",
    categoria: "Antioxidante",
    evidencia: "A",
    objetivos: [
      "Fotoenvejecimiento",
      "Pigmentación",
      "Luminosidad",
      "Protección antioxidante",
    ],
    uso: "Habitualmente por la mañana.",
    precauciones:
      "La tolerancia depende de la molécula, concentración, pH y formulación.",
    compatibilidades: [
      "Protector solar",
      "Ácido azelaico",
      "Hidratantes",
    ],
  },
  {
    nombre: "Péptidos",
    categoria: "Péptidos cosméticos",
    evidencia: "B",
    objetivos: [
      "Soporte de la función barrera",
      "Acondicionamiento de la piel",
      "Signos de envejecimiento",
    ],
    uso: "Mañana o noche según formulación.",
    precauciones:
      "La evidencia depende mucho del péptido concreto y de su formulación.",
    compatibilidades: [
      "Retinoides",
      "Ácido azelaico",
      "Vitamina C",
      "Hidratantes",
    ],
  },
  {
    nombre: "Protector solar",
    categoria: "Fotoprotección",
    evidencia: "A",
    objetivos: [
      "Prevención del fotoenvejecimiento",
      "Prevención de hiperpigmentación",
      "Protección frente a radiación UV",
    ],
    uso: "Cada mañana como último paso de la rutina.",
    precauciones:
      "La protección real depende de cantidad aplicada, cobertura y reaplicación cuando sea necesaria.",
    compatibilidades: [
      "Todos los tratamientos cosméticos habituales",
    ],
  },
];

const colores: Record<string, string> = {
  A: "#e8f5e9",
  B: "#eef4ff",
  C: "#fff8e1",
  D: "#ffebee",
};

export default function BibliotecaPage() {
  const [activoSeleccionado, setActivoSeleccionado] =
    useState<string>("Retinal");

  const activo = activos.find(
    (item) => item.nombre === activoSeleccionado
  );

  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "8px",
        }}
      >
        Biblioteca científica
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "17px",
          lineHeight: "1.5",
          marginBottom: "30px",
        }}
      >
        Base de conocimiento que SkinOS utilizará para
        relacionar activos, objetivos, evidencia científica,
        compatibilidades y rutina.
      </p>

      <section
        style={{
          padding: "20px",
          borderRadius: "14px",
          background: "#f5f5f5",
          marginBottom: "30px",
        }}
      >
        <strong>Escala de evidencia SkinOS</strong>

        <p
          style={{
            color: "#555",
            lineHeight: "1.5",
            marginBottom: "15px",
          }}
        >
          Clasificación interna provisional para ordenar la
          solidez de la evidencia disponible. No sustituye la
          evaluación individual de los estudios científicos.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            ["A", "Evidencia sólida"],
            ["B", "Evidencia moderada"],
            ["C", "Evidencia limitada"],
            ["D", "Insuficiente"],
          ].map(([letra, texto]) => (
            <div
              key={letra}
              style={{
                padding: "12px",
                borderRadius: "10px",
                background: colores[letra],
              }}
            >
              <strong>{letra}</strong>
              <br />
              <span
                style={{
                  fontSize: "13px",
                  color: "#555",
                }}
              >
                {texto}
              </span>
            </div>
          ))}
        </div>
      </section>

      <h2
        style={{
          fontSize: "23px",
          marginBottom: "15px",
        }}
      >
        Activos principales
      </h2>

      <div
        style={{
          display: "grid",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {activos.map((item) => {
          const seleccionado =
            item.nombre === activoSeleccionado;

          return (
            <button
              key={item.nombre}
              onClick={() =>
                setActivoSeleccionado(item.nombre)
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                background: seleccionado
                  ? "#111"
                  : "#fff",
                color: seleccionado
                  ? "#fff"
                  : "#111",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              <div>
                <strong>{item.nombre}</strong>

                <div
                  style={{
                    fontSize: "13px",
                    marginTop: "5px",
                    opacity: 0.7,
                  }}
                >
                  {item.categoria}
                </div>
              </div>

              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: seleccionado
                    ? "#fff"
                    : colores[item.evidencia],
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {item.evidencia}
              </div>
            </button>
          );
        })}
      </div>

      {activo && (
        <section
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: "16px",
            padding: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "26px",
                  marginBottom: "5px",
                }}
              >
                {activo.nombre}
              </h2>

              <span style={{ color: "#666" }}>
                {activo.categoria}
              </span>
            </div>

            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: colores[activo.evidencia],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {activo.evidencia}
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong>Objetivos</strong>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              {activo.objetivos.map((objetivo) => (
                <span
                  key={objetivo}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "20px",
                    background: "#f3f3f3",
                    fontSize: "14px",
                  }}
                >
                  {objetivo}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong>Momento de uso</strong>

            <p
              style={{
                color: "#555",
                lineHeight: "1.5",
              }}
            >
              {activo.uso}
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong>Compatibilidades iniciales</strong>

            <ul
              style={{
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              {activo.compatibilidades.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              padding: "16px",
              borderRadius: "10px",
              background: "#fff8e6",
              border: "1px solid #f0dfb5",
            }}
          >
            <strong>Precauciones</strong>

            <p
              style={{
                color: "#555",
                lineHeight: "1.5",
                marginBottom: 0,
              }}
            >
              {activo.precauciones}
            </p>
          </div>
        </section>
      )}

      <section
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "14px",
          background: "#f3f3f3",
        }}
      >
        <strong>Próximo nivel de SkinOS</strong>

        <p
          style={{
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          Esta biblioteca evolucionará para incluir concentración,
          formulación, estudios científicos, interacciones entre
          activos, compatibilidad con dispositivos, frecuencia
          recomendada y reglas personalizadas según el perfil.
        </p>
      </section>
    </main>
  );
}