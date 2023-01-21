import logo from '../assets/logo.png'
import {Fragment, useState} from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import FormNewUser from "../components/Forms/FormNewUser";
import Reportes from "../components/Reportes";
import FoliosList from "../components/FoliosList";
import FormNewRule from "../components/Forms/FormNewRule";
import FormEditUser from "../components/Forms/FormEditUser";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Crear usuario', href: '#',  value: "newUser" },
    { name: 'Editar usuario', href: '#',  value: "editUser" },
    { name: 'Crear normatividad', href: '#',  value: "newRule" },
    { name: 'Reportes', href: '#',  value: "reports" },
    { name: 'Folios', href: '#',  value: "invoice" },
]
const userNavigation = [
    { name: 'Cerrar Sesión', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainAdmin() {
    const [display, setDisplay] = useState('newUser');


    const handleOnClickNavigation = (e) => {
        e.preventDefault()
        setDisplay(e.target.value)
    }



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
                                        <a href="#">
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                className="h-16 w-auto "
                                                src={logo}
                                                alt="Congreso del Estado de Hidalgo"
                                            />
                                        </a>
                                    </div>

                                    {/* Right section on desktop */}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-4 flex-shrink-0">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    {/* Menu button */}
                                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                        {/* Mobile menu button */}
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
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
                                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                                alt="Your Company"
                                                            />
                                                        </div>
                                                        <div className="-mr-2">
                                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                                <span className="sr-only">Close menu</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Home
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Profile
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Resources
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Company Directory
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                        >
                                                            Openings
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pt-4 pb-2">
                                                    <div className="flex items-center px-5">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                        </div>
                                                        <div className="ml-3 min-w-0 flex-1">
                                                            <div className="truncate text-base font-medium text-gray-800">{user.name}</div>
                                                            <div className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            <span className="sr-only">View notifications</span>
                                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        {userNavigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </a>
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
                        <h1 className="sr-only">Page title</h1>
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2 mt-8">
                                <section aria-labelledby="section-1-title">
                                    <h2 className="sr-only" id="section-1-title">
                                        Section title
                                    </h2>
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">{
                                            display === "newUser" ? <FormNewUser /> : display === "invoice" ? <FoliosList /> : display === "reports" ? <Reportes /> : display === "newRule" ? <FormNewRule /> : display === "editUser" ? <FormEditUser /> : null
                                        }</div>
                                    </div>
                                </section>
                            </div>

                            {/* Right column */}
                            <div className="grid grid-cols-1 gap-4 mt-8">
                                <section aria-labelledby="section-2-title">
                                    <h2 className="sr-only" id="section-2-title">
                                        Section title
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
                <footer>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                            <span className="block sm:inline">Congreso Libre y Soberano del Esatdo de Hidalgo</span>{' '}

                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
