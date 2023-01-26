import {useSelector} from "react-redux";
import {useState} from "react";
import Succesfull from "../Alerts/Succesfull";

export default function FormEditUser() {
    const dataUsers = useSelector((state) => state.traerUsuarios)
    const usuarios = dataUsers.value ? dataUsers.value : null
    const [selected, setSelected] = useState(null);
    const [alert, setAlert] = useState(false);
    const usuarioSelected = selected ? usuarios.filter(el => el.usuario === selected) : null
    const handleOnChange = (e) => {
        setSelected(e.target.value)
    }

    const closeAlert = () => {
        setTimeout(()=> {
            setAlert(false)
        }, 3500)
    }





    const blocked = "block w-full appearance-none rounded-md border border-black px-3 py-2 placeholder-gray-300 bg-gray-200 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    const validated = "block w-full fill-none appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"




    return (
        <form className="space-y-8 divide-y divide-gray-200 px-10 mb-20 ">
            {alert ? <Succesfull closeAlert={closeAlert} text={"Se actualizo correctamente los datos del usuario en la base de datos."} /> : null}
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                    <div>
                        <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte ">Editar usuario existente.</h3>
                        <p className="mt-1  text-sm text-gray-500">
                            Selecciona un usuario antes de continuar para poder editar, eliminar o reactivar una cuenta.
                        </p>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="usuarios" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Usuarios
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <select
                                id="usuarios"
                                name="usuarios"
                                className={validated}
                                onChange={(e) => handleOnChange(e)}
                            >
                                <option></option>
                                {usuarios?.map((el) => {
                                    return (
                                        <option key={el.id} value={el.name}>{el.usuario}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Información actual del Usuario</h3>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="nombreactual" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="nombreactual"
                                    id="nombreactual"
                                    value={usuarioSelected ? usuarioSelected[0].nombre : ""}
                                    disabled
                                    className={blocked}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="apellidoactual" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Apellido
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="apellidoactual"
                                    id="apellidoactual"
                                    value={usuarioSelected ? usuarioSelected[0].apellido : ""}
                                    disabled
                                    className={blocked}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="permisosactual" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Permisos
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="permisosactual"
                                    id="permisosactual"
                                    disabled
                                    value={usuarioSelected ? usuarioSelected[0].permisos : ""}
                                    className={blocked}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="estatusactual" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Estatus
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="estatusactual"
                                    id="estatusactual"
                                    value={usuarioSelected && usuarioSelected[0].active === false ? "Desactivada" : usuarioSelected && usuarioSelected[0].active === true ? "Activa" : ""}
                                    disabled
                                    className={blocked}
                                />
                            </div>
                        </div>

                    </div>
                </div>


                {/*AQUÍ COMIENZA EL FORMULARIO DE LOS DATOS NUEVOS*/}


                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-xl font-bold font-medium leading-6 text-congresoGrisFuerte">Información nueva del Usuario</h3>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Nombre
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    className={validated}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Apellido
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    className={validated}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="permisos" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Tipo de cuenta
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="permisos"
                                    name="permisos"
                                    className={validated}
                                >
                                    <option></option>
                                    <option>Completo</option>
                                    <option>Histórico</option>
                                </select>
                            </div>
                        </div>


                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="estatus" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Estatus
                            </label>
                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                <select
                                    id="estatus"
                                    name="estatus"
                                    className={validated}
                                >
                                    <option></option>
                                    <option>Activar</option>
                                    <option>Desactivar</option>
                                </select>
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
                        onClick={(e) => {
                         e.preventDefault()
                            setAlert(true)
                        }
                        }
                    >
                        Actualizar cambios
                    </button>
                </div>
            </div>
        </form>
    )
}
