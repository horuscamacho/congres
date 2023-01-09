import {useState} from "react";

export default function Form(props) {
    const {handleOnClick, data} = props
    const info = data.value[0]
    console.log("Este es el props ", info)

    return (
        <form className="space-y-8 divide-y divide-gray-200 pt-28">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Modificar artículo</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Aségurate de llenar correctamente los espacios.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Texto del Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block h-60 w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm"
                    defaultValue={`${info.articulo.texto}`}

                />
                                <p className="mt-2 text-sm text-gray-500">Así quedará el contenido del artículo {info.articulo.articulo}°</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Tipo de modificación</h3>
                    </div>
                    <div className="space-y-6 sm:space-y-5">

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tipo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:max-w-xs sm:text-sm"
                                >
                                    <option>Actualización</option>
                                    <option>Adhesión</option>
                                    <option>Derogación</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Grupo Parlamentario
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:max-w-xs sm:text-sm"
                                >
                                    <option>PRI</option>
                                    <option>PAN</option>
                                    <option>PRD</option>
                                    <option>MORENA</option>
                                    <option>PT</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        onClick={(e)=> {handleOnClick(e)} }
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Guardar cambio
                    </button>
                </div>
            </div>
        </form>
    )
}
