"use client";

import { useEffect, useState } from "react";
import { rutinaSemanal } from "../datos";
type Perfil = {
  edad: string;
  fototipo: string;
  sensibilidad: string;
  manchas: boolean;
  objetivos: string[];
};

type PasoDetalle = {
  nombre: string;
  producto?: string;
  activo?: string;
  funcion?: string;
  frecuencia?: string;
  dispositivo?: string;
  nota?: string;
};

const rutinaBase = {
  mañana: [
    "Limpieza",
    "Antioxidante / vitamina C",
    "Tratamiento específico",
    "Hidratación",
    "Protector solar SPF 50+",
  ],
  noche: [
    "Doble limpieza",
    "Tratamiento activo",
    "Péptidos / reparación",
    "Hidratación",
  ],
};

const detalles: Record<string, PasoDetalle> = {
  "Limpieza": {
    nombre: "Limpieza",
    funcion: "Eliminar suciedad, grasa, restos de productos y preparar la piel.",
    frecuencia: "Cada mañana",
    nota: "SkinOS prioriza una limpieza respetuosa con la barrera cutánea.",
  },

  "Antioxidante / vitamina C": {
    nombre: "Antioxidante / vitamina C",
    producto: "Vitamina C",
    activo: "Vitamina C",
    funcion: "Acción antioxidante y apoyo frente al daño oxidativo. También puede contribuir a mejorar el aspecto de la pigmentación.",
    frecuencia: "Cada mañana",
    nota: "El protector solar continúa siendo el paso esencial frente a la pigmentación.",
  },

  "Tratamiento específico": {
    nombre: "Tratamiento específico",
    producto: "GH Serum 12 Azelaic-N",
    activo: "Ácido azelaico",
    funcion: "Tratamiento dirigido a pigmentación e imperfecciones.",
    frecuencia: "Según la rotación de SkinOS",
    nota: "SkinOS ajustará este paso según objetivos, sensibilidad y tolerancia.",
  },

  "Hidratación": {
    nombre: "Hidratación",
    funcion: "Aportar hidratación y ayudar a mantener la función de barrera.",
    frecuencia: "Según necesidad de la piel",
    nota: "La cantidad se adapta a cómo se encuentre la piel ese día.",
  },

  "Protector solar SPF 50+": {
    nombre: "Protector solar SPF 50+",
    funcion: "Protección frente a la radiación UV y apoyo fundamental en la prevención y control de la pigmentación.",
    frecuencia: "Cada mañana",
    nota: "Paso imprescindible, especialmente cuando el objetivo prioritario son las manchas.",
  },

  "Doble limpieza": {
    nombre: "Doble limpieza",
    funcion: "Retirar primero productos resistentes y después limpiar la piel.",
    frecuencia: "Cada noche",
    nota: "SkinOS busca una limpieza eficaz sin convertirla en una fuente innecesaria de irritación.",
  },

  "Tratamiento activo": {
    nombre: "Tratamiento activo",
    producto: "GH Retinal 2000",
    activo: "Retinal",
    funcion: "Renovación cutánea y tratamiento antiedad.",
    frecuencia: "Según la rotación de SkinOS",
    nota: "No todas las noches serán de retinal. SkinOS alternará los activos para controlar la carga de tratamiento.",
  },

  "Péptidos / reparación": {
    nombre: "Péptidos / reparación",
    producto: "COSRX The 6 Peptide Booster",
    activo: "Péptidos",
    funcion: "Apoyo a la reparación y al mantenimiento de la piel.",
    frecuencia: "Rutina nocturna",
    nota: "Se integra en la rutina nocturna como paso de soporte.",
  },
};

export default function RutinaPage() {
  const [momento, setMomento] = useState<"mañana" | "noche">("mañana");
  const [completados, setCompletados] = useState<string[]>([]);
  const [abiertos, setAbiertos] = useState<string[]>([]);
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("skinos-perfil");

    if (datosGuardados) {
      try {
        const datos = JSON.parse(datosGuardados);
        setPerfil(datos);
      } catch {
        console.log("No se pudo leer el perfil");
      }
    }
  }, []);

  function marcarPaso(paso: string) {
    setCompletados((actuales) =>
      actuales.includes(paso)
        ? actuales.filter((item) => item !== paso)
        : [...actuales, paso]
    );
  }

  function abrirDetalle(paso: string) {
    setAbiertos((actuales) =>
      actuales.includes(paso)
        ? actuales.filter((item) => item !== paso)
        : [...actuales, paso]
    );
  }

  const pasos = rutinaBase[momento];

  const tieneManchas =
    perfil?.manchas || perfil?.objetivos?.includes("Manchas");

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
        Mi rutina
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Tu rutina personalizada en SkinOS.
      </p>

      {perfil && (
        <section
          style={{
            padding: "18px",
            marginBottom: "25px",
            borderRadius: "14px",
            background: "#f5f5f5",
          }}
        >
          <strong>Rutina adaptada a tu perfil</strong>

          <p
            style={{
              margin: "8px 0 0",
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {perfil.edad ? `Edad: ${perfil.edad} años. ` : ""}
            {perfil.fototipo ? `Fototipo ${perfil.fototipo}. ` : ""}
            {perfil.sensibilidad
              ? `Sensibilidad: ${perfil.sensibilidad}.`
              : ""}
          </p>
        </section>
      )}

      {!perfil && (
        <section
          style={{
            padding: "18px",
            marginBottom: "25px",
            borderRadius: "14px",
            border: "1px solid #ddd",
          }}
        >
          <strong>Aún no hemos encontrado tu perfil.</strong>

          <p
            style={{
              margin: "8px 0 0",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Ve a «Mi perfil», completa tus datos y vuelve aquí para
            personalizar la rutina.
          </p>
        </section>
      )}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={() => setMomento("mañana")}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: momento === "mañana" ? "#111" : "#fff",
            color: momento === "mañana" ? "#fff" : "#111",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ☀️ Mañana
        </button>

        <button
          onClick={() => setMomento("noche")}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: momento === "noche" ? "#111" : "#fff",
            color: momento === "noche" ? "#fff" : "#111",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          🌙 Noche
        </button>
      </div>

      <section>
        <h2
          style={{
            marginBottom: "18px",
          }}
        >
          {momento === "mañana"
            ? "Rutina de mañana"
            : "Rutina de noche"}
        </h2>

        {tieneManchas && (
          <div
            style={{
              padding: "16px",
              marginBottom: "15px",
              borderRadius: "12px",
              background: "#fff8e8",
              border: "1px solid #f0dfb0",
            }}
          >
            <strong>Objetivo prioritario: manchas</strong>

            <p
              style={{
                margin: "6px 0 0",
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.5",
              }}
            >
              SkinOS tendrá en cuenta la hiperpigmentación al adaptar tus
              tratamientos.
            </p>
          </div>
        )}

        {pasos.map((paso, index) => {
          const completado = completados.includes(paso);
          const abierto = abiertos.includes(paso);
          const detalle = detalles[paso];

          return (
            <div
              key={paso}
              style={{
                marginBottom: "10px",
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                overflow: "hidden",
                background: completado ? "#f3f3f3" : "#fff",
              }}
            >
              <div
                onClick={() => marcarPaso(paso)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "18px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: completado ? "#111" : "#eee",
                    color: completado ? "#fff" : "#666",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {completado ? "✓" : index + 1}
                </div>

                <span
                  style={{
                    fontSize: "17px",
                    textDecoration: completado
                      ? "line-through"
                      : "none",
                    flex: 1,
                  }}
                >
                  {paso}
                </span>

                <button
                  type="button"
                  onClick={(evento) => {
                    evento.stopPropagation();
                    abrirDetalle(paso);
                  }}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "4px 8px",
                  }}
                  aria-label={`Ver detalle de ${paso}`}
                >
                  {abierto ? "⌃" : "⌄"}
                </button>
              </div>

              {abierto && detalle && (
                <div
                  style={{
                    padding: "0 18px 18px 63px",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "16px",
                      fontSize: "14px",
                      lineHeight: "1.55",
                    }}
                  >
                    {detalle.producto && (
                      <p style={{ margin: "0 0 8px" }}>
                        <strong>🧴 Producto:</strong>{" "}
                        {detalle.producto}
                      </p>
                    )}

                    {detalle.activo && (
                      <p style={{ margin: "0 0 8px" }}>
                        <strong>🧪 Activo:</strong>{" "}
                        {detalle.activo}
                      </p>
                    )}

                    {detalle.funcion && (
                      <p style={{ margin: "0 0 8px" }}>
                        <strong>🎯 Función:</strong>{" "}
                        {detalle.funcion}
                      </p>
                    )}

                    {detalle.frecuencia && (
                      <p style={{ margin: "0 0 8px" }}>
                        <strong>📅 Frecuencia:</strong>{" "}
                        {detalle.frecuencia}
                      </p>
                    )}

                    {detalle.dispositivo && (
                      <p style={{ margin: "0 0 8px" }}>
                        <strong>⚡ Dispositivo:</strong>{" "}
                        {detalle.dispositivo}
                      </p>
                    )}

                    {detalle.nota && (
                      <p
                        style={{
                          margin: "12px 0 0",
                          color: "#666",
                        }}
                      >
                        <strong>ℹ️ SkinOS:</strong>{" "}
                        {detalle.nota}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <p
        style={{
          marginTop: "30px",
          color: "#666",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        SkinOS irá adaptando esta rutina según tu perfil, objetivos,
        productos y dispositivos.
      </p>
    </main>
  );
}