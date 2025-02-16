import adobeillustrator from "../assets/icons8-adobe-illustrator-48.png";
import adobexd from "../assets/icons8-adobe-xd-48.png";
import bootstrap from "../assets/icons8-bootstrap-48.png";
import canva from "../assets/icons8-canva-48.png";
import figma from "../assets/icons8-figma-48.png";
import flutter from "../assets/icons8-flutter-48.png";
import javascript from "../assets/icons8-javascript-48.png";
import laravel from "../assets/icons8-laravel-48.png";
import node from "../assets/icons8-node-js-48.png";
import python from "../assets/icons8-python-48.png";
import tailwind from "../assets/icons8-tailwind-css-48.png";
import wordpress from "../assets/icons8-wordpress-48.png";

const skills = [
    { name: "Adobe Illustrator", icon: adobeillustrator},
    { name: "Adobe XD", icon: adobexd},
    { name: "Bootstrap", icon: bootstrap},
    { name: "Canva", icon: canva},
    { name: "Figma", icon: figma },
    { name: "Flutter", icon: flutter},
    { name: "JavaScript", icon: javascript},
    { name: "Laravel", icon: laravel },
    { name: "Node.js", icon: node },
    { name: "Python", icon: python },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "WordPress", icon: wordpress }
  ];
  
  const expertise = [
    { name: "PHP", percent: 90 },
    { name: "React JS", percent: 75 },
    { name: "Flutter", percent: 60 },
    { name: "Figma", percent: 90 },
    { name: "Vue", percent: 70 },
    { name: "Python", percent: 70 }
  ];

  
const Skills = () => {
  return (
    <section className="max-w-screen-xl px-10 py-10 m-auto bg-neutral-900" id="skills">
      <h2 className="text-3xl font-bold tracking-tight text-center text-neutral-200 pb-7" style={{ fontFamily: "Abril Fatface, serif" }}>
        Skills
      </h2>
      <div className="max-w-xl mx-auto text-center mb-12">
        <h3 className="text-neutral-400 text-3xl font-semibold sm:text-4xl">My Expertise</h3>
        <p className="text-neutral-500 mt-3">An array of skills and technologies I&apos;ve mastered to bring ideas to life and tackle complex challenges.</p>
      </div>
      <div className="mt-12 flex justify-center">
        <ul className="inline-grid grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-6 md:gap-x-16">
          {skills.map((skill, index) => (
            <li key={index} className="group flex justify-center rounded-md drop-shadow-xl hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              <span className="whitespace-nowrap absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-xs group-hover:-translate-y-6 duration-700">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {expertise.map((exp, index) => (
          <div key={index} className="flex flex-wrap items-center h-20 max-w-md px-10 transition-transform duration-300 delay-100 border shadow-md border-neutral-800 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-2xl transform-gpu hover:scale-105">
            <div className="flex items-center justify-center -m-6 overflow-hidden border shadow-md border-neutral-800 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-full relative">
              <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
                <circle className="text-neutral-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="50" cx="60" cy="60" />
                <circle className="text-green" strokeWidth="10" strokeDasharray={Math.PI * 100} strokeDashoffset={(1 - exp.percent / 100) * Math.PI * 100} strokeLinecap="round" stroke="currentColor" fill="transparent" r="50" cx="60" cy="60" />
              </svg>
              <span className="absolute text-2xl text-neutral-300">{exp.percent}%</span>
            </div>
            <p className="ml-10 font-medium text-neutral-400 text-lg whitespace-nowrap">{exp.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills