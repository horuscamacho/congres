export default function Button(props) {
    const {handleOnClick, textButton} = props

    return (

        <div className="pt-14">

            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-red-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => handleOnClick(e)}
            >
                {!textButton ? "Editar" : textButton }
            </button>
        </div>
    )
}
