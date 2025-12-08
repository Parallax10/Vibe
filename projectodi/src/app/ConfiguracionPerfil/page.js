import NavBar from "../navBar";
export default function Home() {
    return (
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <div>
                <h1>CONFIGURACION DEL PERFIL</h1>
                <button>GuardarCambios</button>
            </div>
            <div>
                <h1>Cambiar Nombre</h1>
                <input></input>
                <h1>Cambiar Correo</h1>
                <input></input>
                <h1>Cambiar Contraseña</h1>
                <input></input>
                <h1>Cambiar Foto de perfil</h1>
                <input></input>
                <h1>Cambiar foto de banner</h1>
                <input></input>
                <h1>privacidad del perfil</h1>
                <button>publico</button>
                <button>Privado</button>
                <br/>
                <br/>
                <br/>
                <h1>Borrar cuenta, esto no se puede deshacer</h1>
                <button>Borrar</button>
            </div>
        </div>
    );
}