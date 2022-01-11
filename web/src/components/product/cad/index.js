import PedProd from '../../../assets/racao.png';
import './styles.css';

const Product = () => {
    return (
        <div className='product col-3'>
            <img src={PedProd} className='img-fluid align-center'/>
            <button className='btn btn-primary rounded-circle'>+</button>
            <h4>
                <label className='badge badge-primary'>R$ 90,00</label>
            </h4>
            <small>
                <b>Ração para cães de porte médio, sabor carne - 3kg</b>
            </small>
        </div>
    );
};

export default Product;