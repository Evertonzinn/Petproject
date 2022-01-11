import './styles.css';
import {useState, useEffect} from 'react';
import Dock from 'react-dock';
import Product from '../product/cad';

const Sidebar = () => {

    const [opened, setOpened] = useState(false);

    useEffect (() => {
        window.addEventListener('OpenCart', () => {
            setOpened(true);
        });
    },[])


    return (
        <Dock isVisible={opened} onVisibleChange={(Visible) => {
            setOpened(Visible);
        }}
        position='right'
        >
            <div className='container-fluid h-100 pt-4 sidebar'>
                <h5>Minha Sacola(9)</h5>

                <div className="row products">
                    {[1,2,3,4,5,6,7,8,9].map((p) => (
                      <Product/>
                    ))};
                  </div>
                  <div className='row footer align-itens-end'>
                        <div className='col-12 d-flex justify-content-between align-itens-center'>
                            <b className='d-inline-block'>Total</b>
                            <h3>R$ 90,00</h3>
                        </div>
                        <button className='btn btn-block btn-lg btn-primary rounded-0 h-50 align-itens-center'>Prosseguir para o Pagamento</button>
                  </div>
            </div>

        </Dock>
    );
};

export default Sidebar;