import Media from "./Utils/Media"
import CV from "../assets/Melvin.pdf"

const SocialContacts = () => {

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = CV;
        downloadLink.download = 'MELVIN_CV.pdf';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div>
            <section className="items-center py-5 max-w-screen-xl mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12">
                <div className="flex-1 space-y-3 p-5">
                    <h3 className="text-2xl text-neutral-200 font-bold lg:text-3xl font-serif">
                        Let me know how I can assist you.
                    </h3>
                    <p className="text-neutral-500 leading-relaxed">
                        I&apos;m here to address any questions you might have, and I eagerly anticipate hearing from you!, don&apos;t hesitate to reach out. Contact me for innovative solutions tailored to your needs.
                    </p>
                    <button onClick={handleDownload}  type="button" className="px-6 py-3 mt-4 text-sm font-medium text-center text-green border-[#CCFF00] rounded-lg cursor-pointer relative group overflow-hidden border-2">
                        <span className="font-bold font-serif text-neutral-700 text-sm relative z-10 group-hover:text-green duration-500">Download CV</span>
                        <span className="absolute top-0 left-0 w-full bg-green duration-500 group-hover:-translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-green duration-500 group-hover:translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-green duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                        <span className="absolute delay-300 top-0 left-0 w-full bg-green duration-500 group-hover:translate-y-full h-full"></span>
                    </button>
                </div>
                <div className="relative h-full w-full flex items-center justify-center flex-1 my-5">
                    <Media />
                </div>
            </section>
        </div>
    )
}

export default SocialContacts