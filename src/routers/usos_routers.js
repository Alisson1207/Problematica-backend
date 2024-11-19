import {Router} from 'express'
import {getAllUsosController, createUsosController,updateUsosController,deleteUsosController} from '../controllers/usos_controller.js'
const UsosRouter = Router()
//Obtener todo
UsosRouter.get('/Regist', getAllUsosController)
//Crear
UsosRouter.post('/Regist', createUsosController)
//Actualizar 
UsosRouter.put('/Regist',updateUsosController)
//Eliminar 
UsosRouter.delete('/Regist', deleteUsosController)


export default UsosRouter

