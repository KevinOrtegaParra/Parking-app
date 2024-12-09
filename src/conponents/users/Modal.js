import React from "react";

export default function Modal({ user, handleChange, save, handleClose }) {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar Usuario</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={save}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="name" value={user.name} onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="email" value={user.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Contraseña:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="password" value={user.password} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Rol:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="rol" value={user.rol} onChange={handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cerrar</button>
                                    <button type="submit" className="btn btn-primary" disabled={user.name.length === 0}>Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
