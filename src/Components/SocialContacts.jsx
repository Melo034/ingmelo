import Media from "./Utils/media"

const SocialContacts = () => {
    return (
        <div>
            <section className="items-center py-5 max-w-screen-xl mx-auto px-4 gap-4 md:flex md:px-8 xl:gap-12">
                <div className="flex-1 space-y-3 p-5">
                    <h3  className="text-2xl text-neutral-200 font-bold lg:text-3xl font-serif">
                        Let me know how I can assist you.
                    </h3>
                    <p className="text-neutral-500 leading-relaxed">
                        I&apos;m here to address any questions you might have, and I eagerly anticipate hearing from you!, don&apos;t hesitate to reach out. Contact me for innovative solutions tailored to your needs.
                    </p>
                </div>
                <div className="relative h-full w-full flex items-center justify-center flex-1 my-5">
                    <Media />
                </div>
            </section>
        </div>
    )
}

export default SocialContacts