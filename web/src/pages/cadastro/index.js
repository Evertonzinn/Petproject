import Header from "../../components/header";
import Illustration from "../../assets/dogFeliz 1.svg";
import "./styles.css";

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      {/*<button className="btn btn-primary">Voltar</button>*/}
      <div className="col-12 py-4 px-4 text-center">
       <Header hideCart/>
      </div>
      <div className="row">
      <div className="col-6 text-right my-auto">
        <img src={Illustration} className="img-fluid illustration" />
      </div>
      <div className="col-6">
        <div className="box col-8">
          <h2 className="text-center">Complete seu cadastro e faça o dia do seu pet mais feliz!</h2>
          <br/>
          <br/>
          <input
            type="text"
            className="form-control form-lg mb-3"
            placeholder="Nome Completo"
          ></input>
          <br/>
          <input
            type="email"
            className="form-control form-lg mb-3"
            placeholder="Email"
          ></input>
          <br/>
          <input
            type="text"
            className="form-control form-lg mb-3"
            placeholder="CPF"
          ></input>
          <br/>
          <input
            type="tel"
            className="form-control form-lg mb-3"
            placeholder="Telefone"
          ></input>
            <button className="btn btn-lg btn-block btn-secondary">Prosseguir ao pagamento</button>
        </div>
     
      </div>
 </div>
    </div>
  );
};

export default Cadastro;
