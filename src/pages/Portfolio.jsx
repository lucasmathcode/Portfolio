import logoA3 from "../assets/logoa3.jpg"; // Usar o caminho relativo correto
import Lista from "../assets/lista de tarefas.png";
import pokemon from "../assets/pokemon.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Meus Projetos</h1>
      <div className="project-card">
        <img src={logoA3} alt="Projeto 1" title="Logo do MEDSAÚDE+" />
        <div className="project-details">
          <h2>MEDSAÚDE+</h2>
          <p>
            Sistema desktop que tem como intuito otimizar cadastros de
            consultas. Nele você pode marcar suas consultas e, além disso, os
            funcionários da clínica podem administrar as mesmas, podendo
            desmarca-lás, edita-lás, pesquisa-lás e busca-lás.
          </p>
          <a
            href="https://github.com/lucasmathcode/MedSaude"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
          </a>
        </div>
      </div>

      {/* Projeto 2 */}
      <div className="project-card">
        <img src={pokemon} alt="Projeto 2" />
        <div className="project-details">
          <h2>POKEDEX</h2>
          <p>
            Aplicação que mostra todos os pokemons da primeira geração. Nesse
            site, além de você poder visualizar as imagens dos pokemons, poderá
            pesquisa-los através de seu nome ou id.
          </p>
          <a
            href="https://github.com/lucasmathcode/pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
          </a>
        </div>
      </div>

      {/* Projeto 3 */}
      <div className="project-card">
        <img src={Lista} alt="Projeto 3" />
        <div className="project-details">
          <h2>LISTA DE TAREFAS</h2>
          <p>Aplicação básica que você pode fazer uma lista de tarefas.</p>
          <a
            href="https://github.com/lucasmathcode/Lista-de-Tarefas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
