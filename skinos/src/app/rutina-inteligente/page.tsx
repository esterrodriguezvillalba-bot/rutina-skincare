"use client";

import { useState } from "react";
import { rotacionesPanasonic } from "../datos";
type ModoEspecial =
  | "RF×EMS LIFT"
  | "RF PUMP"
  | "EYE CARE"
  | "CLEAN"
  | "MOIST"
  | null;

type Dia =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

type RutinaDia = {
  nombre: string;
  especial: ModoEspecial;
  tratamiento: string;
  motivo: string;
  descripcionEspecial: string;
};

function obtenerSemanaActiva() {
  const fecha = new Date();

  const inicioAno = new Date(fecha.getFullYear(), 0, 1);
  const diasTranscurridos = Math.floor(
    (fecha.getTime() - inicioAno.getTime()) / 86400000
  );

  const numeroSemana = Math.floor(diasTranscurridos / 7);

  const semanas = [
    rotacionesPanasonic.semanaA,
    rotacionesPanasonic.semanaB,
    rotacionesPanasonic.semanaC,
    rotacionesPanasonic.semanaD,
  ];

  return semanas[numeroSemana % 4];
}

const semanaActiva = obtenerSemanaActiva();

const rutinaSemanal: Record<Dia, RutinaDia> = {
  lunes: {
    nombre: "Lunes",
    especial: semanaActiva.lunes.especial,
    tratamiento: semanaActiva.lunes.tratamiento,
    motivo:
      semanaActiva.lunes.especial === "RF×EMS LIFT"
        ? "Sesión de LIFT para firmeza, reafirmación y contorno facial."
        : "Rutina adaptada a la rotación semanal.",
    descripcionEspecial:
      semanaActiva.lunes.especial === "RF×EMS LIFT"
        ? "RF × EMS LIFT · firmeza, reafirmación y contorno facial."
        : "Sin modo especial.",
  },

  martes: {
    nombre: "Martes",
    especial: semanaActiva.martes.eyeCare
      ? "EYE CARE"
      : semanaActiva.martes.especial,
    tratamiento: semanaActiva.martes.tratamiento,
    motivo: "Sesión específica de cuidado ocular, separada de los modos faciales especiales.",
    descripcionEspecial:
      "EYE CARE · cuidado específico del contorno ocular.",
  },

  miercoles: {
    nombre: "Miércoles",
    especial: semanaActiva.miercoles.especial,
    tratamiento: semanaActiva.miercoles.tratamiento,
    motivo:
      semanaActiva.miercoles.especial === "RF PUMP"
        ? "Sesión semanal de RF PUMP dentro de la rotación Panasonic."
        : "Sesión de LIFT para firmeza y contorno facial.",
    descripcionEspecial:
      semanaActiva.miercoles.especial === "RF PUMP"
        ? "RF PUMP · tratamiento de radiofrecuencia orientado a firmeza y contorno."
        : "RF × EMS LIFT · firmeza, reafirmación y contorno facial.",
  },

  jueves: {
    nombre: "Jueves",
    especial: semanaActiva.jueves.eyeCare
      ? "EYE CARE"
      : semanaActiva.jueves.especial,
    tratamiento: semanaActiva.jueves.tratamiento,
    motivo: "Sesión específica de cuidado ocular dentro de la estrategia semanal.",
    descripcionEspecial:
      "EYE CARE · cuidado específico del contorno ocular.",
  },

  viernes: {
    nombre: "Viernes",
    especial: semanaActiva.viernes.especial,
    tratamiento: semanaActiva.viernes.tratamiento,
    motivo:
      semanaActiva.viernes.especial === "RF×EMS LIFT"
        ? "Sesión de LIFT para completar la estrategia semanal de firmeza."
        : "Rutina adaptada a la rotación semanal.",
    descripcionEspecial:
      semanaActiva.viernes.especial === "RF×EMS LIFT"
        ? "RF × EMS LIFT · firmeza, reafirmación y contorno facial."
        : "Sin modo especial.",
  },

  sabado: {
    nombre: "Sábado",
    especial: semanaActiva.sabado.eyeCare
      ? "EYE CARE"
      : semanaActiva.sabado.especial,
    tratamiento: semanaActiva.sabado.tratamiento,
    motivo: "Tercera sesión semanal de EYE CARE cuando corresponde.",
    descripcionEspecial:
      "EYE CARE · cuidado específico del contorno ocular.",
  },

  domingo: {
    nombre: "Domingo",
    especial: semanaActiva.domingo.especial,
    tratamiento: semanaActiva.domingo.tratamiento,
    motivo:
      "Noche de recuperación y mantenimiento de la barrera cutánea.",
    descripcionEspecial:
      "Sin modo especial. Se mantiene CLEAN + MOIST.",
  },
};
const dias: { id: Dia; corto: string }[] = [
  { id: "lunes", corto: "Lun" },
  { id: "martes", corto: "Mar" },
  { id: "miercoles", corto: "Mié" },
  { id: "jueves", corto: "Jue" },
  { id: "viernes", corto: "Vie" },
  { id: "sabado", corto: "Sáb" },
  { id: "domingo", corto: "Dom" },
];

function obtenerDiaActual(): Dia {
  const dia = new Date().getDay();

  const mapa: Record<number, Dia> = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado",
  };

  return mapa[dia];
}

function SequenceItem({
  numero,
  titulo,
  etiqueta,
  descripcion,
}: {
  numero: number;
  titulo: string;
  etiqueta: string;
  descripcion: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "18px 0",
        borderBottom: "1px solid #eeeeee",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          minWidth: "34px",
          borderRadius: "50%",
          background: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        {numero}
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <strong style={{ fontSize: "17px" }}>{titulo}</strong>

          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#666",
              whiteSpace: "nowrap",
            }}
          >
            {etiqueta}
          </span>
        </div>

        <div
          style={{
            marginTop: "5px",
            color: "#666",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {descripcion}
        </div>
      </div>
    </div>
  );
}

export default function RutinaInteligentePage() {
  const [diaSeleccionado, setDiaSeleccionado] =
    useState<Dia>(obtenerDiaActual());

  const rutina = rutinaSemanal[diaSeleccionado];

  const tieneEspecial = rutina.especial !== null;

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "56px 24px 80px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
        color: "#111",
      }}
    >
      {/* CABECERA */}

      <h1
        style={{
          fontSize: "42px",
          fontWeight: 500,
          margin: 0,
          letterSpacing: "-0.03em",
        }}
      >
        ¿Qué hago esta noche?
      </h1>

      <p
        style={{
          marginTop: "14px",
          fontSize: "17px",
          lineHeight: 1.6,
          color: "#666",
          maxWidth: "760px",
        }}
      >
        SkinOS construye tu rutina nocturna combinando tus productos,
        tratamientos y Panasonic VITALIFT RF EX EH-SR86.
      </p>

      {/* LÓGICA */}

      <section
        style={{
          marginTop: "34px",
          padding: "24px",
          borderRadius: "18px",
          background: "#f6f6f6",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          🧠 Lógica de SkinOS
        </div>

        <div
          style={{
            color: "#555",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          Perfil → objetivos → productos → activos → compatibilidades →
          dispositivo → frecuencia → secuencia nocturna
        </div>
      </section>

      {/* OPTIMIZACIÓN */}

      <section
        style={{
          marginTop: "28px",
          padding: "24px",
          border: "1px solid #e7e7e7",
          borderRadius: "18px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 500,
          }}
        >
          Optimización del Panasonic
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: 1.6,
            marginBottom: "22px",
          }}
        >
          SkinOS utiliza los modos especiales respetando las frecuencias del
          fabricante y priorizando la estrategia definida para tu rutina.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
         <Stat
  numero={
    [
      semanaActiva.lunes.especial,
      semanaActiva.miercoles.especial,
      semanaActiva.viernes.especial,
    ].filter((modo) => modo === "RF×EMS LIFT").length.toString()
  }
  texto="LIFT"
/>

<Stat
  numero={
    [
      semanaActiva.lunes.especial,
      semanaActiva.miercoles.especial,
      semanaActiva.viernes.especial,
    ].filter((modo) => modo === "RF PUMP").length.toString()
  }
  texto="PUMP"
/>

<Stat
  numero={(["martes", "jueves", "sabado"] as Dia[]).filter(
    (dia) => semanaActiva[dia].eyeCare
  ).length.toString()}
  texto="EYE CARE"
/>

<Stat numero="7" texto="CLEAN + MOIST" />
        </div>
      </section>

      {/* ESTRATEGIA FIJA */}

      <section
        style={{
          marginTop: "28px",
          padding: "22px 24px",
          borderRadius: "18px",
          background: "#fafafa",
          border: "1px solid #eeeeee",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#777",
            textTransform: "uppercase",
          }}
        >
          Estrategia semanal SkinOS
        </div>

        <div
          style={{
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          2 LIFT + 1 PUMP + 3 EYE CARE
        </div>

        <p
          style={{
            marginBottom: 0,
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          No hay rotaciones alternativas: esta es la estrategia semanal
          activa para aprovechar el Panasonic sin superar la frecuencia
          establecida.
        </p>
      </section>

      {/* DÍAS */}

      <h2
        style={{
          marginTop: "38px",
          fontSize: "22px",
          fontWeight: 500,
        }}
      >
        Selecciona el día
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(7, minmax(0, 1fr))",
          gap: "8px",
          marginTop: "14px",
        }}
      >
        {dias.map((dia) => {
          const activo = dia.id === diaSeleccionado;

          return (
            <button
              key={dia.id}
              onClick={() =>
                setDiaSeleccionado(dia.id)
              }
              style={{
                padding: "14px 8px",
                borderRadius: "12px",
                border: activo
                  ? "1px solid #111"
                  : "1px solid #ddd",
                background: activo ? "#111" : "#fff",
                color: activo ? "#fff" : "#111",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: activo ? 600 : 400,
              }}
            >
              {dia.corto}
            </button>
          );
        })}
      </div>

      {/* RESUMEN DEL DÍA */}

      <section
        style={{
          marginTop: "28px",
          padding: "28px",
          borderRadius: "18px",
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#777",
                textTransform: "uppercase",
              }}
            >
              Rutina del {rutina.nombre}
            </div>

            <h2
              style={{
                fontSize: "28px",
                fontWeight: 500,
                margin: "10px 0 5px",
              }}
            >
              {tieneEspecial
                ? `Noche de ${rutina.especial}`
                : "Noche de recuperación"}
            </h2>

            <div
              style={{
                color: "#666",
                fontSize: "15px",
              }}
            >
              {rutina.tratamiento}
            </div>
          </div>

          <span
            style={{
              padding: "9px 14px",
              borderRadius: "999px",
              background: "#f1f1f1",
              fontSize: "12px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {tieneEspecial
              ? rutina.especial
              : "SIN MODO ESPECIAL"}
          </span>
        </div>
      </section>

      {/* POR QUÉ */}

      <section
        style={{
          marginTop: "22px",
          padding: "24px",
          borderRadius: "18px",
          background: "#fff9e9",
          border: "1px solid #f2dfaa",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          💡 Por qué hoy
        </div>

        <p
          style={{
            margin: "10px 0 0",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {rutina.motivo}
        </p>
      </section>

      {/* SECUENCIA */}

      <h2
        style={{
          marginTop: "38px",
          fontSize: "22px",
          fontWeight: 500,
        }}
      >
        Tu secuencia
      </h2>

      <section
        style={{
          marginTop: "12px",
          padding: "0 22px",
          border: "1px solid #e6e6e6",
          borderRadius: "18px",
        }}
      >
        <SequenceItem
          numero={1}
          titulo="CLEAN"
          etiqueta="DIARIO"
          descripcion="Limpieza y preparación de la piel."
        />

        <SequenceItem
          numero={2}
          titulo="MOIST"
          etiqueta="DIARIO"
          descripcion="Hidratación y preparación/penetración del cosmético compatible."
        />

        {tieneEspecial && (
          <SequenceItem
            numero={3}
            titulo={rutina.especial!}
            etiqueta="ESPECIAL"
            descripcion={rutina.descripcionEspecial}
          />
        )}

        <SequenceItem
          numero={tieneEspecial ? 4 : 3}
          titulo={rutina.tratamiento}
          etiqueta="COSMÉTICOS"
          descripcion={
            tieneEspecial
              ? "Utilizar el producto o gel compatible indicado para ese modo, respetando las instrucciones del fabricante y la compatibilidad del cosmético."
              : "Completar la rutina cosmética correspondiente a la rotación de activos del día."
          }
        />
      </section>

      {/* REGLAS */}

      <section
        style={{
          marginTop: "28px",
          padding: "24px",
          borderRadius: "18px",
          background: "#f7f7f7",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Reglas del dispositivo
        </h3>

        <ul
          style={{
            marginTop: "14px",
            marginBottom: 0,
            paddingLeft: "20px",
            color: "#555",
            lineHeight: 1.8,
          }}
        >
          <li>CLEAN y MOIST forman la base diaria.</li>
          <li>
            Cuando hay modo especial: CLEAN → MOIST → especial.
          </li>
          <li>
            LIFT y PUMP nunca se programan juntos el mismo día.
          </li>
          <li>
            EYE CARE se programa como modo especial independiente.
          </li>
          <li>
            La frecuencia semanal se mantiene en 2 LIFT + 1 PUMP +
            3 EYE CARE.
          </li>
          <li>
            Si existe conflicto entre cosméticos, activos o dispositivo,
            SkinOS prioriza seguridad y tolerancia.
          </li>
        </ul>
      </section>

      {/* PIE */}

      <p
        style={{
          marginTop: "32px",
          color: "#888",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        SkinOS utiliza esta programación como motor de rutina. Las
        indicaciones específicas de producto, gel, nivel de intensidad y
        compatibilidad se incorporarán progresivamente a la biblioteca
        científica.
      </p>
    </main>
  );
}

function Stat({
  numero,
  texto,
}: {
  numero: string;
  texto: string;
}) {
  return (
    <div
      style={{
        padding: "18px 10px",
        borderRadius: "12px",
        background: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "25px",
          fontWeight: 600,
        }}
      >
        {numero}
      </div>

      <div
        style={{
          marginTop: "5px",
          fontSize: "11px",
          fontWeight: 700,
          color: "#777",
          letterSpacing: "0.04em",
        }}
      >
        {texto}
      </div>
    </div>
  );
}