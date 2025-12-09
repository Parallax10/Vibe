export default function Home() {
    return(
        <div>
    <div>
        <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
    </div>
    <h1>VIBE</h1>
    <div>
        <p>Username</p>
        <input type="text"/>
        <br/>
        <p>Email</p>
        <input type="email"/>
        <br/>
        <p>Password</p>
        <input type="password"/>
        <br/>
        <button>Iniciar sesion</button>
    </div>
    </div>
    );
}