"use client";
import CardArtistas from "./CardArtistas";

const artistas = [
{
nombre: "AC/DC",
pais: "Australia",
genero: "Rock",
img: "/imagenes/ACDC.png"
},
{
nombre: "Band-Maid",
pais: "Japón",
genero: "J-Rock",
img: "/imagenes/MAIDBAND.png"
},
{
nombre: "Linkin Park",
pais: "EE. UU.",
genero: "Nu-Metal",
img: "/imagenes/Linkin.png"
},
{
nombre: "Ado",
pais: "Japón",
genero: "J-Rock",
img: "/imagenes/ADO.png"
}
];
export default function GridArtistas() {
return (
<div>
    {artistas.map((artista, index) => (
    <CardArtistas
        key={index}
        nombre={artista.nombre}
        pais={artista.pais}
        genero={artista.genero}
        img={artista.img}
    />
    ))}
</div>
);
}

