import './styles.css';
import Logo from '../../assets/logo.svg';

const Header = ({hideCart}) => {

    const Opendrawer = () => {
        const event = new CustomEvent('OpenCart');
        window.dispatchEvent(event);
    } 

    return (
        <div className="container-fluid h-100 bg-primary">
        <header className='col-12 py-4 px-4 text-center'>
            <img className='logo' src={Logo}/>
        </header>
        {!hideCart &&<button onClick={() => Opendrawer()} className='btn btn-secondary cart-button'>
            <span className='mdi mdi-cart'></span>
            2 itens</button>}
    </div>
    );
};

export default Header;
