import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    usuario: yup.string().min(6, "La longitud mínima de 6 caracteres").max(6, "La longitud máxima es de 6 caracteres").required("Este campo es requerido"),
    password: yup.string().min(6, "La longitud mínima de 6 caracteres").max(6, "La longitud máxima es de 6 caracteres").required("Este campo es requerido")
})



export const crearUsuarioValidacion = yup.object().shape({
    user: yup.string().min(6, "La longitud mínima de 6 caracteres").max(6, "La longitud máxima es de 6 caracteres").required("Este campo es obligatorio"),
    name: yup.string().required("Este campo es obligatorio."),
    lastName: yup.string().required('Este campo es obligatorio.'),
    account: yup.string().required('Este campo es obligatorio.')
})



export const editUser = yup.object().shape({

})