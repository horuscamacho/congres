import logo from '../assets/SELLO_LXV.png'



export default function NavBar() {
    return (
        <header className="bg-congresogrisfuerte">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <a href="/">
                            <span className="sr-only">Congreso del Estado de Hidalgo</span>
                            <img className="h-10 w-auto" src={logo} alt="" />
                        </a>

                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="7"
                            className="inline-block rounded-md border border-transparent bg-black py-2 px-4 text-base font-medium text-white  hover:bg-congresogold"
                        >
                            Cerrar Sesión
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
