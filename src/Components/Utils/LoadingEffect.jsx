
const LoadingEffect = () => {
    return (
        <div className="absolute top-0 left-0 w-full min-h-screen bg-neutral-900 bg-opacity-50 flex items-center justify-center">
            <div
                className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]"
            >
                <span
                    className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#B2E600_0deg,#B2E600_180deg,transparent_180deg,transparent_360deg)]"
                >
                </span>
            </div>
        </div>


    )
}

export default LoadingEffect