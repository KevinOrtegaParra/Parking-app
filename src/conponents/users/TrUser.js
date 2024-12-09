import React from "react"
import dayjs from "dayjs"

export default function TrUser({ user = [], index, borrarUser, editarUser}) {
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.rol}</td>
            <td>{dayjs(user.createdAt).format('YYYY/MM/DD')}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editarUser(user._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrarUser(user._id)}>Borrar</button>
            </td>
        </tr>
    )

}
            