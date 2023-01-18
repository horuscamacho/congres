import ModalConfirmation from "../Modals/ModalConfirmation";
import {useState} from "react";
import {useFormik} from 'formik'
import {crearUsuarioValidacion, loginSchema} from "./schemas/usuario";
import {useDispatch} from "react-redux";
import {createUser} from '../../features/usuarios/createUsuarioSlice'

export default function FormNewUser() {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const text = "Estás a punto de crear un nuevo usuario, si revisaste correctamente los campos presiona Crear usuario de lo contrario Cancela e inténtalo nuevamente"
    const title = "Crear usuario"

    const handleOnClick = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    const submitNewUser = () => {
        const data = dispatch(createUser(values))
        console.log(data)
        setOpenModal(false)
        resetForm()
    }

    const {values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            user: "",
            name: "",
            lastName: "",
            account: ""
        },
        validationSchema: crearUsuarioValidacion
    })
    const notValidated = "block w-full appearance-none rounded-md border border-red-900 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"


    return (
        <form className="space-y-8 divide-y divide-gray-200 px-10 mb-20 "
        onSubmit={handleSubmit}
        >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                    <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Crear un nuevo usuario</h3>
                    <div className="space-y-6 sm:space-y-5">

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="user" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre de Usuario
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="user"
                                    id="user"
                                    value={values.user}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.user && touched.user ? notValidated : validated}

                                />
                                {errors.user && touched.user && <p className="text-red-900 text-xs">{errors.user}</p>}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre/s
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name ? notValidated : validated}
                                />
                                {errors.name && touched.name && <p className="text-red-900 text-xs">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Apellido
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={values.lastName}onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.lastName && touched.lastName ? notValidated : validated}
                                />
                                {errors.lastName && touched.lastName && <p className="text-red-900 text-xs">{errors.lastName}</p>}
                            </div>
                        </div>



                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tipo de cuenta
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="account"
                                    name="account"
                                    value={values.account}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.account && touched.account ? notValidated : validated}
                                >
                                    <option></option>
                                    <option>Completo</option>
                                    <option>Historial</option>
                                </select>
                                {errors.account && touched.account && <p className="text-red-900 text-xs">{errors.account}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12">
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-congresoGrisFuerte py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-congresgrissoft hover:text-congresoGrisFuerte focus:outline-none focus:ring-2 focus:ring-congresogold focus:ring-offset-2"
                        onClick={(e) => handleOnClick(e)}
                        disabled={errors.user || errors.account || errors.name || errors.lastName || !values.user || !values.lastName || !values.name || !values.account ? true : false }
                    >
                        Crear Usuario
                    </button>
                </div>
            </div>

            {openModal === true ? <ModalConfirmation values={values} text={text} title={title} openModal={openModal} setOpenModal={setOpenModal} resetForm={resetForm} submit={submitNewUser}/> : null}
        </form>
    )
}
