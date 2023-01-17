import axios from "axios";

const createUsuario = async (e) => {
    e.preventDefault()
    try {
        const nuevoUsuario = await axios.post('http://localhost:3001/crearusuario',
            {usuario: "horus", contrasena: "123456", permisos: "completo", nombre: "Horus", apellido: "Camacho"})
        return nuevoUsuario
    } catch (e) {
        return e
    }
}



export default createUsuario()