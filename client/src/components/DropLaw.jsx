import {Fragment,useEffect, useState} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector} from "react-redux";
import {getArticulos} from "../features/articulos/articulosSlice";






function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    const dispatch = useDispatch()
    const allCodes = useSelector((state) => state.codigos)
    const [selected, setSelected] = useState({id: "1", name: "-"})






    const elementsList = (arr) => {
        if(!arr) return
        const data = []
        arr.map((el) => {
            data.push({
                id: el.id,
                name: el.name
            })
        })
        return data
    }

    const list = allCodes ? elementsList(allCodes.value ? allCodes.value : null) : null





    useEffect(() => {
        dispatch(getArticulos(selected.id))
    }, [selected]);







    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>

                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-congresogold focus:outline-none focus:ring-1 focus:ring-congresogold sm:text-sm">
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
                                {list?.map((ele) => (
                                    <Listbox.Option
                                        key={ele.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-congresogrisfuerte' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={ele}
                                    >
                                        {({ selected, active }) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {ele.name}
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
