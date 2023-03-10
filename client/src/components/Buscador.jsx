import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import Button from "./Button";
import {useSelector} from "react-redux";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Buscador() {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)

    const datos = useSelector((state) => state.codigos)
    const dataSearch = (arr) => {
        if(!arr) return
        let nuevoArr = []
        let idNew = 0
        arr.map((el) => {
            el.datos.map((ele) => {
                ele.articulos.map((art) => {
                    nuevoArr.push({
                    id: art.articulo + idNew,
                        article: `artículo ${art.articulo}°`,
                        url: `/article/${el.codigo === "Código Penal para el Estado de Hidalgo" ? "penal" : "civil" }/${art.articulo}`,
                        materia: `${el.codigo === "Código Penal para el Estado de Hidalgo" ? "Código Penal para el Estado de Hidalgo" : "Código Civil para el Estado de Hidalgo"}`
                    })
                    idNew++
                })
            })
        })
        return nuevoArr
    }

    const articles = dataSearch(datos.value)


    const filteredPeople =
        query === ''
            ? []
            : articles.filter((article) => {
                return article.article.toLowerCase().includes(query.toLowerCase())
            })

    const handleOnClick = (e) => {
        e.preventDefault()
        setOpen(true)
    }


    if(open === true) {return (
        <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <Combobox onChange={(article) => (window.location = article.url)}>
                                <Combobox.Input
                                    className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                    placeholder="Buscar..."
                                    onChange={(event) => setQuery(event.target.value)}
                                />

                                {filteredPeople.length > 0 && (
                                    <Combobox.Options
                                        static
                                        className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                                    >
                                        {filteredPeople.map((article) => (
                                            <Combobox.Option
                                                key={article.id}
                                                value={article}
                                                className={({ active }) =>
                                                    classNames(
                                                        'cursor-default select-none rounded-md px-4 py-2',
                                                        active && 'bg-red-900 text-white'
                                                    )
                                                }
                                            >
                                                {article.article}   <p>{article.materia}</p>
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}

                                {query !== '' && filteredPeople.length === 0 && (
                                    <div className="py-14 px-4 text-center sm:px-14">
                                        <p className="mt-4 text-sm text-gray-900">No se encontró ninguna artículo con ese texto.</p>
                                    </div>
                                )}
                            </Combobox>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )} else {
        return (
            <Button handleOnClick = {handleOnClick} textButton = {"Buscar"} />
        )
    }
}
