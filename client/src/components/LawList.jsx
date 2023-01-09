import {useSelector} from "react-redux";
import {useEffect, useState} from "react";




const getArticles = (arr) => {
    const data = []
    console.log(arr)
    arr.map(el => {
        el.articulos.map(ele => {
            data.push({
                libro: el.libro,
                titulo: el.titulo,
                capitulo: el.capitulo,
                articulo: ele.articulo
            })
        })
    })
    return data
}

export default function LawList() {
    const [code, setCode] = useState("");
    const data = useSelector((state) => state.codeSelectd)
    const codigo = data.value ? data.value[0] : null

    const asignCode = (arr) => {
        const codeSelected = arr
        if(codeSelected === "Código Penal para el Estado de Hidalgo"){
            setCode("penal")
        }
        if(codeSelected === "Código Civil Para el Estado de Hidalgo"){
            setCode("civil")
        }
    }


    useEffect(() => {
        asignCode(codigo ? codigo.codigo : null)
    },[data])

    const elements = codigo ? getArticles(codigo.datos) : null

    console.log(code)

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
                                        Libro
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Título
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                       Capítulo
                                    </th>
                                    <th
                                        scope="col"
                                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Artículo
                                    </th>
                                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {elements?.map((element) => (
                                    <tr key={element.articulo}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-left text-sm text-gray-500 sm:pl-6">
                                            {element.libro}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-left text-sm font-medium text-gray-900">
                                            {element.titulo}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-left text-sm text-gray-900">{element.subtitulo}</td>
                                        <td className="whitespace-nowrap px-2 py-2 pl-8 text-left text-sm text-gray-500">{element.capitulo}</td>
                                        <td className="whitespace-nowrap px-2 py-2 pl-8 text-left text-sm text-gray-500">{element.articulo}°</td>
                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href={`/article/${code ? code : "codigo"}/${element.articulo}`} className="text-red-900 hover:text-red-500">
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
