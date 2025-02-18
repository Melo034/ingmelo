import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const navLinks = [
        { name: "About", path: "about" },
        { name: "Skills", path: "skills" },
        { name: "Portfolio", path: "portfolio" },
        { name: "Blog", path: "blog" },
    ];

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="sticky inset-x-0 z-50 flex flex-wrap w-full top-4 md:justify-start md:flex-nowrap">
            <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-2 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
                <div className="flex items-center justify-between">
                    <NavLink className="flex-none inline-block text-xl font-semibold rounded-md focus:outline-none focus:opacity-80" to="/">
                        <h1 className='font-extrabold font-serif text-white'>MEL<span className='text-green'>O</span>.</h1>
                    </NavLink>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="flex items-center cursor-pointer justify-center text-sm font-semibold text-white rounded-full hs-collapse-toggle size-8 bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            aria-controls="navbar-collapse"
                            aria-label="Toggle navigation"
                        >
                            {isCollapsed ? (
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse" className={`${isCollapsed ? 'hidden' : 'block'} overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block`}>
                    <div className="flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll(link.path);
                                }}
                                className={({ isActive }) =>
                                    `text-sm text-white hover:text-green md:py-4 focus:outline-none ${isActive ? "text-green" : ""
                                    }`
                                }
                                end
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div>
                            <NavLink   to="/" onClick={(e) => {
                                e.preventDefault();
                                handleScroll("contact"); 
                            }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-900 rounded-full group gap-x-2 bg-green focus:outline-none">
                            Contact Me
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </header >
    );
};

export default Navbar;
