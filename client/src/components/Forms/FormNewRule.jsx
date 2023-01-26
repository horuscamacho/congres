import ModalConfirmation from "../Modals/ModalConfirmation";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {crearNormaControl} from "./schemas/norma";
import {createRule} from "../../features/normas/crearNormaSlice";
import Succesfull from "../Alerts/Succesfull";
import Unsuccessfull from "../Alerts/Unsuccessfull";



export default function FormNewRule() {
    const normaCreada = useSelector((state) => state.crearNorma)
    const norma = normaCreada.value ? normaCreada.value : null
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);


    const closeAlert = () => {
        setTimeout(()=> {
            setAlert(false)
        }, 3500)
    }

    const alertMessage = alert && success ? <Succesfull text={norma.message} setAlert={setAlert} closeAlert={closeAlert}/>  :  alert && !success ? <Unsuccessfull text={norma.message} setAlert={setAlert} closeAlert={closeAlert} /> : null

    const submitNewRule = () => {
        dispatch(createRule(values))
        setOpenModal(false)
        resetForm()
        setAlert(true)
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }


    useEffect(() => {
        if(norma && norma.success){
            setAlert(true)
            setSuccess(true)
        } else if(norma && !norma.success){
            setAlert(true)
            setSuccess(false)
        }
    }, [setAlert, setSuccess, normaCreada]);

    const text = "Estás a punto de crear una nueva norma, si revisaste correctamente el nombre presiona Crear Norma, de lo contrario haz click en cancelar"
    const title = "Crear norma"

   // const notValidated = "block w-full appearance-none rounded-md border border-red-900 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"


    const {values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            name: "",
            publicacion: ""
        },
        validationSchema: crearNormaControl
    })


    return (
        <form className="space-y-8 divide-y divide-gray-200"
              onSubmit={handleSubmit}
        >
            {alertMessage}
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Crear nueva norma</h3>
                        <p className="mt-1  text-sm text-gray-500">
                            Solo el usuario admin podrá genera nuevas normatividades.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Norma
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <div className="flex max-w-lg rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={validated}
                                    />
                                </div>
                                {errors.name && touched.name && <p className="text-red-900 text-xs">{errors.name}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="publicacion" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Publicación
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <div className="flex max-w-lg rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="publicacion"
                                        id="publicacion"
                                        value={values.publicacion}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={validated}
                                    />
                                </div>
                                {errors.publicacion && touched.publicacion && <p className="text-red-900 text-xs">{errors.publicacion}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="submit"
                        onClick={(e) => handleOnClick(e)}
                        disabled={errors.name || errors.publicacion || !values.name || !values.publicacion ? true : false }
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-congresoGrisFuerte py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-congresgrissoft hover:text-congresoGrisFuerte focus:outline-none focus:ring-2 focus:ring-congresogold focus:ring-offset-2"
                    >
                        Crear norma
                    </button>
                </div>
            </div>
            {openModal === true ? <ModalConfirmation values={values} text={text} title={title} openModal={openModal} setOpenModal={setOpenModal} resetForm={resetForm} submit={submitNewRule}/> : null}
        </form>
    )
}


