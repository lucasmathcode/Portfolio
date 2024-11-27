import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";
import "./index.css"; 
import "./app.css";

const App = () => (
  <Router>
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfólio</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<h2>Página não encontrada</h2>} />
    </Routes>
  </Router>
);

export default App;
