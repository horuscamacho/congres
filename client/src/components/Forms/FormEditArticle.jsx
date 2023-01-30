//import {useSelector} from "react-redux";



import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {traerArticulos} from "../../features/articulos/traerArticulosSlice";

export default function FormEditArticle(props) {
    const dispatch = useDispatch()
    const [normaSelected, setNormaSelected] = useState(null);
    const normas = useSelector((state) => state.titulos_normas.value)
    const allArticles = useSelector((state) => state.articulos)
    const listaDeArticulos = allArticles.value ? allArticles.value : null
    const handleOnChange = (e) => {
        setNormaSelected(e.target.value)
    }

    console.log(normaSelected)

    useEffect(() => {
        if(normaSelected){
            const info = {
                norma: normaSelected
            }
            const articulos = dispatch(traerArticulos(info))
        }

    }, [normaSelected]);

    console.log(normaSelected)

    console.log(allArticles)

    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Editar artículo</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Este formulario es para modificar un artículo existente
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="norma" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Norma
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="norma"
                                    name="norma"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                    onChange={(e) => handleOnChange(e)}
                                >
                                    <option></option>
                                    {normas.map((el) => <option key={el.id} value={el.id} >{el.name}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="articulo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Artículo
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="articulo"
                                    name="articulo"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                >
                                    {listaDeArticulos && normaSelected ? listaDeArticulos.map((el) => <option key={el.id} value={el.id}>{el.articulo}</option>) : <option></option>}
                                </select>
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
                                <p className="mt-2 text-sm text-gray-500">Así quedaría el nuevo texto vigente del artículo.</p>
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
