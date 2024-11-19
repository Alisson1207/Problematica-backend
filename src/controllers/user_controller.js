import UserModels from '../models/user.js'
import { v4 as uuidv4 } from 'uuid';

const getAllUserController = async(req,res) => {
    try {
        //Por ser un objeto para llamar a un metodo 
        const user= await UserModels.getAllUserModel()
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

// Crear 
const createUserController = (req,res) => {
    // Creacion del objeto
    const  newUserData={
        // Identificador con un id ramdomico 
        id:uuidv4(),
        ...req.body
    }
    try {
        const user = UserModels.createUserModel(newUserData)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Actualizar 
const updateUserController = async (req,res) => {
    const {id}= req.params
    try {
        const user = await UserModels.updateUserModel(id, req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }

}

//Eliminar 
const deleteUserController = async (req,res) => {
    const {id} =req.params

    try {
        await UserModels.deleteUserModel(id)
        res.status(200).json({msg: "Usuario eliminado"})
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getAllUserController,
    updateUserController,
    deleteUserController,
    createUserController
}
