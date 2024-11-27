import { useState } from "react";

const Contato = () => {
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 
  };

  return (
    <div className="contact-info">
      <h1>Entre em Contato</h1>
      <div className="contact-item">
        <strong>Nome:</strong>
        <p>Lucas Matheus Torres de Moraes</p>
      </div>
      <div className="contact-item">
        <strong>Contato:</strong>
        <p>(84) 9 9116-3332</p>
      </div>
      <div className="contact-item">
        <strong>GitHub:</strong>
        <p>
          <a
            href="https://github.com/lucasmathcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lucasmathcode
          </a>
        </p>
      </div>
      <div className="contact-item">
        <strong>E-mail:</strong>
        <p>
          <a href="mailto:lm694746@gmail.com">lm694746@gmail.com</a>
        </p>
      </div>

      {/* Formulário de Contato */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>

      {submitted && (
        <div className="success-message">
          <p>Obrigado! Sua mensagem foi enviada com sucesso.</p>
        </div>
      )}
    </div>
  );
};

export default Contato;
