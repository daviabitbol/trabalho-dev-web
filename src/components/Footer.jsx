import "./Footer.css"
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer-card">
      <footer>
        <div className="developed">
          <ul>
          <strong>Esse site foi desenvolvido por</strong>
          <p>Davi Rabello Abitbol</p>
        </ul>
        </div>
        <div className="know-more">
          <ul>
          <strong>Veja meus projetos!</strong>
          <p><Link to="https://github.com/daviabitbol" className="github">meu github</Link></p>
        </ul>
        </div>
        <div className="contacts">
          <ul>
          <strong>Contatos</strong>
          <p>davirabelloabitbol@gmail.com</p>
        </ul>
        </div>
      </footer>
    </div>
  );
}
