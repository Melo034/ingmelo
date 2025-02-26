import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {

    // Ref to the textarea element
    const textareaRef = useRef(null);

    // Function to adjust textarea height dynamically
    const textareaAutoHeight = (el, offsetTop = 0) => {
        if (el) {
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight + offsetTop}px`;
        }
    };

    // useEffect to add event listener when the component mounts
    useEffect(() => {
        const textarea = textareaRef.current;

        if (textarea) {
            // Initial height adjustment
            textareaAutoHeight(textarea, 3);

            // Add input event listener to adjust height dynamically
            textarea.addEventListener("input", () => textareaAutoHeight(textarea, 3));

            // Cleanup event listener on unmount
            return () => textarea.removeEventListener("input", () => textareaAutoHeight(textarea, 3));
        }
    }, []);


    return (
        <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 py-5 mx-auto xl:px-0 lg:py-20">
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-2xl font-semibold text-white md:text-4xl md:leading-tight">Contact Me</h2>
                    <p className="mt-1 text-neutral-400">Whatever your goal - I will get you there.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    <div className="pb-10 mb-10 border-b md:order-2 border-neutral-800 md:border-b-0 md:pb-0 md:mb-0">
                        <form>
                            <div className="space-y-4">

                                <div className="relative">
                                    <input type="text" id="hs-tac-input-name" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Name" />
                                    <label htmlFor="hs-tac-input-name" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Name</label>
                                </div>

                                <div className="relative">
                                    <input type="email" id="hs-tac-input-email" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Email" />
                                    <label htmlFor="hs-tac-input-email" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Email</label>
                                </div>

                                <div className="relative">
                                    <input type="text" id="hs-tac-input-company" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Company" />
                                    <label htmlFor="hs-tac-input-company" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Company</label>
                                </div>

                                <div className="relative">
                                    <input type="text" id="hs-tac-input-phone" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Phone" />
                                    <label htmlFor="hs-tac-input-phone" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Phone</label>
                                </div>

                                <div className="relative">
                                    <textarea id="hs-tac-message" className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                                    <label htmlFor="hs-tac-message" className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Tell us about your project</label>
                                </div>

                            </div>

                            <div className="mt-2">
                                <p className="text-xs text-neutral-500">
                                    All fields are required
                                </p>

                                <p className="mt-5">
                                    <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-green font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="#">
                                        Submit
                                        <svg className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-14">

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 size-6 text-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div className="grow">
                                <h4 className="font-semibold text-white">My address:</h4>

                                <address className="mt-1 text-sm not-italic text-neutral-400">
                                    27B Grassfield, Lumley<br />
                                    Freetown.
                                </address>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 size-6 text-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                            </svg>
                            <div className="grow">
                                <h4 className="font-semibold text-white">Email us:</h4>

                                <NavLink className="mt-1 text-sm text-neutral-400" href="#mailto:example@site.co" target="_blank">
                                    kanujosephmelvin@gmail.com
                                </NavLink>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 size-6 text-green" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 11 18-5v12L3 14v-3z" />
                                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                            </svg>
                            <div className="grow">
                                <h4 className="font-semibold text-white">Hire Me</h4>
                                <p className="mt-1 text-neutral-400">Do you have a project in mind ?</p>
                                <p className="mt-2">
                                    <NavLink className="group inline-flex items-center gap-x-2 font-medium text-sm text-green decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                                        Contact Me
                                        <svg className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact