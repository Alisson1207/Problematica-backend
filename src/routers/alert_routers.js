import {Router} from 'express'
import {getAllAlertController,createAlertController,updateAlertController,deleteAlertController} from '../controllers/alert_controller.js'

const AlertRouter=Router()

AlertRouter.get('/Alerta', getAllAlertController)

AlertRouter.post('/Alerta', createAlertController)

AlertRouter.put('/Alerta', updateAlertController)

AlertRouter.delete('/Alerta', deleteAlertController)


export default AlertRouter


