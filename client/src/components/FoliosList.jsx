import DropFolios from "./DropFolios";

const people = [
    { name: '12878fas', title: 'horus', email: 'Código Penal para el Estado de Hidalgo', role: '17°' },

    // More people...
]

export default function FoliosList() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-12">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Folios</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Lista de folios/solicitudes para modificaciones de leyes, normas e historial con errores
                    </p>
                </div>
            </div>
            <DropFolios />
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Folio
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Usuario
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Norma
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Artículo
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Editar</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">{person.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">{person.role}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                                Cerrar<span className="sr-only">, {person.name}</span>
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
