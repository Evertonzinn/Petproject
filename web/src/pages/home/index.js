import Header from '../../components/header'
import Petshop from '../../components/petshop';
import Map from '../../components/map';
import './styles.css';

const Home = () => {
    return (
        <div className='h-100'>
            <div>
            <Header hideCart/>
        </div>
        <div className='container-fluid petshop-list-container'>
            <div className='col-12 px-4 text-center'>
                <h5>Pets mais próximos (4)</h5>
            </div>
            <ul className='col-12 petshop-list'>
                {[1,2,3,4].map(p => (<Petshop/>)
                )};
            </ul>            
        </div>
        <div>
            <Map/>
        </div>
        </div>
        
    )
}

export default Home;