const UsosModels ={

    async getAllUsosModel(){
        try {
            //Obtener de la base
            const peticion = await fetch('http://localhost:4000/Regist')
            //Convertir a formato JSON
            const usos = await peticion.json()
            return usos
        } catch (error) {
            console.log(error);
            
        }
    },
    // Metodo en el modelo de publicas/ingresar
    async createUsosModel(newUsos){
        // Conexion de BDD
        const url = "http://localhost:4000/Regist";  
        // Enviar la data a la bdd
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newUsos),
            headers: {"Content-Type": "application/json"}
        })
        // Obtener la respuesta de la base
        const data  = await peticion.json()
        // Mandar respuesta al controlador
        return data
    },

    // Actualizar
    async updateUsosModel(Usosid,updateUsos){
        const url = `http://localhost:4000/Regist/${Usosid}`;  
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updateUsos),
            headers: {"Content-Type": "application/json"}
        })
        const data  = await peticion.json()
        return data
    },
 
    // Eliminar
   async deleteUsosModel(Usosid){
       // 1. Conexion de BDD
       const url = `http://localhost:4000/Regist/${Usosid}`;  
       const peticion = await fetch(url,{
           method:"DELETE"
       })
       const data  = await peticion.json()
       return data
   }
}

export default UsosModels
