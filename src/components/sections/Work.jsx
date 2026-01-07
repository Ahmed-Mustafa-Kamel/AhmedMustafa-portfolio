/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
import AnimatedSection from "../common/AnimatedSection";

const Works = [
  {
    imgSrc: "/projects/DevSquad-portfolio.png",
    title: "Dev Squad Portfolio",
    tags: ["FrontEnd", "React.js", "Tailwind", "Framer Motion"],
    projectLink: "https://dev-squad-portfolio.vercel.app/",
  },
  {
    imgSrc: "/projects/Restaura.png",
    title: "Resturant Website",
    tags: ["FrontEnd", "React.js", "Tailwind", "Framer Motion"],
    projectLink: "https://restaura-sage.vercel.app/",
  },
  {
    imgSrc: "/projects/coffee-coders.png",
    title: "Coffee selling Website",
    tags: ["FrontEnd", "React.js", "Tailwind", "Framer Motion"],
    projectLink: "https://coders-coffee-wine.vercel.app/",
  },
  {
    imgSrc: "/projects/photo-gallery.png",
    title: "Photo Gallery Website",
    tags: ["BackEnd", "Express.js", "API"],
    projectLink:
      "https://github.com/Ahmed-Mustafa-Kamel/photo-gallery-MERN-Stack",
  },
  {
    imgSrc: "/projects/space-website.png",
    title: "Responsive Space Website ",
    tags: ["FrontEnd", "HTML", "CSS", "JavaScript", "Web Design"],
    projectLink:
      "https://ahmed-mustafa-kamel.github.io/responsive-space-website/",
  },
  {
    imgSrc: "/projects/react-portfolio-model.png",
    title: "Responsive portfolio model ",
    tags: ["FrontEnd", "React.js", "Framer Motion"],
    projectLink: "https://react-portfolio-model.netlify.app/",
  },
  {
    imgSrc: "/projects/BookStore.png",
    title: "BookStore Website",
    tags: ["BackEnd", "Express.js", "API"],
    projectLink: "https://github.com/Ahmed-Mustafa-Kamel/Book-Store-MERN-Stack",
  },
  {
    imgSrc: "/projects/prayer-times.png",
    title: "Prayer Times Website",
    tags: ["FrontEnd", "React.js", "API"],
    projectLink: "https://prayer-times-steel.vercel.app/",
  },
  // {
  //   imgSrc: "/projects/CRUD.png",
  //   title: "Prodect Management System",
  //   tags: ["FrontEnd"],
  //   projectLink: "https://ahmed-mustafa-kamel.github.io/CRUDS/",
  // },
];

const Work = () => {
  return (
    <AnimatedSection>
      <section id="work" className="section relative overflow-hidden">
        <div className="container">
          <h2 className="headline-3 mb-4 fade-in">My Portfolio Highlights</h2>
          {/* mapping projects */}
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {Works.map(({ imgSrc, title, tags, projectLink }, index) => (
              <ProjectCard
                key={index}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="fade-in"
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Work;
