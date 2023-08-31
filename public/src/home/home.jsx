import {useState} from "react"
import { Link } from "react-router-dom";
export default function Home() {
    const [name, steName] = useState()
    return (
        <div>
            <h1>home</h1>
            <Link to="/todo">To do List</Link>
            <p>{name}</p>
            <input type="text" onChange={(e)=> steName(e.currentTarget.value)}></input>
        </div>
    )
}