export default function Button(props) {
    const {handleOnClick, textButton} = props

    return (

        <div className="pt-14">

            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-congresogrisfuerte px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-congresogold focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                onClick={(e) => handleOnClick(e)}
            >
                {!textButton ? "Actualizar" : textButton }
            </button>
        </div>
    )
}
