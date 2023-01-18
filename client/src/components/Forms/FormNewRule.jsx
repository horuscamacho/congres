import ModalConfirmation from "../Modals/ModalConfirmation";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {crearNormaControl} from "./schemas/norma";
import {createRule} from "../../features/normas/crearNormaSlice";


export default function FormNewRule() {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);


    const submitNewRule = () => {
        const data = dispatch(createRule(values))
        console.log(data)
        setOpenModal(false)
        resetForm()
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    const text = "Estás a punto de crear una nueva norma, si revisaste correctamente el nombre presiona Crear Norma, de lo contrario haz click en cancelar"
    const title = "Crear norma"

    const notValidated = "block w-full appearance-none rounded-md border border-red-900 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"


    const {values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            name: "",
            publicacion: ""
        },
        validationSchema: crearNormaControl
    })

    console.log(errors)

    return (
        <form className="space-y-8 divide-y divide-gray-200"
              onSubmit={handleSubmit}
        >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Crear nueva norma</h3>
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


