import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [floricultura, setfloricultura] = useState("");
    const [preco, setpreco] = useState("");
  

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            floricultura: floricultura,
            preco: preco,
          
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {


        const auxLista = [];
        lista.map((list) => {
            if (list.id !== id) {
                auxLista.push(list);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <Link to="/">home</Link>
            <img class = "jukebox" src=""></img>
            <h1>Floricultura</h1>
            <form onSubmit={salvar}>

                <h4><i>Album</i></h4>  
                <input type="text"
                    value={album}
                    onChange={(e) => { setalbum(e.target.value) }} />
               
          
      
<h4><i>Musica</i></h4>
            <input type="text"
                    value={musica}
                    onChange={(e) => { setmusica(e.target.value) }} />

<h4><i>Tempo</i></h4>
                       <input type="text"
                    value={tempo}
                    onChange={(e) => { settempo(e.target.value) }} />
<br></br>
<br></br>
                <button>ADICIONAR</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>Album: {ativ.album}</p>
                        <p>Musica: {ativ.musica}</p>
                        <p>Tempo: {ativ.tempo}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}