import RacaoEx from '../../../assets/racaoEx.svg';

import './styles.css';


const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={RacaoEx} className='img-fluid'/>
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">R$ 10,00</label>
                    </h6>
                    <small>
                        <b>Ração sabor carne para caes adultos sabor carne 3kg</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    );
};

export default Product;