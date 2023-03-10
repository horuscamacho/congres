import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    usuario: yup.string().min(5, "La longitud mínima de 6 caracteres").max(6, "La longitud máxima es de 6 caracteres").required("Este campo es requerido"),
    contrasena: yup.string().required("Este campo es requerido")
})



export const crearUsuarioValidacion = yup.object().shape({
    usuario: yup.string().min(5, "La longitud mínima de 5 caracteres").max(5, "La longitud máxima es de 5 caracteres").required("Este campo es obligatorio"),
    nombre: yup.string().required("Este campo es obligatorio."),
    apellido: yup.string().required('Este campo es obligatorio.'),
    permisos: yup.string().required('Este campo es obligatorio.')
})



export const updatePass = yup.object().shape({
    contrasena: yup.string().required('Este campo es obligatorio'),
    confirmar: yup.string().oneOf([yup.ref('contrasena'), null], 'Las contrasenas deben coincidir')
})



export const updateDataUser = yup.object().shape({
    nombre: yup.string(),
    apellido: yup.string(),
    permisos: yup.string(),
    estatus: yup.string()
})