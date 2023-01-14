import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Form from "./Form";
import Button from "./Button";
import Modal from "./ModalSeguridad";



export default function LawEdit() {
    const dispatch = useDispatch()
    const dat = useSelector((state) => state.articulo)
    const articulo = dat.value ? dat.value[0] : null
    const [editable, setEditable] = useState(false);




    const handleOnClick = (e) => {
        e.preventDefault()
        editable === false ? setEditable(true) : setEditable(false)
    }




    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="block text-center text-lg font-semibold text-black">Código { null }</span>
                        <span className="block text-center text-lg font-semibold text-black">Última Modificación{ null }</span>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Artículo { articulo?.articulo }°
            </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-black">
                        {articulo?.contenido }
                    </p>
                    {editable === false ? <Button handleOnClick = {handleOnClick} /> : <Form handleOnClick = {handleOnClick} articulo ={articulo} /> }
                </div>

            </div>
        </div>
    )
}
