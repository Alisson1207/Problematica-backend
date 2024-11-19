import AlertModels from '../models/alert.js'

const getAllAlertController = async(req,res) => {
    try {
        //Por ser un objeto para llamar a un metodo 
        const alert= await AlertModels.getAllAlertModel()
        res.status(200).json(alert)
    } catch (error) {
        console.log(error);
        
    }
}

// Crear 
const createAlertController = (req,res) => {
    // Creacion del objeto
    const  newAlertData={
        ...req.body
    }
    try {
        const alert = AlertModels.createAlertModel(newAlertData)
        res.status(201).json(alert)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Actualizar 
const updateAlertController = async (req,res) => {
    const {id_consumo}= req.params
    try {
        const alert = await AlertModels.updateAlertModel(id_consumo, req.body)
        res.status(200).json(alert)
    } catch (error) {
        res.status(500).json(error)
    }

}

//Eliminar 
const deleteAlertController = async (req,res) => {
    const {id_consumo} =req.params

    try {
        await AlertModels.deleteAlertModel(id_consumo)
        res.status(200).json({msg: "Alerta eliminado"})
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getAllAlertController,
    createAlertController,
    updateAlertController,
    deleteAlertController
}
