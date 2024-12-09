import {axiosConfig} from "../configurations/axiosConfig";

const getUsers = () => {
    return axiosConfig.get('user', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const createUsers = (data = {}) => {
    return axiosConfig.post('user', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editUser = (id, data = {}) => {
    return axiosConfig.put('user/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteUser = (id) => {
    return axiosConfig.delete('user/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export{
    getUsers,
    createUsers,
    editUser,
    deleteUser
}