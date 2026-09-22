import { motion } from "motion/react";
import personal from "../../data/personal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        bg-[#030712]
      "
    >
      <Container>

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Contact Me"
          description="Have a project idea, job opportunity, or just want to connect? Feel free to reach out."
        />


        {/* ========================================
            CONTACT CONTENT
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-stretch
          "
        >

          {/* ========================================
              LEFT — CONTACT INFO
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
              bg-white/5
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
                text-sm
                font-semibold
                tracking-[0.2em]
                uppercase
                mb-4
              "
            >
              Let's Connect
            </p>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                mb-6
              "
            >
              Open to opportunities
            </h3>

            <p
              className="
                text-gray-400
                leading-8
                mb-10
              "
            >
              I'm currently interested in opportunities where I can apply
              Full Stack Development, Machine Learning, Artificial
              Intelligence, and Data Science skills to real-world projects.
            </p>


            {/* Email */}

            <a
              href={`mailto:${personal.email}`}
              className="
                flex
                items-center
                gap-4
                mb-6

                group
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-cyan-500/10
                  border
                  border-cyan-400/20

                  text-xl
                "
              >
                ✉️
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p
                  className="
                    text-gray-200
                    group-hover:text-cyan-400
                    transition
                    duration-200
                  "
                >
                  {personal.email}
                </p>
              </div>

            </a>


            {/* Phone */}

            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="
                flex
                items-center
                gap-4
                mb-6

                group
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-purple-500/10
                  border
                  border-purple-400/20

                  text-xl
                "
              >
                📱
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p
                  className="
                    text-gray-200
                    group-hover:text-purple-400
                    transition
                    duration-200
                  "
                >
                  {personal.phone}
                </p>
              </div>

            </a>


            {/* Location */}

            <div
              className="
                flex
                items-center
                gap-4
                mb-10
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-cyan-500/10
                  border
                  border-cyan-400/20

                  text-xl
                "
              >
                📍
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="text-gray-200">
                  {personal.location}
                </p>
              </div>

            </div>


            {/* GitHub + LinkedIn */}

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-3

                  rounded-xl

                  border
                  border-white/10

                  bg-white/5

                  text-gray-200
                  font-semibold

                  hover:border-cyan-400/30
                  hover:text-cyan-400

                  transition
                  duration-300
                "
              >
                GitHub →
              </a>


              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5
                    py-3

                    rounded-xl

                    border
                    border-white/10

                    bg-white/5

                    text-gray-200
                    font-semibold

                    hover:border-purple-400/30
                    hover:text-purple-400

                    transition
                    duration-300
                  "
                >
                  LinkedIn →
                </a>
              )}

            </div>

          </motion.div>


          {/* ========================================
              RIGHT — CONTACT MESSAGE CARD
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
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500/10
              via-white/[0.03]
              to-purple-500/10

              p-8
              md:p-10

              flex
              flex-col
              justify-center

              shadow-xl
              shadow-purple-500/10
            "
          >

            <div
              className="
                text-6xl
                mb-8
              "
            >
              💻
            </div>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                mb-6
              "
            >
              Let's build something useful.
            </h3>

            <p
              className="
                text-gray-400
                text-lg
                leading-8
                mb-8
              "
            >
              Whether it's a full-stack application, an AI-powered product,
              a machine learning system, or a data-driven solution, I'm
              interested in turning ideas into practical software.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="
                inline-flex
                items-center
                justify-center

                w-fit

                px-6
                py-3

                rounded-xl

                bg-gradient-to-r
                from-cyan-500
                to-purple-500

                text-white
                font-semibold

                shadow-lg
                shadow-cyan-500/20

                hover:scale-105

                transition
                duration-300
              "
            >
              Send Me an Email →
            </a>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;