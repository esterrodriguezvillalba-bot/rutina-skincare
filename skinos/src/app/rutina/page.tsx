"use client";

import { useEffect, useState } from "react";

type Perfil = {
  edad: string;
  fototipo: string;
  sensibilidad: string;
  manchas: boolean;
  objetivos: string[];
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

export default function RutinaPage() {
  const [momento, setMomento] = useState<"mañana" | "noche">("mañana");
  const [completados, setCompletados] = useState<string[]>([]);
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
            {perfil.edad
              ? `Edad: ${perfil.edad} años. `
              : ""}
            {perfil.fototipo
              ? `Fototipo ${perfil.fototipo}. `
              : ""}
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
            background:
              momento === "mañana" ? "#111" : "#fff",
            color:
              momento === "mañana" ? "#fff" : "#111",
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
            background:
              momento === "noche" ? "#111" : "#fff",
            color:
              momento === "noche" ? "#fff" : "#111",
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
              SkinOS tendrá en cuenta la hiperpigmentación al
              adaptar tus tratamientos.
            </p>
          </div>
        )}

        {pasos.map((paso, index) => {
          const completado = completados.includes(paso);

          return (
            <div
              key={paso}
              onClick={() => marcarPaso(paso)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "18px",
                marginBottom: "10px",
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                cursor: "pointer",
                background:
                  completado ? "#f3f3f3" : "#fff",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background:
                    completado ? "#111" : "#eee",
                  color:
                    completado ? "#fff" : "#666",
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
                  textDecoration:
                    completado
                      ? "line-through"
                      : "none",
                }}
              >
                {paso}
              </span>
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
        SkinOS irá adaptando esta rutina según tu perfil,
        objetivos, productos y dispositivos.
      </p>
    </main>
  );
}