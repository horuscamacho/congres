import logo from '../assets/logo.png'

export default function GoToLoggin() {
    return (
        <>

            <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                    <div className="flex flex-shrink-0 justify-center">
                        <a href="/" className="inline-flex">
                            <span className="sr-only">Congreso del Estado de Hidalgo</span>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-base font-semibold text-congresoGrisFuerte">404</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">No has iniciado sesión.</h1>
                            <p className="mt-2 text-base text-gray-500">Lo sentimos, es necesario estar loggeado.</p>
                            <div className="mt-6">
                                <a href="/" className="text-base font-medium text-congresoGrisFuerte hover:underline">
                                    Ir a loggin
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}
