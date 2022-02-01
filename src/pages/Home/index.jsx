import {useEffect, useState} from 'react'
import api from '../../services/api.js'
import {Link} from 'react-router-dom'
import './estiloHome.css'



function Home() {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    async function loadFilmes(){
        const resposta = await api.get('r-api/?api=filmes')
        setFilmes(resposta.data)

    }

    loadFilmes()
  }, [])


    return (
      <div>
        {filmes.map((filme)=>{
          return(
            <div className="caixaFilmes" key={filme.id}>
              <h1>{filme.nome}</h1>
              <img src={filme.foto}/>
              <Link className="saibaMais"to={`/filme/${filme.id}`}>Saiba mais</Link>
            </div>
          )
        })}
      </div>
    );
  }
  
  export default Home;