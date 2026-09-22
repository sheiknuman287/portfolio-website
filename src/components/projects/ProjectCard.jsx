import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const screenshot =
    project.screenshots?.[0]?.image ||
    project.screenshots?.[0] ||
    null;

  const technologies =
    project.technologies || project.techStack || [];

  const liveDemo =
    project.liveDemo || project.frontend?.live;

  const frontendGithub =
    project.frontendGithub || project.frontend?.github;

  const backendGithub =
    project.backendGithub || project.backend?.github;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        min-w-0
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        transition
        duration-300
        hover:border-cyan-400/30
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      {/* PROJECT IMAGE */}

      <div
        className="
          h-48
          w-full
          rounded-xl
          bg-[#0b1220]
          border
          border-white/10
          overflow-hidden
          flex
          items-center
          justify-center
          mb-6
        "
      >
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${project.title} preview`}
            className="
              w-full
              h-full
              object-cover
            "
          />
        ) : (
          <span className="text-5xl">
            💻
          </span>
        )}
      </div>

      {/* TITLE */}

      <h3
        className="
          text-2xl
          font-bold
          text-white
          leading-tight
          break-words
          mb-2
        "
      >
        {project.title}
      </h3>

      {/* CATEGORY */}

      <p
        className="
          text-cyan-400
          font-semibold
          leading-relaxed
          mb-3
        "
      >
        {project.subtitle || project.category}
      </p>

      {/* DESCRIPTION */}

      <p
        className="
          text-gray-400
          leading-relaxed
          break-words
          mb-5
        "
      >
        {project.description}
      </p>

      {/* TECHNOLOGIES */}

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.slice(0, 6).map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              bg-cyan-400/10
              border
              border-cyan-400/20
              px-3
              py-1
              text-xs
              text-cyan-300
            "
          >
            {technology}
          </span>
        ))}
      </div>

      {/* ACTION LINKS */}

      <div
        className="
          flex
          flex-wrap
          gap-4
          items-center
        "
      >
        <Link
          to={`/projects/${project.id}`}
          className="
            text-sm
            font-semibold
            text-white
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          View Details →
        </Link>

        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm
              font-semibold
              text-cyan-400
              hover:text-cyan-300
              transition
              duration-200
            "
          >
            Live Demo →
          </a>
        )}

        {frontendGithub && (
          <a
            href={frontendGithub}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm
              font-semibold
              text-gray-300
              hover:text-white
              transition
              duration-200
            "
          >
            GitHub →
          </a>
        )}

        {backendGithub && (
          <a
            href={backendGithub}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm
              font-semibold
              text-purple-300
              hover:text-purple-200
              transition
              duration-200
            "
          >
            Backend →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;