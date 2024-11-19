import UsosModels from '../models/usos.js'
import { v4 as uuidv4 } from 'uuid';

const getAllUsosController = async(req,res) => {
    try {
        //Por ser un objeto para llamar a un metodo 
        const usos= await UsosModels.getAllUsosModel()
        res.status(200).json(usos)
    } catch (error) {
        console.log(error);
        
    }
}

// Crear 
const createUsosController = (req,res) => {
    // Creacion del objeto
    const  newUsosData={
        // Identificador con un id ramdomico 
        id:uuidv4(),
        ...req.body
    }
    try {
        const usos = UsosModels.createUsosModel(newUsosData)
        res.status(201).json(usos)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Actualizar 
const updateUsosController = async (req,res) => {
    const {id}= req.params
    try {
        const usos = await UsosModels.updateUsosModel(id, req.body)
        res.status(200).json(usos)
    } catch (error) {
        res.status(500).json(error)
    }

}

//Eliminar 
const deleteUsosController = async (req,res) => {
    const {id} =req.params

    try {
        await UsosModels.deleteUsosModel(id)
        res.status(200).json({msg: "Usos de agua eliminado"})
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getAllUsosController,
    createUsosController,
    updateUsosController,
    deleteUsosController
}
