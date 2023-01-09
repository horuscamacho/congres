import {Fragment,useEffect, useState} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../features/codes/codeSelectedSlice";

const people = [
    { id: 1, name: 'Constitución Política del Estado de Hidalgo' },
    { id: 2, name: 'Código Civil para el Estado de Hidalgo' },
    { id: 3, name: 'Código de Procedimientos Civiles Para el Estado de Hidalgo' },
    { id: 4, name: '-' },

]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    const dispatch = useDispatch()
    const allCodes = useSelector((state) => state.codigos)
    const [selected, setSelected] = useState(people[3])

    const functionRan = (id) => {
        if(id === 1) {
            dispatch(getData("codigopenal"))
        }
        if(id === 2) {
            dispatch(getData("codigocivil"))
        }
    }

    const getMenu = (arr) => {
        if(arr){
            const data = []
            let count = 1
            console.log(arr)
            arr.map(el => {
                data.push({
                    id: count,
                    name: el.codigo
                })
                count = count +1
            })
            return data
        } else return

    }
    const list = allCodes ? getMenu(allCodes.value ? allCodes.value : null) : null




    useEffect(() => {
        functionRan(selected.id)
    }, [selected]);







    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>

                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900 sm:text-sm">
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
                                                active ? 'text-white bg-red-900' : 'text-gray-900',
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
