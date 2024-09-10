import React from 'react'

export const SegundoComponente = () => {

    let nombre = 'Manuel';
    let web = 'http://manuel-hernandez.com';

    ///Declaracion de objetos
    let usuario = {
        nombre: "Lupita",
        apellido: "Lopez",
        edad: 30,
        ciudad: "Libres"
    };

    ///imprimiendo en consola
    console.log(usuario);

    return (
        <div>
            <hr />
            <h2>Datos del usuario</h2>
            <ul>
                <li>nombre: {nombre}  </li>
                <li>Web: {web} </li>
            </ul>
            <hr />

            <h2>Datos de un objeto</h2>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong></li>
                <li>Edad: <strong>{usuario.edad}</strong></li>
                <li>Ciudad: <strong>{usuario.ciudad}</strong></li>
            </ul>
        </div>
    )
}
