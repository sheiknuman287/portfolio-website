import { motion } from "motion/react";
import Container from "../ui/Container";
import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-24
        lg:py-32
        bg-[#030712]
        overflow-hidden
      "
    >
      <Container>

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            w-full
            flex
            flex-col
            items-center
            text-center
          "
        >

          <p
            className="
              text-cyan-400
              font-semibold
              tracking-[0.3em]
              uppercase
              text-center
            "
          >
            Technologies
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-white
              text-center
              mt-3
            "
          >
            My Skills
          </h2>

          <p
            className="
              w-full
              max-w-3xl
              text-gray-400
              text-lg
              md:text-xl
              text-center
              mt-6
              leading-8
            "
          >
            Technologies and tools I use to build modern
            full-stack applications, AI-powered solutions,
            and data-driven software.
          </p>

        </motion.div>

        {/* ========================================
            SKILL CARDS
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            mt-16
            lg:mt-20
          "
        >

          {skills.map((category, index) => (

            <motion.div
              key={category.title}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                min-w-0
                h-full
                rounded-3xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-xl
                p-7
                md:p-8
                shadow-lg
                shadow-cyan-500/5
                transition-all
                duration-300
              "
            >

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-cyan-400
                  leading-tight
                  mb-7
                "
              >
                {category.title}
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {category.technologies.map((tech) => (

                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.04,
                    }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-300
                      text-sm
                      font-medium
                      cursor-default
                    "
                  >
                    {tech}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Skills;