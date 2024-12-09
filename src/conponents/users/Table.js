import React from "react";
import TrUser from "./TrUser"

export default function Table({users = [], borrarUser, editarUser}) {
    return (
        <table className="table table-hover flex">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return (
                            <TrUser user={user} index={index} key={index+1} borrarUser={borrarUser} editarUser={editarUser}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
    
}