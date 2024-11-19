const UserModels ={

    async getAllUserModel(){
        try {
            //Obtener de la base
            const peticion = await fetch('http://localhost:4000/User')
            //Convertir a formato JSON
            const usos = await peticion.json()
            return usos
        } catch (error) {
            console.log(error);
            
        }
    },
    // Metodo en el modelo de publicas/ingresar
    async createUserModel(newUser){
        // Conexion de BDD
        const url = "http://localhost:4000/User";  
        // Enviar la data a la bdd
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers: {"Content-Type": "application/json"}
        })
        // Obtener la respuesta de la base
        const data  = await peticion.json()
        // Mandar respuesta al controlador
        return data
    },

    // Actualizar
    async updateUserModel(Userid,updateUser){
        const url = `http://localhost:4000/User/${Userid}`;  
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updateUser),
            headers: {"Content-Type": "application/json"}
        })
        const data  = await peticion.json()
        return data
    },
 
    // Eliminar
   async deleteUserModel(Userid){
       // 1. Conexion de BDD
       const url = `http://localhost:4000/User/${Userid}`;  
       const peticion = await fetch(url,{
           method:"DELETE"
       })
       const data  = await peticion.json()
       return data
   }
}

export default UserModels
