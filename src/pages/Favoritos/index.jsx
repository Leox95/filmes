import './estiloFavoritos.css'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'


export default function Favoritos(){
    
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const listaFilmes = localStorage.getItem('filmes')
        setFilmes(JSON.parse(listaFilmes))

    },[])
    
    function Excluir(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(
                item.id !== id
            )
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    }
    return(
        <div className='caixa'>
            <h1>Filmes Salvos</h1>
            {// se não houver filme salvo mensagem
}
            {filmes.length === 0 && <span>Não existe filme salvo</span> }
            
            <div>
                <ul >
                   {filmes.map((item)=>{
                       return(
                           <li key={item.id}>
                               <span>{item.nome}</span>

                               <div>
                                   <button>
                                       <Link to={`/filme/${item.id}`} className='link'>Saiba mais</Link>
                                   </button>
                                   <button onClick={()=> Excluir(item.id)}>
                                       Excluir
                                   </button>
                               </div>
                           </li>
                       )
                   })}
                </ul>
            </div>
        </div>
        
    )
}