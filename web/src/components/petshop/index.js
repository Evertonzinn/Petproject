import './styles.css';
import Ped from '../../assets/ped.png';
import Love from '../../assets/petlov.png';

const Petshop = () => {
    return (
       <li className='petshop d-inline-block'>
            <div className='d-inline-block'>
            <img src={Ped} className='img-fluid'/>
            </div>
            <div className='d-inline-block nome'>
            <b>Pedigree Store</b>
                    <div className='petshop-infos'>
                <span class="mdi mdi-star"></span>
                <text>
                    <b>4,8</b>
                </text>
                <span class="mdi mdi-cash"></span>
            <text>
                <b>$$$</b>
             </text>
                 <span class="mdi mdi-map-marker-path"></span>
            <text>
                <b>12,2km</b>
            </text>
        </div>
    <label className="badge badge-primary">Frete Gratis</label>
            </div>
            <div className='d-inline-block'>
            <img src={Love} className='img-fluid'/>
            </div>
            <div className='d-inline-block nome'>
            <b>Love Pet Store</b>
                <div className='petshop-infos'>
            <span class="mdi mdi-star"></span>
                <text>
                    <b>4,3</b>
                </text>
                <span class="mdi mdi-cash"></span>
            <text>
                <b>$$</b>
             </text>
                 <span class="mdi mdi-map-marker-path"></span>
            <text>
                <b>10,1km</b>
            </text>
        </div>
    <label className="badge badge-primary">Frete Gratis acima de R$100,00</label>
            </div>
        </li>

    );
};

export default Petshop;