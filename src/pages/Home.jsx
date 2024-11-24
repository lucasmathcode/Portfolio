import minhafoto from "../assets/fotoPessoal.jpg";

const Home = () => {
  return (
    <div className="home">
      <img className="img" src={minhafoto} alt="" />
      <h1>Bem-vindo ao meu portfólio!</h1>
      <div className="desc">
        <p>
          Sou Lucas Matheus, estou cursando a faculdade de Análise e
          desenvolvimento de Sistemas, e este é o meu site pessoal. Sou uma
          pessoa muito dedicada no que faz, e busco sempre dar o melhor de mim
          aonde eu estiver inserido. Gosto de entregar sempre o melhor, por
          isso, busco sempre está atualizado referente as inovações
          tecnológicas. <b>Navegue pelas abas e decubra mais sobre mim.</b>
        </p>
      </div>
    </div>
  );
};

export default Home;
