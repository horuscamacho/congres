//import {useSelector} from "react-redux";



export default function FormNewHistory() {
   // const normas = useSelector((state) => state.titulos_normas.value)


    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-bold font-medium leading-6 text-gray-900">Crear histórico</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Este formulario es para crear un nuevo histórico sobre un artículo existente.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Normatividad
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                />
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Texto del Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:text-sm"
                    defaultValue={''}
                />
                                <p className="mt-2 text-sm text-gray-500">Este será el texto vigente del artículo que va a crearse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-congresoGrisFuerte py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-congresgrissoft hover:text-congresoGrisFuerte focus:outline-none focus:ring-2 focus:ring-congresogold focus:ring-offset-2"
                    >
                        Crear artículo
                    </button>
                </div>
            </div>
        </form>
    )
}
