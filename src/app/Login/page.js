export default function Home() {
    return (
    <div>
    <div>
        <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
    </div>
    <h1>VIBE</h1>
    <div>
        <p>Username</p>
        <input type="text"/>
        <br></br>
        <br></br>
        <p>Password</p>
        <input type="password"/>
        <br/>
        <button>Sign In</button>
    </div>
    </div>
);
}