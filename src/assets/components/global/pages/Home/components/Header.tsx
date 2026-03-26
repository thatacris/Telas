export default function Header() {
  return (
    <header className="header">
      <h1>Sistema</h1>
      <button onClick={() => window.location.href="/"}>
        Sair
      </button>
    </header>
  );
}