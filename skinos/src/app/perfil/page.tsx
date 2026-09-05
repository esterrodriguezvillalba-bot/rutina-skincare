"use client";

import { useState } from "react";

export default function PerfilPage() {
  const [edad, setEdad] = useState("");
  const [fototipo, setFototipo] = useState("");
  const [sensibilidad, setSensibilidad] = useState("");
  const [manchas, setManchas] = useState(false);
  const [objetivos, setObjetivos] = useState<string[]>([]);

  const opcionesFototipo = [
    {
      tipo: "I",
      descripcion:
        "Piel muy clara. Se quema siempre y prácticamente nunca se broncea.",
    },
    {
      tipo: "II",
      descripcion:
        "Piel clara. Se quema fácilmente y se broncea poco.",
    },
    {
      tipo: "III",
      descripcion:
        "Piel clara u oliva. Puede quemarse al principio y después se broncea.",
    },
    {
      tipo: "IV",
      descripcion:
        "Piel morena clara. Se quema poco y se broncea fácilmente.",
    },
    {
      tipo: "V",
      descripcion:
        "Piel morena. Se quema raramente y se broncea intensamente.",
    },
    {
      tipo: "VI",
      descripcion:
        "Piel marrón muy oscura o negra. Se quema muy raramente y se broncea intensamente.",
    },
  ];

  const opcionesObjetivos = [
    "Manchas",
    "Arrugas",
    "Firmeza",
    "Hidratación",
    "Luminosidad",
  ];

  function cambiarObjetivo(objetivo: string) {
    setObjetivos((actuales) =>
      actuales.includes(objetivo)
        ? actuales.filter((item) => item !== objetivo)
        : [...actuales, objetivo]
    );
  }

  function guardarPerfil() {
    const perfil = {
      edad,
      fototipo,
      sensibilidad,
      manchas,
      objetivos,
    };

    localStorage.setItem("skinos-perfil", JSON.stringify(perfil));

    alert("Perfil guardado correctamente");
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
        Mi perfil
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Cuéntanos sobre tu piel para que SkinOS pueda personalizar tu rutina.
      </p>

      <label
        style={{
          display: "block",
          marginBottom: "8px",
        }}
      >
        Edad
      </label>

      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder="Ej. 47"
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "24px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "12px",
          }}
        >
          Fototipo
        </label>

        <p
          style={{
            color: "#666",
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "15px",
          }}
        >
          Elige el que mejor describe cómo reacciona tu piel al sol.
          Si tienes dudas, utiliza estas descripciones como orientación.
        </p>

        {opcionesFototipo.map((opcion) => {
          const seleccionado = fototipo === opcion.tipo;

          return (
            <div
              key={opcion.tipo}
              onClick={() => setFototipo(opcion.tipo)}
              style={{
                padding: "16px",
                marginBottom: "10px",
                border: seleccionado
                  ? "2px solid #111"
                  : "1px solid #ddd",
                borderRadius: "12px",
                cursor: "pointer",
                background: seleccionado ? "#111" : "#fff",
                color: seleccionado ? "#fff" : "#111",
              }}
            >
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}
              >
                {seleccionado ? "✓ " : ""}
                Fototipo {opcion.tipo}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: seleccionado ? "#ddd" : "#666",
                  lineHeight: "1.5",
                }}
              >
                {opcion.descripcion}
              </div>
            </div>
          );
        })}
      </div>

      <label
        style={{
          display: "block",
          marginBottom: "8px",
        }}
      >
        Sensibilidad de la piel
      </label>

      <select
        value={sensibilidad}
        onChange={(e) => setSensibilidad(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "24px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
        }}
      >
        <option value="">
          Selecciona una opción
        </option>

        <option value="baja">
          Baja
        </option>

        <option value="media">
          Media
        </option>

        <option value="alta">
          Alta
        </option>
      </select>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
          fontSize: "16px",
        }}
      >
        <input
          type="checkbox"
          checked={manchas}
          onChange={(e) => setManchas(e.target.checked)}
        />

        Tengo manchas / hiperpigmentación
      </label>

      <h2
        style={{
          marginBottom: "15px",
        }}
      >
        Mis objetivos
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: "14px",
          marginBottom: "15px",
        }}
      >
        Puedes seleccionar varios.
      </p>

      {opcionesObjetivos.map((objetivo) => {
        const seleccionado = objetivos.includes(objetivo);

        return (
          <div
            key={objetivo}
            onClick={() => cambiarObjetivo(objetivo)}
            style={{
              padding: "16px",
              marginBottom: "10px",
              border: seleccionado
                ? "2px solid #111"
                : "1px solid #ddd",
              borderRadius: "12px",
              cursor: "pointer",
              background: seleccionado ? "#111" : "#fff",
              color: seleccionado ? "#fff" : "#111",
            }}
          >
            {seleccionado ? "✓ " : ""}
            {objetivo}
          </div>
        );
      })}

      <button
        onClick={guardarPerfil}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "16px",
          borderRadius: "12px",
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: "17px",
          cursor: "pointer",
        }}
      >
        Guardar mi perfil
      </button>

      <p
        style={{
          marginTop: "30px",
          color: "#666",
          fontSize: "13px",
          lineHeight: "1.5",
        }}
      >
        SkinOS utilizará esta información para adaptar progresivamente tu
        rutina, productos y recomendaciones.
      </p>
    </main>
  );
}