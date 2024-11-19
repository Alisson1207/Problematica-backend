import {Router} from 'express'
import {getAllUserController,createUserController,updateUserController,deleteUserController} from '../controllers/user_controller.js'
const UserRouter =Router()
//Obtener todo
UserRouter.get('/User', getAllUserController)
//Crear
UserRouter.post('/User', createUserController)
//Actualizar 
UserRouter.put('/User',updateUserController)
//Eliminar 
UserRouter.delete('/User', deleteUserController)

export default UserRouter