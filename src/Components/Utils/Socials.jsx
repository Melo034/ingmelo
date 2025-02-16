import facebook from "../../assets/icons8-facebook-48.png"
import github from "../../assets/icons8-github-30.png"
import instagram from "../../assets/icons8-instagram-48.png"
import x from "../../assets/icons8-twitterx-50.png"
import whatsapp from "../../assets/icons8-whatsapp-48.png"
import linkedin from "../../assets/icons8-linkedin-48.png"
import discord from "../../assets/icons8-discord-48.png"
import { NavLink } from "react-router-dom"


const Socials = () => {
    return (
        <div>
            <button type="button">
                < NavLink to="https://www.facebook.com/melvin.kanu.140?mibextid=LQQJ4d" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={facebook} alt="" className="w-10 h-10" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        Facebook
                    </span>
                </ NavLink>
            </button>

            <button type="button">
                < NavLink to="https://github.com/Melo034" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={github} alt="" className="rounded-full w-9 h-9 bg-white" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        GitHub
                    </span>
                </NavLink>
            </button>

            <button type="button">
                < NavLink to="https://www.instagram.com/melvinllllll" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={instagram} alt="" className="w-10 h-10" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        Instagram
                    </span>
                </ NavLink>
            </button>

            <button type="button" className="">
                < NavLink to="https://x.com/melsougly" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={x} alt="" className="rounded-lg w-9 h-9 bg-white" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        X
                    </span>
                </ NavLink>
            </button>
            <button type="button">
                < NavLink to="https://wa.me/23234024642" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={whatsapp} alt="" className="w-10 h-10" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        Whatsapp
                    </span>
                </ NavLink>
            </button>
            <button type="button">
                < NavLink to="https://www.linkedin.com/in/joseph-melvin-kanu-997b84210" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={linkedin} alt="" className="w-10 h-10" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        Linkedln
                    </span>
                </ NavLink>
            </button>
            <button type="button">
                < NavLink to="" className="group flex justify-center rounded-md drop-shadow-xl from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <img src={discord} alt="" className="w-10 h-10" />
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                        Discord
                    </span>
                </ NavLink>
            </button>
        </div>
    )
}

export default Socials