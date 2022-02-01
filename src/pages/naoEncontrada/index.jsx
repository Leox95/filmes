import {Link} from 'react-router-dom'

export default function NaoEncontrada(){
    return(
        <div>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Acessar Home</Link>
        </div>
    )
}