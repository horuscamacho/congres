export default function FormNewArticle({normas}) {
    const titulos = normas.value ? normas.value : null


    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-bold font-medium leading-6 text-gray-900">Crear artículo</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Este formulario es para crear un artículo nuevo.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="norma" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Normatividad
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="norma"
                                    name="norma"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                >
                                    <option></option>
                                    {titulos.map((el) => <option key={el.id} value={el.name}>{el.name}</option>)}
                                </select>
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="articulo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="articulo"
                                    name="articulo"
                                    id="articulo"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                />
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="texto" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Texto del Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                    id="texto"
                    name="texto"
                    rows={6}
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
