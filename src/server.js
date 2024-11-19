import express , {json} from 'express'
import UsosRouter from './routers/usos_routers.js'
import UserRouter from './routers/user_routers.js'
import AlertRouter from './routers/alert_routers.js'

const app= express()

app.set('port', process.env.port || 3000)
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Problematica: Gestión del desperdicio de agua en el sector de quito")
})

app.use('/api',UsosRouter)
app.use('/api', UserRouter)
app.use('/api',AlertRouter)



export default app