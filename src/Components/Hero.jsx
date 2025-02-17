import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Heroimage from "../assets/Hero.png";

const Hero = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="relative bg-neutral-900 bg-cover bg-no-repeat bg-center flex items-center justify-center px-4 md:px-8"
            style={{
                backgroundImage: `
                    url('${import.meta.env.BASE_URL}assets/layer-blur.svg'),
                    url('${import.meta.env.BASE_URL}assets/lines2.svg'),
                    url('${import.meta.env.BASE_URL}assets/star2.svg'),
                    url('${import.meta.env.BASE_URL}assets/star.svg')
                `,
                backgroundPosition: `
                    top left, 
                    bottom right, 
                    top 50% left 10%, 
                    top 5% right 5%
                `,
                backgroundSize: "contain, contain, 60px, 50px",
                backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat"
            }}
        >
            <section className="py-20 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-lg mx-auto text-gray-200 gap-12">
                    <div className="text-center md:text-left px-4 sm:max-w-lg md:max-w-xl space-y-5">
                        <h1 className="text-sm font-medium text-green">
                            Delivering Creative Designs That Stand Out
                        </h1>
                        <h2 className="flex justify-center md:justify-start items-center gap-2 font-extrabold text-white text-xl sm:text-2xl">Hi,</h2>
                        <h2 className="flex justify-center md:justify-start items-center gap-2 font-extrabold text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                            I&apos;m&nbsp;
                            <span className="inline-block min-w-[150px] sm:min-w-[180px] md:min-w-[200px] whitespace-nowrap">
                                <TypeAnimation
                                    sequence={[
                                        'a Network Engineer',
                                        1000,
                                        'a Frontend Developer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h2>
                        <p className="text-neutral-400 flex justify-center md:justify-start items-center gap-2 text-left">
                            passionate about creating seamless digital experiences and innovative engineering solutions. With expertise in React, IoT, and embedded systems, I bridge the gap between software and hardware to build efficient, user-friendly applications. Let&apos;s create something amazing together!
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <NavLink
                                to="/" onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll("contact");
                                }} className="inline-flex items-center justify-center py-3 px-5 font-mono text-lg font-semibold text-white transition duration-300 ease-in-out border-2 rounded-full cursor-pointer border-green hover:text-black hover:bg-green hover:-translate-y-1"
                            >
                                Let&apos;s Talk
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex justify-center w-72 md:w-96 max-w-full">
                        <img
                            src={Heroimage}
                            className="rounded-tl-[108px] rounded-br-[108px] w-full h-auto object-contain"
                            alt="Hero"
                        />
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Hero;
