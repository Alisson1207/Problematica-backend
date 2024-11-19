const AlertModels ={

    async getAllAlertModel(){
        try {
            //Obtener de la base
            const peticion = await fetch('http://localhost:4000/Alerta')
            //Convertir a formato JSON
            const alerta = await peticion.json()
            return alerta
        } catch (error) {
            console.log(error);
            
        }
    },
    // Metodo en el modelo de publicas/ingresar
    async createAlertModel(newAlert){
        // Conexion de BDD
        const url = "http://localhost:4000/Alerta";  
        // Enviar la data a la bdd
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newAlert),
            headers: {"Content-Type": "application/json"}
        })
        // Obtener la respuesta de la base
        const data  = await peticion.json()
        // Mandar respuesta al controlador
        return data
    },

    // Actualizar
    async updateAlertModel(Alertid,updateAlert){
        const url = `http://localhost:4000/Alerta/${Alertid}`;  
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updateAlert),
            headers: {"Content-Type": "application/json"}
        })
        const data  = await peticion.json()
        return data
    },
 
    // Eliminar
   async deleteAlertModel(Alertid){
       // 1. Conexion de BDD
       const url = `http://localhost:4000/Alerta/${Alertid}`;  
       const peticion = await fetch(url,{
           method:"DELETE"
       })
       const data  = await peticion.json()
       return data
   }
}

export default AlertModels
