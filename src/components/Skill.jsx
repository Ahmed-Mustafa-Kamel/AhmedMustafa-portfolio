import SkillCard from "./SkillCard";

/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

const skillItem = [
  {
    imgSrc: "/html-5.svg",
    label: "HTML",
    desc: "Interface structure",
  },
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "Interface style",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/bootstrap.svg",
    label: "BootStrap",
    desc: "User Interface",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/git.svg",
    label: "GIT",
    desc: "source code management",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-3 reveal-up">Essential Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        {/* mapping skills */}
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={index}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
