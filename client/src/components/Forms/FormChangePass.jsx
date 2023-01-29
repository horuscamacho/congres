import { LockClosedIcon } from '@heroicons/react/20/solid'
import logo from '../../assets/logo.png'
import {passChange} from "../../features/usuarios/changePasswordSlice";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik'
import {updatePass} from "./schemas/usuario";
export default function FormChangePass() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.usuario)

    const {values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: {
            contrasena: "",
            confirmar: ""
        },
        validationSchema: updatePass
    })


    const handleSubmitt = (e) => {
        e.preventDefault()
        const token = user.value.token
        const objt ={...values, token}
        dispatch(passChange(objt))
    }

    const notValidated = "block w-full appearance-none rounded-md border border-red-900 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"


    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-16 w-auto"
                            src={logo}
                            alt="Congreso del Estado de Hidalgo."
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Por seguridad, es necesario que cambies tu contraseña.
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Este mensaje continuará apareciendo cuando inicies sesión hasta que realices tu actualización de contraseña.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6"
                    onSubmit={handleSubmit}
                    >
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className="mb-4">
                                <label htmlFor="contrasena" className="sr-only">
                                    Contraseña
                                </label>
                                <input
                                    id="contrasena"
                                    name="contrasena"
                                    type="password"
                                    value={values.contrasena}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.contrasena && touched.contrasena ? notValidated : validated}
                                    placeholder="Nueva contraseña"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmar" className="sr-only">
                                    Confirmar
                                </label>
                                <input
                                    id="confirmar"
                                    name="confirmar"
                                    type="password"
                                    value={values.confirmar}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.confirmar && touched.confirmar ? notValidated : validated}
                                    placeholder="Confirmar nueva contraseña"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-congresogold px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-congresogrisfuerte focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                onClick={(e) => handleSubmitt(e)}
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                                Actualizar contraseña
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
