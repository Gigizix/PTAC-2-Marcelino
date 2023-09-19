import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [floricultura, setfloricultura] = useState("");
    const [preco, setpreco] = useState("");
    const [cor, setcor] = useState("");

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            floricultura: floricultura,
            preco: preco,
            cor:cor
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
            <img class = "floricultura" src=""></img>
            <h1>Floricultura</h1>
            <form onSubmit={salvar}>

                <h4><i>Flores</i></h4>  
                <input type="text"
                    value={flores}
                    onChange={(e) => { setflores(e.target.value) }} />
               
          
      
<h4><i>Preço</i></h4>
            <input type="text"
                    value={preco}
                    onChange={(e) => { setpreco(e.target.value) }} />

<h4><i>Cor</i></h4>
                       <input type="text"
                    value={cor}
                    onChange={(e) => { setcor(e.target.value) }} />
<br></br>
<br></br>
                <button>ADICIONAR</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>Floricultra: {ativ.floricultura}</p>
                        <p>Preço: {ativ.preco}</p>
                        <p>Cor: {ativ.cor}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}