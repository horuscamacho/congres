import img from '../assets/congreso.jpeg'

export default function ImageHome() {
    return (
        <div className="relative bg-indigo-800">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src={img}
                    alt=""
                />
                <div className="absolute inset-0  mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"></h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">

                </p>
            </div>
        </div>
    )
}
