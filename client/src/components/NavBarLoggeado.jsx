import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/SELLO_LXV.png'


export default function NavBarLoggeado(props) {

    const {setAccion, accion} = props

    const handleOnclick = (e) =>{
        e.preventDefault()
        setAccion(e.target.value)
    }


    const classNoCurrent = "rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white "
    const currentClass = "rounded-md px-3 py-2 bg-congresogold text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
    const classNotCurrentMob = 'block w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
    const classCurrentMob = 'block w-full rounded-md px-3 py-2 bg-congresogold text-base font-medium text-black hover:bg-gray-700 hover:text-white'
    const options = [{id: "1", value : "usuario", texto: "Crear Usuario"}, {id: "2", value : "folios", texto: "Revisar Folios"}, {id: "3", value : "reportes", texto: "Reportes"}, {id: "4", value: "uariosexistentes", texto: 'Usuarios'} ]




    return (




        <Disclosure as="nav" className="bg-congresogrisfuerte">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center ">
                                <div className="flex-shrink-0">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="Congreso del Estado de Hidalgo"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="Congreso del Estado de Hidalgo"

                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {options.map((el) => {
                                            return (
                                                <button
                                                value={el.value}
                                                key={el.id}
                                                className={accion === el.value ? currentClass : classNoCurrent}
                                                onClick={(e) => handleOnclick(e)}
                                                >
                                                    {el.texto}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Abrir Menú</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            {options.map((el) => {
                                return (
                                    <button
                                        value={el.value}
                                        key={el.id}
                                        className={accion === el.value ? classCurrentMob : classNotCurrentMob}
                                        onClick={(e) => handleOnclick(e)}
                                    >
                                        {el.texto}
                                    </button>
                                )
                            })}
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
