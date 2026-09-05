import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f5",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "8px",
          }}
        >
          SkinOS
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Tu asistente científico para el cuidado de la piel.
        </p>

        <Link href="/rutina" style={linkStyle}>
          <div style={buttonStyle}>☀️ Mi rutina</div>
        </Link>

        <Link href="/biblioteca" style={linkStyle}>
          <div style={buttonStyle}>📚 Biblioteca científica</div>
        </Link>

        <Link href="/productos" style={linkStyle}>
          <div style={buttonStyle}>🧴 Mis productos</div>
        </Link>

        <Link href="/dispositivos" style={linkStyle}>
          <div style={buttonStyle}>📱 Mis dispositivos</div>
        </Link>

        <Link href="/perfil" style={linkStyle}>
          <div style={buttonStyle}>👤 Mi perfil</div>
        </Link>
      </div>
    </main>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
};

const buttonStyle = {
  width: "100%",
  padding: "20px",
  marginBottom: "16px",
  fontSize: "20px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  background: "white",
  cursor: "pointer",
  boxSizing: "border-box" as const,
};