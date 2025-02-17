import facebook from "../../assets/icons8-facebook-48.png";
import github from "../../assets/icons8-github-30.png";
import instagram from "../../assets/icons8-instagram-48.png";
import x from "../../assets/icons8-twitterx-50.png";
import whatsapp from "../../assets/icons8-whatsapp-48.png";
import linkedin from "../../assets/icons8-linkedin-48.png";
import discord from "../../assets/icons8-discord-48.png";
import melo from "../../assets/melo.jpg";
import { NavLink } from "react-router-dom";

const Media = () => {
    return (
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <NavLink to="https://www.facebook.com/melvin.kanu.140?mibextid=LQQJ4d">
                <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={facebook} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink href="https://github.com/Melo034">
                <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={github} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink to="">
                <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={discord} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink to="https://wa.me/23234024642">
                <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={whatsapp} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink to="https://www.instagram.com/melvinllllll">
                <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={instagram} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink to="https://x.com/melsougly">
                <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={x} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/joseph-melvin-kanu-997b84210">
                <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={linkedin} alt="" className="w-full h-full" />
                    </span>
                </button>
            </NavLink>
            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                <div className="w-full bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                    <span className="w-36 h-36 inline-block">
                        <img src={melo} alt="" className="w-full h-full border-2 rounded-full" />
                    </span>
                </div>
            </button>
        </div>
    )
}

export default Media