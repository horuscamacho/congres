import {useDispatch, useSelector} from "react-redux";

import {getArticulo} from "../features/articulos/articuloSlice";
import {useNavigate} from "react-router-dom";




const getArticles = (arr) => {
    const data = []
    if(!arr) return
    arr.map(el => {
        data.push({
            id: el.id,
            articulo: el.articulo,
            publicacion: el.publicacion,
            texto: el.contenido
        })
    })
    return data
}

export default function LawList() {
    const data = useSelector((state) => state.articulos)
    const codigo = data.value ? data.value : null
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(getArticulo())
    }





    const elements = codigo ? getArticles(codigo) : null


    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">{codigo ? codigo.codigo : null}</h1>

                </div>

            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        Artículo
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Publicación
                                    </th>

                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                       Texto
                                    </th>

                                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {elements?.map((element) => (
                                    <tr key={element.id}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                            {element.articulo}°
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-left text-sm font-medium text-gray-900">
                                            {element.publicacion}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-left text-sm text-gray-900">{element.texto.slice(0, 90)}...</td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                                            <a  className="text-black hover:text-congresogold hover:cursor-pointer" onClick={(e) => {
                                            e.preventDefault()
                                                dispatch(getArticulo(element.id))
                                                navigate(`/article/${element.articulo}`)
                                            }
                                            }>
                                                Editar
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
