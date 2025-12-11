"use client"
import NavBar from "../navBar";

export  default function Home() {
return(
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <h1>Modificar artista</h1>
            <button>Guardar cambios</button>
        </div>
        <div>
            <h2>nombre</h2>
            <input></input>
            <h2>Genero</h2>
            <input></input>
            <h2>imagen</h2>
            <input></input>
            <h2>imagen banner</h2>
            <input></input>
        </div>
    </div>
);
}