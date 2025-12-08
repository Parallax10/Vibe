"use client"
export default function NavBar(){
    return(
            <div>
                <div>
                    <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
                    <p>VIBE</p>
                </div>
                <div>
                    <button>Pais</button>
                    <button>Genero</button>
                </div>
                <div>
                    <p>Busqueda</p>
                    <input></input>
                    <button>Buscar</button>
                </div>
                <div>
                    <button>Perfil</button>
                </div>
            </div>
    );
}