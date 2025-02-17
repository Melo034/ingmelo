import email from "../assets/icons8-email-48.png"
const Newsletter = () => {
    return (
        <div>
            <section className="max-w-xl my-7 mx-auto px-4 md:px-8">
                <div className="space-y-3 text-center">
                    <img src={email} alt="email icon" className="h-10 w-10
             mx-auto text-gray-300"/>
                    <h3 className="text-3xl text-neutral-200 font-bold">
                        Subscribe to My newsletter
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                    </p>
                </div>
                <div className="mt-6">
                    <form className="items-center justify-center sm:flex">
                        <input type="email" placeholder="Enter your email" className="text-gray-500 w-full p-3 rounded-md outline-none border border-green" />
                        <button className="w-full mt-3 relative px-8 py-2 cursor-pointer  bg-neutral-200 isolation-auto z-10 border-2 border-green
                      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-neutral-700
                      before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#A12347] before:-z-10  
                      before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex 
                      items-center justify-center text-sm font-semibold text-neutral-700
                      rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none sm:mt-0 sm:ml-3 sm:w-auto">
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-neutral-500">
                        No spam ever, I care about the protection of your data.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Newsletter