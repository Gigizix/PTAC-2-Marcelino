import { useState } from "react";
import { Link } from "react-router-dom"
export default function Todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setid] = useState(1);

    const salvar = (e) => {
        e.preventDefault()
        setLista([...lista, {
            atividade:atividade, id:id
        }]);
        setid(id + 1)
        console.log(lista)
    };

    return (
        <div>
            <h1>lista de atividades</h1>
            <Link to="/">home</Link>
            <form onSubmit={salvar}>
                <input type="text"
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>Encrementa</button>
            </form>

            {lista.map((ativ)=> 
                <div key={ativ.id}> 
                    <p>{ativ.id}</p>
                    <p>{ativ.atividade}</p>
                </div>
           )}
        
        </div>
    )
}