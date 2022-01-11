import './styles.css';
import Header from '../../components/header';
import LogoPed from '../../assets/ped.png';
import Product from '../../components/product/cad';


const Petshop = () => {
    return (
        <div className="h-100">
           <div> <Header/></div>
           <div className="Container">
                <div className="row">
                    <div className="col-2">
                        <img src={LogoPed} className='img-fluid petshop-image'/><br/>
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
                    <div className="col-10">
                        <h5>Produtos</h5><br/>
                        <div className='row'>
                        {[1,2,3,4,5,6,7,8,9].map((p) => (<Product/>))};
                    </div>
                    </div>

                </div>
           </div>
        </div>
    );
};

export default Petshop;