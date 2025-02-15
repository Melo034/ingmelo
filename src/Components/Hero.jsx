import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div
            className="relative bg-neutral-900 bg-cover bg-no-repeat bg-center flex items-center justify-center px-4 md:px-8"
            style={{
                backgroundImage: `
                    url('./src/assets/layer-blur.svg'),
                    url('./src/assets/lines2.svg'),
                    url('./src/assets/star2.svg'),
                    url('./src/assets/star.svg')
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
                        <h2 className="flex justify-center md:justify-start items-center gap-2 font-extrabold text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                            I&apos;m&nbsp;
                            <span className="inline-block min-w-[150px] sm:min-w-[180px] md:min-w-[200px] whitespace-nowrap">
                                <TypeAnimation
                                    sequence={[
                                        'an Engineer',
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
                        <div className="flex justify-center md:justify-start">
                            <NavLink
                                to="javascript:void(0)"
                                className="inline-flex items-center justify-center py-3 px-9 font-mono text-lg font-semibold text-white transition duration-300 ease-in-out border-2 rounded-full cursor-pointer border-green hover:text-black hover:bg-green hover:-translate-y-1"
                            >
                                Let&apos;s Talk
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex justify-center w-72 md:w-96 max-w-full">
                        <img
                            src="./src/assets/Hero.png"
                            className="rounded-tl-[108px] rounded-br-[108px] w-full h-auto object-contain"
                            alt="Hero"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
