import { motion } from "motion/react";

import Container from "../ui/Container";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

import projects from "../../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="
        bg-[#030712]
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      <Container>

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            w-full
            flex
            flex-col
            items-center
            text-center
            mb-14
            lg:mb-16
          "
        >

          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.35em]
              font-semibold
              text-sm
              mb-4
              text-center
            "
          >
            Portfolio
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
              text-white
              mb-5
              text-center
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              w-full
              max-w-3xl
              text-gray-400
              text-lg
              md:text-xl
              leading-relaxed
              text-center
            "
          >
            A selection of projects that demonstrate my
            experience in full-stack development, machine
            learning, artificial intelligence, and data
            science.
          </p>

        </motion.div>

        {/* ========================================
            FEATURED PROJECTS
        ======================================== */}

        <div className="space-y-10">

          {featuredProjects.map((project) => (

            <FeaturedProject
              key={project.id}
              project={project}
            />

          ))}

        </div>

        {/* ========================================
            OTHER PROJECTS
        ======================================== */}

        {otherProjects.length > 0 && (

          <div className="mt-20">

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                leading-tight
                mb-8
              "
            >
              More Projects
            </h3>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >

              {otherProjects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              ))}

            </div>

          </div>

        )}

      </Container>
    </section>
  );
}

export default Projects;