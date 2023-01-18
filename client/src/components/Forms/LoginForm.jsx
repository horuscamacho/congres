import logo from '../../assets/SELLO_LXV.png'
import {useFormik} from 'formik'
import {loginSchema} from "./schemas/usuario";
export default function LoginForm() {

    const onSubmit = (values, actions) => {
        console.log("Submitted")
        actions.resetForm()
    }

    const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
        initialValues: {
            usuario: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit
    })

    const notValidated = "block w-full appearance-none rounded-md border border-red-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"

    return (


        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 lg:mb-32 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Inicio de Sesión</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
                                    Usuario
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="usuario"
                                        name="usuario"
                                        type="text"
                                        value={values.usuario}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.usuario && touched.usuario ? notValidated : validated}
                                    />
                                </div>
                                {errors.password && touched.usuario && <p className="text-red-900 text-xs">{errors.usuario}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="current-password"
                                        required
                                        className={errors.password && touched.password ? notValidated : validated}
                                    />
                                </div>
                                {errors.password && touched.password && <p className="text-red-900 text-xs">{errors.password}</p>}
                            </div>


                            <div>
                                <button
                                    className="flex w-full justify-center rounded-md border border-transparent bg-congresogrisfuerte py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-congresogold focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                    type="submit"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
