import {Fragment, useEffect, useState} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector} from "react-redux";
import {traerArticulos} from "../features/articulos/traerArticulosSlice";
import {setNormaSelected} from "../features/normas/normaActivaSlice"



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropLaw() {
    const listElements = [{id: 1, name: "-"}]
    const [selected, setSelected] = useState(listElements[0])
    const datos = useSelector((state) => state.titulos_normas)


    const elementosLista = (arr) => {
        arr.map((el) => {
            return (
                listElements.push({
                    id: el.id,
                    name: el.name
                })
            )
        })
        return listElements
    }



    const dispatch = useDispatch()

    useEffect(() => {

            const settingStateArticulos = (obj) => {
            if(obj.id === 1) return
            dispatch(traerArticulos(obj.id))
            dispatch(setNormaSelected(obj.name))
        }
            settingStateArticulos(selected)
    },[selected, dispatch]);


    const normas = datos.value ? elementosLista(datos.value) : null

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">Selecciona una normatividad del Estado de Hidalgo</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {normas?.map((norma) => (
                                    <Listbox.Option
                                        key={norma.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={norma}
                                    >
                                        {({ selected, active }) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {norma.name}
                        </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
