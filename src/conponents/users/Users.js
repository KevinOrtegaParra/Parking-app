import React, { useEffect, useState } from "react";
import { getUsers, createUsers, editUser, deleteUser } from "../../services/UsersServices"
import Table from "./Table"
import Error from "./Error"
import Modal from "./Modal"

export default function Users() {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [userEditarID, setUserEditarID] = useState(null)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        rol: ''
        //isActive
    })

    useEffect(() => {
        getEverything()
    })

    const getEverything = async () => {
        try {
            const { data } = await getUsers()
            setUsers(data)
            if (error) {
                setError(false)

            }

        } catch (e) {
            console.error(e)
            setError(true)

        }
    }

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const save = async (id) => {
        try {
            if(modoEdicion){
                await editUser(userEditarID, user)
            }else{
                await createUsers(user)
            }
            getEverything()
            setUser({
                "name": '',
                "email": '',
                "password": '',
                "rol": ''
            })
            setModoEdicion(false)
            setUserEditarID(null)
        }catch (error) {
            console.log(error)

        }
    }

    const editarUser = (id) => {
        const userEdit = users.find(user => user._id === id)
        if (userEdit) {
            setUser(userEdit)
            setModoEdicion(true)
            setUserEditarID(id)
        }
    }

    const handleClose = () => {
        setUser({
            "name": '',
            "email": '',
            "password": '',
            "rol": ''
        })
        setModoEdicion(false)// cambiar modoEdicion a false al cerrar el modal
        setUserEditarID(null)
    }

    const borrarUser = async (id) => {
        try {
            const resp = await deleteUser(id)
            getEverything()
            console.log(resp)
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {error ? <Error/> : <Table users={users} borrarUser={borrarUser} editarUser={editarUser}/>}
        <Modal user={user} handleChange={handleChange} save={save} modoEdicion={modoEdicion} handleClose={handleClose}/>
        </>
    )
}