import logo from '../assets/logo.png'
import {Fragment, useEffect, useState} from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {clearStore} from "../features/usuarios/loginUsuarioSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import FormEditArticle from "../components/Forms/FormEditArticle";
import FormEditHistory from "../components/Forms/FormEditHistory";
import FormNewArticle from "../components/Forms/FormNewArticle";
import FormNewHistory from "../components/Forms/FormNewHistory";
import FoliosList from "../components/FoliosList";
import PassChange from "../components/Modals/PassChange";
import {titulosNormas} from "../features/normas/traerNormasSlice";


const navigation = [
    { name: 'Crear Artículo',  value: "createArt" },
    { name: 'Crear Histórico', value: "createHist" },
    { name: 'Modificar Artículo',  value: "modifArt" },
    { name: 'Modificar Histórico',  value: "modifHist" },
    { name: 'Folios', value: "invoice" },
]
const userNavigation = [
    { name: 'Cerrar Sesión' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainCompleto(props) {
    const normas = useSelector((state) => state.titulos_normas)
    const [display, setDisplay] = useState('createArt');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnClickNavigation = (e) => {
        e.preventDefault()
        setDisplay(e.target.value)
    }

    const handleCloseSession = (e) => {
        e.preventDefault()
        dispatch(clearStore())
        navigate('/')
    }

    useEffect(() => {
        dispatch(titulosNormas())
    }, []);


    return (
        <>
            <div className="min-h-full">
                <Popover as="header" className="bg-congresogrisfuerte pb-24">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                                    {/* Logo */}
                                    <div className="absolute lg:left-0 flex-shrink-0 lg:static mt-10 lg:mt-2 ">
                                        <a href="/">
                                            <span className="sr-only">Congreso del Estado de Hidalgo</span>
                                            <img
                                                className="h-16 w-auto "
                                                src={logo}
                                                alt="Congreso del Estado de Hidalgo"
                                            />
                                        </a>
                                    </div>

                                    {/* Sección derecha en escritorio */}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                        {/* Dropdwon del perfil */}
                                        <Menu as="div" className="relative ml-4 flex-shrink-0">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <img className="h-8 w-8 rounded-full" src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <button
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 w-full' : '',
                                                                        'block w-full px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                    onClick={(e) => handleCloseSession(e)}
                                                                >
                                                                    {item.name}
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    {/* Botón Menpu */}
                                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                        {/* Botón menú móvil */}
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-black hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Abrir menú</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                                    <div className="grid grid-cols-3 items-center gap-8">
                                        <div className="col-span-2">
                                            <nav className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <button
                                                        key={item.name}
                                                        value={item.value}
                                                        onClick={(e) => handleOnClickNavigation(e)}
                                                        className={classNames(
                                                            display === item.value ? 'text-congresoGrisFuerte underline' : 'text-congresoGrisFuerte',
                                                            'text-md font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))}
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <Transition.Root as={Fragment}>
                                <div className="lg:hidden">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel
                                            focus
                                            className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                                        >
                                            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="pt-3 pb-2">
                                                    <div className="flex items-center justify-between px-4">
                                                        <div>
                                                            <img
                                                                className="h-8 w-auto"
                                                                src={logo}
                                                                alt="Congreso del Estado de Hidalgo"
                                                            />
                                                        </div>
                                                        <div className="-mr-2">
                                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-congresogold">
                                                                {userNavigation.map((el) => {
                                                                    return (
                                                                        <button
                                                                            className="sr-only"
                                                                            key={el.name}
                                                                            onClick={(e) => handleCloseSession(e)}
                                                                        >
                                                                            {el.name}
                                                                        </button>
                                                                    )
                                                                })}

                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        {navigation.map((el) => {
                                                            return (
                                                                <button
                                                                    key={el.name}
                                                                    value={el.value}
                                                                    onClick={(e)=> handleOnClickNavigation(e)}
                                                                    className="block rounded-md w-full px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                                >
                                                                    {el.name}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="pt-4 pb-2">
                                                    <div className="flex items-center px-5">


                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        {userNavigation.map((item) => (
                                                            <button
                                                                key={item.name}
                                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                                onClick={(e) => handleCloseSession(e)}
                                                            >
                                                                {item.name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition.Child>
                                </div>
                            </Transition.Root>
                        </>
                    )}
                </Popover>
                <main className="-mt-24 pb-8">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="sr-only">Título de la página</h1>
                        {/* Grid Main de 3 columnas */}
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                            {/* Columna izquierda */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2 mt-8">
                                <section aria-labelledby="section-1-title">
                                    <h2 className="sr-only" id="section-1-title">
                                        Título de la sección
                                    </h2>
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">{
                                            display === "modifArt" ? <FormEditArticle /> : display === "modifHist" ? <FormEditHistory /> : display === "createArt" ? <FormNewArticle normas={normas} /> : display === "createHist" ? <FormNewHistory /> : display === "invoice" ? <FoliosList /> : null
                                        }</div>
                                    </div>
                                </section>
                            </div>

                            {/* Columna derecha */}
                            <div className="grid grid-cols-1 gap-4 mt-8">
                                <section aria-labelledby="section-2-title">
                                    <h2 className="sr-only" id="section-2-title">
                                        Título de la Sección
                                    </h2>
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">{
                                            //AQUI VA EL CONTENIDO
                                        }</div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <PassChange />
        </>
    )
}
