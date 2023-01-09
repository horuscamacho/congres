import axios from "axios";

export const getCodes = async () => {
    try {
        const response  =  await axios.get("http://localhost:3001")
        const codigos = response.data
        return  codigos
    } catch (error) {
        console.log(error.message)
    }
}