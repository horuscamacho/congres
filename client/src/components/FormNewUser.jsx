import ModalConfirmation from "./ModalConfirmation";
import {useState} from "react";


export default function FormNewUser() {
    const [openModal, setOpenModal] = useState(false);
    const text = "Estás a punto de crear un nuevo usuario, si revisaste correctamente los campos presiona Crear usuario de lo contrario Cancela e inténtalo nuevamente"
    const title = "Crear usuario"

    const handleOnClick = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    return (
        <form className="space-y-8 divide-y divide-gray-200 px-10 mb-20">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Crear un nuevo usuario</h3>
                    <div className="space-y-6 sm:space-y-5">

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="user-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre de Usuario
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="user-name"
                                    id="user-name"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"

                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre/s
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Apellido
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-congresogold focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                />
                            </div>
                        </div>



                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tipo de cuenta
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-congresogold sm:max-w-xs sm:text-sm"
                                >
                                    <option>-</option>
                                    <option>Completo</option>
                                    <option>Historial</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="pt-12">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-congresogold focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        onClick={(e) => handleOnClick(e)}
                    >
                        Crear Usuario
                    </button>
                </div>
            </div>

            {openModal === true ? <ModalConfirmation text={text} title={title} openModal={openModal} setOpenModal={setOpenModal}/> : null}
        </form>
    )
}
