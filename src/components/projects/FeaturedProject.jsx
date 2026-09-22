import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function FeaturedProject({ project }) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const screenshots = project.screenshots || [];

  const screenshotTitles = [
    "Landing Page",
    "Dashboard",
    "AI Note Summarization",
    "AI Question Answering",
  ];

  const technologies =
    project.techStack || project.technologies || [];

  const liveDemo =
    project.liveDemo || project.frontend?.live;

  const frontendGithub =
    project.frontendGithub || project.frontend?.github;

  const backendGithub =
    project.backendGithub || project.backend?.github;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        min-w-0
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-2xl
        shadow-cyan-500/10
      "
    >
      {/* Top Gradient Line */}

      <div
        className="
          h-1
          w-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
        "
      />

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-10
          p-6
          md:p-8
          lg:p-10
        "
      >
        {/* Project Screenshots */}

        <div className="min-w-0">

          {/* Main Screenshot */}

          <div
            className="
              h-[300px]
              md:h-[380px]
              lg:h-[400px]
              rounded-2xl
              border
              border-cyan-400/20
              bg-[#0b1220]
              overflow-hidden
            "
          >
            {screenshots.length > 0 ? (
              <motion.img
                key={screenshots[activeScreenshot]}
                src={screenshots[activeScreenshot]}
                alt={`${project.title} - ${
                  screenshotTitles[activeScreenshot] || "Project Preview"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            ) : (
              <div
                className="
                  h-full
                  flex
                  items-center
                  justify-center
                "
              >
                <div className="text-center">
                  <div className="text-6xl mb-5">
                    🧠
                  </div>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Screenshot Thumbnails */}

          {screenshots.length > 0 && (
            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-3
                mt-4
              "
            >
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot}
                  type="button"
                  onClick={() => setActiveScreenshot(index)}
                  aria-label={`View ${
                    screenshotTitles[index] || "project screenshot"
                  }`}
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    ${
                      activeScreenshot === index
                        ? `
                          border-cyan-400
                          shadow-lg
                          shadow-cyan-400/20
                          scale-[1.02]
                        `
                        : `
                          border-white/10
                          hover:border-cyan-400/40
                        `
                    }
                  `}
                >
                  <img
                    src={screenshot}
                    alt={
                      screenshotTitles[index] ||
                      `Project screenshot ${index + 1}`
                    }
                    className="
                      w-full
                      h-20
                      sm:h-20
                      object-cover
                    "
                  />
                </button>
              ))}
            </div>
          )}

          {/* Current Screenshot Title */}

          {screenshots.length > 0 && (
            <p
              className="
                text-center
                text-sm
                text-gray-400
                mt-3
              "
            >
              {screenshotTitles[activeScreenshot] ||
                `Screenshot ${activeScreenshot + 1}`}
            </p>
          )}
        </div>

        {/* Project Information */}

        <div
          className="
            min-w-0
            flex
            flex-col
            justify-center
          "
        >
          <span
            className="
              inline-flex
              w-fit
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-4
              py-1
              text-sm
              font-semibold
              text-cyan-400
              mb-5
            "
          >
            Featured Project
          </span>

          <h3
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              break-words
              text-white
              mb-3
            "
          >
            {project.title}
          </h3>

          <p
            className="
              text-xl
              font-semibold
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              mb-5
            "
          >
            {project.category}
          </p>

          <p
            className="
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              break-words
              mb-6
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mb-7">
            <h4
              className="
                text-cyan-400
                font-bold
                text-lg
                mb-3
              "
            >
              Tech Stack
            </h4>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-3
                    py-1
                    text-sm
                    text-cyan-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            <Link
              to={`/projects/${project.id}`}
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                px-5
                py-3
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              View Project Details
            </Link>

            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-cyan-400/40
                  px-5
                  py-3
                  font-semibold
                  text-cyan-300
                  transition
                  duration-300
                  hover:bg-cyan-400/10
                "
              >
                Live Demo
              </a>
            )}

            {frontendGithub && (
              <a
                href={frontendGithub}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-white/20
                  px-5
                  py-3
                  font-semibold
                  text-gray-300
                  transition
                  duration-300
                  hover:bg-white/10
                  hover:text-white
                "
              >
                Frontend GitHub
              </a>
            )}

            {backendGithub && (
              <a
                href={backendGithub}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  border
                  border-purple-400/40
                  px-5
                  py-3
                  font-semibold
                  text-purple-300
                  transition
                  duration-300
                  hover:bg-purple-400/10
                "
              >
                Backend GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Key Features */}

      <div
        className="
          border-t
          border-white/10
          px-6
          md:px-8
          lg:px-10
          py-8
        "
      >
        <h4
          className="
            text-xl
            font-bold
            text-white
            mb-5
          "
        >
          Key Features
        </h4>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
          "
        >
          {project.features?.map((feature) => (
            <div
              key={feature}
              className="
                min-w-0
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
                text-sm
                text-gray-300
                break-words
              "
            >
              <span className="text-cyan-400 mr-2">
                ✓
              </span>

              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default FeaturedProject;