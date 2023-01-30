import * as yup from 'yup'

export const createArticleSchema = yup.object().shape({
    normaId: yup.string().required("Este campo es obligatorio"),
    articulo: yup.string().required('Este campo es obligatorio'),
    contenido: yup.string().required('Este campo es obligatorio')
})