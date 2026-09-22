import { motion } from "motion/react";

import personal from "../../data/personal";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Resume() {
  return (
    <section
      id="resume"
      className="
        py-32
        bg-[#030712]
        overflow-hidden
      "
    >
      <Container>

        {/* ========================================
            RESUME HEADING
        ======================================== */}

        <div
          className="
            w-full
            flex
            flex-col
            items-center
            text-center
            mb-20
          "
        >

          <p
            className="
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              tracking-[0.35em]
              uppercase
              mb-4
              text-center
            "
          >
            Career Profile
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              text-white
              mb-6
              text-center
            "
          >
            Resume
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
            Explore my education, technical skills, projects,
            certifications, and experience through my resume.
          </p>

        </div>


        {/* ========================================
            MAIN RESUME SECTION
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          {/* ========================================
              LEFT SIDE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              md:p-10
              shadow-xl
              shadow-cyan-500/10
            "
          >

            <p
              className="
                text-cyan-400
                font-semibold
                text-lg
                mb-2
              "
            >
              {personal.name}
            </p>

            <h3
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-white
                mb-6
              "
            >
              Full Stack Developer
            </h3>

            <p
              className="
                text-gray-400
                text-lg
                leading-8
                mb-8
              "
            >
              A BCA graduate focused on Full Stack Development,
              Machine Learning, Artificial Intelligence, and Data
              Science. My resume highlights the projects,
              technologies, and learning journey behind my work.
            </p>


            {/* Education */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                mb-4
              "
            >

              <h4
                className="
                  text-xl
                  font-semibold
                  text-white
                  mb-2
                "
              >
                Education
              </h4>

              <p className="text-gray-400">
                Bachelor of Computer Applications (BCA)
              </p>

            </div>


            {/* Core Areas */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                mb-4
              "
            >

              <h4
                className="
                  text-xl
                  font-semibold
                  text-white
                  mb-2
                "
              >
                Core Areas
              </h4>

              <p className="text-gray-400">
                Full Stack Development • Machine Learning • AI •
                Data Science
              </p>

            </div>


            {/* Based In */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                mb-8
              "
            >

              <h4
                className="
                  text-xl
                  font-semibold
                  text-white
                  mb-2
                "
              >
                Based In
              </h4>

              <p className="text-gray-400">
                {personal.location}
              </p>

            </div>


            {/* Resume Buttons */}

            <div className="flex flex-wrap gap-5">

              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  View Resume
                </Button>
              </a>

              <a
                href={personal.resume}
                download
              >
                <Button variant="secondary">
                  Download Resume
                </Button>
              </a>

            </div>

          </motion.div>


          {/* ========================================
              RIGHT SIDE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              md:p-10
              shadow-xl
              shadow-cyan-500/10
            "
          >

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                mb-8
              "
            >
              What You'll Find
            </h3>


            <div className="space-y-5">

              {/* Professional Summary */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >

                <h4
                  className="
                    text-xl
                    font-semibold
                    text-cyan-400
                    mb-2
                  "
                >
                  Professional Summary
                </h4>

                <p className="text-gray-400 leading-7">
                  A concise overview of my technical background,
                  development focus, and career direction.
                </p>

              </div>


              {/* Technical Skills */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >

                <h4
                  className="
                    text-xl
                    font-semibold
                    text-cyan-400
                    mb-2
                  "
                >
                  Technical Skills
                </h4>

                <p className="text-gray-400 leading-7">
                  Full Stack Development, Python, React,
                  FastAPI, Flask, TensorFlow, Machine Learning,
                  Data Science, databases, and development tools.
                </p>

              </div>


              {/* Selected Projects */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >

                <h4
                  className="
                    text-xl
                    font-semibold
                    text-cyan-400
                    mb-2
                  "
                >
                  Selected Projects
                </h4>

                <p className="text-gray-400 leading-7">
                  AI-powered applications, machine learning
                  systems, analytics dashboards, and full-stack
                  web platforms built through hands-on development.
                </p>

              </div>


              {/* Certification */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                "
              >

                <h4
                  className="
                    text-xl
                    font-semibold
                    text-cyan-400
                    mb-2
                  "
                >
                  Certification
                </h4>

                <p className="text-gray-400 leading-7">
                  Data Science, Machine Learning & AI course
                  certification from CodeWithHarry.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default Resume;