import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import Card from "./components/Card";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <Sidebar />

        <main className="main">
          <h2>Bem-vinda</h2>

          <div className="cards">
            <Card title="Usuários" value="120" />
            <Card title="Atividades" value="35" />
            <Card title="Mensagens" value="8" />
          </div>
        </main>
      </div>
    </div>
  );
}