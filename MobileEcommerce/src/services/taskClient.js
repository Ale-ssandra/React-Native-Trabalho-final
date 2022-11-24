import api from './api'

export const getFood = async () => {
    try {
        const { data } = await api.get("/food")
        return data
    } catch(e) {
        console.log(e)
    } 
}

export const getLogin = async () => {
    try{
        const task = await api.get("/login")
        return task
    } catch(e) {
        console.log(e)
    }
}
export const getCategoria = async () => {
    try{
        const task = await api.get("/categoria")
        return task
    } catch(e) {
        console.log(e)
    }
}

// export const deleteTask = async (id) => {
//     try{
//         const deletedTask = await api.delete("/tasks/"+id)
//         return deletedTask
//     } catch(e) {
//         console.log(e)
//     }
// }

// export const updateTask = async (task) => {
//     try{
//         const updatedTask = await api.put("/tasks/"+task.id, task)
//         return updatedTask
//     } catch(e) {
//         console.log(e)
//     }
// }