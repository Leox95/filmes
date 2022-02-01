import './filmes.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function Filmes() {

    const { id } = useParams()

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const resposta = await api.get(`r-api/?api=filmes/${id}`)
            setFilmes(resposta.data)
        }

        loadFilmes()
    }, [id])

    function salvaFilme(){
        const listaFilmes = localStorage.getItem('filmes')
        const filmeSalvo = JSON.parse(listaFilmes) || []

        // verificar se já tem o filme para não salvar novamente
        const temFilme = filmeSalvo.some((item)=> item.id === filmes.id)

        if(temFilme){
            alert('Você já tem esse filme na lista')
            return
        }

        filmeSalvo.push(filmes)
        localStorage.setItem('filmes', JSON.stringify(filmeSalvo))
        alert('Filme Salvo com sucesso')


    }


    return (
        <article className="caixaFilmes">
            <h1>{filmes.nome}</h1>
            <img src={filmes.foto} />
            <h4> {filmes.sinopse}</h4>
            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <a target="_blank" href={`https://youtube.com/results?search_query=${filmes.nome} trailer`}>
                    <button>Trailer</button>
                </a>
            </div>
        </article>
    )
}