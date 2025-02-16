import location from "../../assets/icons8-location-48.png"
import email from "../../assets/icons8-email-48.png"
import contact from "../../assets/icons8-contact-48.png"
import drawing from "../../assets/icons8-drawing-48.png"

const Hobbies = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="flex items-center">
                <div className="w-7 h-7 relative">
                    <div className=" flex-shrink-0 z-20 w-7 h-7 flex items-center justify-center mt-2 mr-3">
                        <img src={location} alt="location" />
                    </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-2">
                    <h2 className="text-lg font-semibold leading-4 text-neutral-200">Address</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-neutral-500">27B Grassfield Lumley</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-7 h-7 relative">
                    <div className=" flex-shrink-0 z-20 w-7 h-7 flex items-center justify-center mt-2 mr-3">
                        <img src={email} alt="email" />
                    </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-2">
                    <h2 className="text-lg font-semibold leading-4 text-neutral-200">Email</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-neutral-500">kanujosephmelvin@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-7 h-7 relative">
                    <div className=" flex-shrink-0 z-20 w-7 h-7 flex items-center justify-center mt-2 mr-3">
                        <img src={contact} alt="contact" />
                    </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-2">
                    <h2 className="text-lg font-semibold leading-4 text-neutral-200">Tel</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-neutral-500">+23234024642</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-7 h-7 relative">
                    <div className=" flex-shrink-0 z-20 w-7 h-7 flex items-center justify-center mt-2 mr-3">
                        <img src={drawing} alt="hobbies" />
                    </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-2">
                    <h2 className="text-lg font-semibold leading-4 text-neutral-200">Hobbies</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-neutral-500">Music, Movies, CTF.</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies