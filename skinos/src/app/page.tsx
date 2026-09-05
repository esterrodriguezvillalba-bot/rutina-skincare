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

        <button style={buttonStyle}>☀️ Mi rutina</button>

        <button style={buttonStyle}>📚 Biblioteca científica</button>

        <button style={buttonStyle}>🧴 Mis productos</button>

        <button style={buttonStyle}>📱 Mis dispositivos</button>

        <a
          href="/perfil"
          style={{
            textDecoration: "none",
          }}
        >
          <button style={buttonStyle}>
            👤 Mi perfil
          </button>
        </a>
      </div>
    </main>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "20px",
  marginBottom: "16px",
  fontSize: "20px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  background: "white",
  cursor: "pointer",
};