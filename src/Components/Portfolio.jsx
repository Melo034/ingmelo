import { useState } from "react";
import PropTypes from "prop-types";
import agentabu from "../assets/agentabu.jpg";
import ideapulse from "../assets/ideapulse.jpg";
import yabom from "../assets/yabom.jpg";
import safespace from "../assets/safespace.jpg";
import ib4me from "../assets/ib4me.jpg";
import factquest from "../assets/factquest.jpg";

const categories = ["all", "bounty", "design", "development"];

const projects = [
    {
        ImageHref:agentabu,
        category: "Bounty",
        title: "Real Estate Agency",
        buttonHref: "https://agentabu.ingmelo.com/",
    },
    {
        ImageHref:ideapulse,
        category: "Bounty",
        title: "Creativity",
        buttonHref: "https://ideapulse.ingmelo.com/",
    },
    {
        ImageHref: yabom,
        category: "Development",
        title: "Health",
        buttonHref: "https://yabom.ingmelo.com/",
    },
    {
        ImageHref: safespace,
        category: "Development",
        title: "Mental Health",
        buttonHref: "https://safespace.ingmelo.com/",
    },
    {
        ImageHref: ib4me,
        category: "Development",
        title: "Crowdfunding",
        buttonHref: "https://hib4me-client.onrender.com/",
    },
    {
        ImageHref: factquest,
        category: "Bounty",
        title: "Creativity",
        buttonHref: "#",
    },
];

const Portfolio = () => {
    const [showCard, setShowCard] = useState("all");

    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-green mb-2 block text-lg font-semibold">
                        My Portfolio
                    </span>
                    <h2 className="text-neutral-200 mb-3 text-3xl font-bold sm:text-4xl md:text-[40px]">
                        My Recent Projects
                    </h2>
                </div>

                <div className="w-full flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap justify-center mb-12 space-x-1">
                            <div className="mb-1">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setShowCard(category)}
                                        className={`inline-block rounded-lg py-2 px-5 text-center cursor-pointer m-2 bg-green text-base font-semibold transition md:py-3 lg:px-8 ${showCard === category
                                            ? "activeClasses bg-primary text-neutral-600"
                                            : "inactiveClasses text-neutral-600 hover:bg-green hover:text-neutral-700"
                                            }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    {projects
                        .filter(
                            (project) =>
                                showCard === "all" ||
                                project.category.toLowerCase() === showCard.toLowerCase()
                        )
                        .map((project, index) => (
                            <PortfolioCard key={index} {...project} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

const PortfolioCard = ({ ImageHref, category, title, buttonHref }) => {
    return (
        <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="relative mb-12">
                <div className="overflow-hidden rounded-[10px]">
                    <img src={ImageHref} alt="portfolio" className="w-full" />
                </div>
                <div className="relative z-10 mx-4 sm:mx-6 md:mx-8 -mt-20 rounded-lg border-neutral-800 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-[34px] px-3 text-center shadow-portfolio">
                    <span className="text-green mb-2 block text-sm font-medium">
                        {category}
                    </span>
                    <h3 className="text-neutral-400 mb-5 text-xl font-bold">
                        {title}
                    </h3>
                    <a
                        href={buttonHref}
                        className="text-green hover:border-neutral-200 hover:bg-neutral-900 inline-block rounded-md border border--green  py-[10px] px-7 text-sm font-medium transition hover:text-white"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

// PropTypes Validation
PortfolioCard.propTypes = {
    ImageHref: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonHref: PropTypes.string.isRequired,
};
