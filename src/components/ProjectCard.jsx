/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, projectLink, tags, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      {/* projects img */}
      <figure className="img-box aspect-video rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      {/* project details */}
      <div className="flex items-center justify-between gap-4">
        <div>
          {/* title */}
          <h3 className="title-1 mb-3">{title}</h3>
          {/* tags */}
          {/* mapping tags */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        {/* link */}
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
            <a
              href={projectLink}
              target="_blank"
              className="absolute inset-0"
            ></a>
          </span>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
