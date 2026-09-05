"use client";

import { useState } from "react";

type Modo = {
  nombre: string;
  tipo: string;
  frecuencia: string;
  duracion: string;
  frecuenciaUso: string;
  cosméticos: string;
  objetivo: string;
  advertencias?: string;
};

const modos: Modo[] = [
  {
    nombre: "RF × EMS LIFT",
    tipo: "Cuidado especial",
    frecuencia: "RF 4 MHz + EMS + LED + iones",
    duracion: "Aproximadamente 6 minutos",
    frecuenciaUso:
      "Una vez al día como máximo y dejando al menos un día entre usos. Máximo 3 veces por semana contando RF × EMS LIFT y RF PUMP en conjunto.",
    cosméticos:
      "Gel específico Panasonic, sérum o loción/emulsión compatible. Se recomienda el gel específico para facilitar la transmisión del EMS.",
    objetivo:
      "Trabajo de la musculatura facial, firmeza y cuidado del contorno facial.",
    advertencias:
      "Mantener la piel suficientemente húmeda. Evitar productos con mucho aceite porque pueden dificultar la transmisión de RF/EMS.",
  },
  {
    nombre: "RF PUMP",
    tipo: "Cuidado especial",
    frecuencia: "RF 4 MHz + iones + LED",
    duracion: "Aproximadamente 6 minutos",
    frecuenciaUso:
      "Una vez al día como máximo y dejando al menos un día entre usos. Máximo 3 veces por semana contando RF × EMS LIFT y RF PUMP en conjunto.",
    cosméticos:
      "Sérum, loción/emulsión o cosmético compatible con el dispositivo.",
    objetivo:
      "Tratamiento de radiofrecuencia y cuidado de la hidratación, luminosidad y sensación de firmeza.",
    advertencias:
      "La piel debe mantenerse suficientemente húmeda durante el tratamiento. Evitar productos con mucho aceite.",
  },
  {
    nombre: "EYE CARE",
    tipo: "Cuidado especial",
    frecuencia: "RF 3 MHz + iones + LED",
    duracion: "Aproximadamente 2 minutos",
    frecuenciaUso:
      "Hasta 3 veces por semana, dejando al menos un día entre usos.",
    cosméticos:
      "Sérum, loción/emulsión o crema específica para el contorno de ojos.",
    objetivo:
      "Cuidado específico del contorno de ojos, hidratación y apariencia de pequeñas arrugas por sequedad.",
    advertencias:
      "No utilizar directamente sobre los párpados.",
  },
  {
    nombre: "CLEAN",
    tipo: "Cuidado diario",
    frecuencia: "RF 4 MHz + iones + LED",
    duracion: "Aproximadamente 3 minutos",
    frecuenciaUso: "Una vez al día. Puede utilizarse todos los días.",
    cosméticos:
      "Algodón colocado en el cabezal y loción/tónico adecuado para impregnar el algodón.",
    objetivo:
      "Ayudar a retirar restos de suciedad y células córneas que pueden permanecer después de la limpieza facial.",
    advertencias:
      "Utilizar después de desmaquillar y lavar el rostro.",
  },
  {
    nombre: "MOIST",
    tipo: "Cuidado diario",
    frecuencia: "RF 4 MHz + iones + LED",
    duracion: "Aproximadamente 3 minutos",
    frecuenciaUso: "Una vez al día. Puede utilizarse todos los días.",
    cosméticos:
      "Sérum, loción/emulsión o cosmético hidratante compatible.",
    objetivo:
      "Favorecer el cuidado de hidratación de la capa córnea y acompañar la aplicación de los cosméticos.",
    advertencias:
      "La piel debe estar suficientemente húmeda durante el uso.",
  },
];

export default function DispositivosPage() {
  const [modoSeleccionado, setModoSeleccionado] =
    useState<string>("MOIST");

  const modo = modos.find(
    (item) => item.nombre === modoSeleccionado
  );

  return (
    <main
      style={{
        maxWidth: "760px",
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
        Mis dispositivos
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "17px",
          lineHeight: "1.5",
          marginBottom: "30px",
        }}
      >
        SkinOS utiliza tus dispositivos para adaptar la rutina,
        seleccionando modos, frecuencia y cosméticos compatibles.
      </p>

      <section
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "8px",
          }}
        >
          Panasonic Vitalift RF EX
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          EH-SR86
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "10px",
          }}
        >
          <div
            style={{
              padding: "14px",
              background: "#f6f6f6",
              borderRadius: "10px",
            }}
          >
            <strong>RF</strong>
            <br />
            4 MHz
          </div>

          <div
            style={{
              padding: "14px",
              background: "#f6f6f6",
              borderRadius: "10px",
            }}
          >
            <strong>EMS</strong>
            <br />
            3 niveles
          </div>

          <div
            style={{
              padding: "14px",
              background: "#f6f6f6",
              borderRadius: "10px",
            }}
          >
            <strong>LED</strong>
            <br />
            Luz roja
          </div>

          <div
            style={{
              padding: "14px",
              background: "#f6f6f6",
              borderRadius: "10px",
            }}
          >
            <strong>Ion</strong>
            <br />
            Limpieza / penetración
          </div>
        </div>
      </section>

      <h2
        style={{
          fontSize: "22px",
          marginBottom: "15px",
        }}
      >
        Modos disponibles
      </h2>

      <div
        style={{
          display: "grid",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {modos.map((item) => {
          const seleccionado =
            item.nombre === modoSeleccionado;

          return (
            <button
              key={item.nombre}
              onClick={() =>
                setModoSeleccionado(item.nombre)
              }
              style={{
                textAlign: "left",
                padding: "17px",
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
              <strong>{item.nombre}</strong>

              <div
                style={{
                  fontSize: "13px",
                  marginTop: "5px",
                  opacity: seleccionado ? 0.8 : 0.6,
                }}
              >
                {item.tipo}
              </div>
            </button>
          );
        })}
      </div>

      {modo && (
        <section
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: "16px",
            padding: "24px",
            background: "#fafafa",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            {modo.nombre}
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div>
              <strong>Tipo de cuidado</strong>
              <p style={{ marginTop: "6px", color: "#555" }}>
                {modo.tipo}
              </p>
            </div>

            <div>
              <strong>Funciones</strong>
              <p style={{ marginTop: "6px", color: "#555" }}>
                {modo.frecuencia}
              </p>
            </div>

            <div>
              <strong>Duración</strong>
              <p style={{ marginTop: "6px", color: "#555" }}>
                {modo.duracion}
              </p>
            </div>

            <div>
              <strong>Frecuencia de uso</strong>
              <p
                style={{
                  marginTop: "6px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {modo.frecuenciaUso}
              </p>
            </div>

            <div>
              <strong>Cosméticos compatibles</strong>
              <p
                style={{
                  marginTop: "6px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {modo.cosméticos}
              </p>
            </div>

            <div>
              <strong>Objetivo</strong>
              <p
                style={{
                  marginTop: "6px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {modo.objetivo}
              </p>
            </div>

            {modo.advertencias && (
              <div
                style={{
                  padding: "15px",
                  borderRadius: "10px",
                  background: "#fff7e6",
                  border: "1px solid #f0dfb5",
                }}
              >
                <strong>⚠️ Importante</strong>

                <p
                  style={{
                    marginTop: "7px",
                    color: "#555",
                    lineHeight: "1.5",
                  }}
                >
                  {modo.advertencias}
                </p>
              </div>
            )}
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
        <strong>Cómo lo utilizará SkinOS</strong>

        <p
          style={{
            marginTop: "8px",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          SkinOS relacionará cada modo del dispositivo con tus
          productos, activos, objetivos y tratamientos para
          determinar cuándo utilizarlo y qué cosmético es más
          adecuado.
        </p>
      </section>
    </main>
  );
}