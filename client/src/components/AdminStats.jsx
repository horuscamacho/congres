import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStats} from "../features/stats/traerEstadisticasSlice";



export default function AdminStats() {
    const dispatch = useDispatch()
    const estadisticas = useSelector((state) => state.traerstats)



    useEffect(() => {
        return () => {
            dispatch(getStats())
        };
    }, []);




    return (

        <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Estadísticas</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {estadisticas.value?.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
