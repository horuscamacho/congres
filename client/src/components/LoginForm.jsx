import logo from '../assets/SELLO_LXV.png'
import {useNavigate} from "react-router-dom";
export default function LoginForm() {
    const navigate = useNavigate()
    const handleOnClick = (e) => {
        e.preventDefault()
        navigate("/home")
    }

    return (
        <>

            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 lg:mb-32 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Inicia Sesión</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Usuario
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
                                    />
                                </div>
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
                                        autoComplete="current-password"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
                                    />
                                </div>
                            </div>


                            <div>
                                <button
                                    className="flex w-full justify-center rounded-md border border-transparent bg-red-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    onClick={(e) => {handleOnClick(e)}}
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
