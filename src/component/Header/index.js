import './style.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
    <header>
        <Link to="/" className='filme'>Filmes</Link>
        <Link to="/" className='salvos'>Salvos</Link>
    </header>
    )
}

export default Header;