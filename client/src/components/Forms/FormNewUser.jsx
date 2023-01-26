import ModalConfirmation from "../Modals/ModalConfirmation";
import {useEffect, useState} from "react";
import {useFormik} from 'formik'
import {crearUsuarioValidacion} from "./schemas/usuario";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from '../../features/usuarios/createUsuarioSlice'
import Succesfull from "../Alerts/Succesfull";
import Unsuccessfull from "../Alerts/Unsuccessfull"

export default function FormNewUser() {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    const createUserState = useSelector((state) => state.crearUsuario)
    const usuario = useSelector((state) => state.usuario)
    const id = usuario.value ? usuario.value.token : null
    const usuarioCreado = createUserState.value ? createUserState.value : null
    const text = "Estás a punto de crear un nuevo usuario, si revisaste correctamente los campos presiona Crear usuario de lo contrario Cancela e inténtalo nuevamente"
    const title = "Crear usuario"

    const closeAlert = () => {
        setTimeout(()=> {
            setAlert(false)
        }, 3500)
    }

    const alertMessage = alert && success ? <Succesfull text={usuarioCreado.message} setAlert={setAlert} closeAlert={closeAlert}/>  :  alert && !success ? <Unsuccessfull text={usuarioCreado.message} setAlert={setAlert} closeAlert={closeAlert} /> : null

        useEffect(() => {

    }, [alert]);




    useEffect(() => {
        if(usuarioCreado && usuarioCreado.success){
            setAlert(true)
            setSuccess(true)
        } else if(usuarioCreado && !usuarioCreado.success){
            setAlert(true)
            setSuccess(false)
        }
    }, [setAlert, setSuccess, usuarioCreado]);



    const handleOnClick = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    const submitNewUser =  () => {
        dispatch(createUser(values))
        setOpenModal(false)
        resetForm()
    }

    const {values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            usuario: "",
            nombre: "",
            apellido: "",
            permisos: ""
        },
        validationSchema: crearUsuarioValidacion
    })
    const notValidated = "block w-full appearance-none rounded-md border border-red-900 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"


    return (
        <form className="space-y-8 divide-y divide-gray-200 px-10 mb-20 "
        onSubmit={handleSubmit}
        >
            {alertMessage}
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Crear un nuevo usuario</h3>
                    <p className="mt-1  text-sm text-gray-500">
                        La contraseña por default será <span className="font-extrabold">"123456"</span>, una vez que inicie sesión el nuevo usuario, será necesario que establezca una nueva contraseña..
                    </p>
                    <div className="space-y-6 sm:space-y-5">

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre de Usuario
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="usuario"
                                    id="usuario"
                                    value={values.usuario}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.usuario && touched.usuario ? notValidated : validated}

                                />
                                {errors.usuario && touched.usuario && <p className="text-red-900 text-xs">{errors.usuario}</p>}
                            </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre/s
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.nombre && touched.nombre ? notValidated : validated}
                                />
                                {errors.nombre && touched.nombre && <p className="text-red-900 text-xs">{errors.nombre}</p>}
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Apellido
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    value={values.apellido}onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.apellido && touched.apellido ? notValidated : validated}
                                />
                                {errors.apellido && touched.apellido && <p className="text-red-900 text-xs">{errors.apellido}</p>}
                            </div>
                        </div>



                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="permisos" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tipo de cuenta
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="permisos"
                                    name="permisos"
                                    value={values.permisos}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.permisos && touched.permisos ? notValidated : validated}
                                >
                                    <option></option>
                                    <option>Completo</option>
                                    <option>Historial</option>
                                </select>
                                {errors.permisos && touched.permisos && <p className="text-red-900 text-xs">{errors.permisos}</p>}
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
                        disabled={errors.usuario || errors.permisos || errors.nombre || errors.apellido || !values.usuario || !values.apellido || !values.nombre || !values.permisos ? true : false }
                    >
                        Crear Usuario
                    </button>
                </div>
            </div>

            {openModal === true ? <ModalConfirmation values={values} text={text} title={title} openModal={openModal} setOpenModal={setOpenModal} resetForm={resetForm} submit={submitNewUser}/> : null}
        </form>
    )
}
