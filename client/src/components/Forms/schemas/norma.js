import * as yup from 'yup'

export const crearNormaControl = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    publicacion: yup.string().min(10, "El Formato correcto es '29/10/2023'").max(10, "El Formato correcto es '29/10/2023'").required("Este campo es obligatorio")
})
