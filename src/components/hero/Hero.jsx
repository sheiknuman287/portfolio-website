import personal from "../../data/personal";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        bg-[#030712]
        overflow-hidden
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
            pt-28
            pb-16
            md:pt-32
            md:pb-20
          "
        >
          {/* ========================================
              LEFT CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full min-w-0"
          >
            {/* Greeting */}

            <p
              className="
                text-cyan-400
                text-lg
                md:text-xl
                font-semibold
                mb-4
              "
            >
              {personal.greeting}
            </p>

            {/* Name */}

            <h1
              className="
                text-[2.2rem]
                min-[360px]:text-4xl
                sm:text-5xl
                md:text-7xl
                font-extrabold
                text-white
                mb-5
                leading-[1.08]
                whitespace-nowrap
              "
            >
              {personal.name}
            </h1>

            {/* Main Title */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
                mb-6
                leading-tight
              "
            >
              {personal.title[0]}
            </h2>

            {/* Description */}

            <p
              className="
                text-gray-400
                text-base
                sm:text-lg
                max-w-2xl
                leading-relaxed
              "
            >
              {personal.shortDescription}
            </p>

            {/* Buttons */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                sm:gap-5
                mt-8
                sm:mt-10
              "
            >
              <a href="/#projects">
                <Button>
                  View Projects
                </Button>
              </a>

              <a href={personal.resume}>
                <Button variant="secondary">
                  Download Resume
                </Button>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>

          {/* ========================================
              DESKTOP PROFILE CARD
              Hidden on mobile/tablet so About Me
              remains the only profile section there.
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.3,
              },

              x: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              },

              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              hidden
              lg:flex
              justify-center
              items-center
            "
          >
            <div
              className="
                relative
                w-96
                h-96
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border
                border-cyan-400/30
                shadow-2xl
                shadow-cyan-500/20
                flex
                flex-col
                items-center
                justify-center
                overflow-hidden
                px-8
              "
            >
              {/* Glow */}

              <div
                className="
                  absolute
                  w-52
                  h-52
                  bg-cyan-500
                  rounded-full
                  blur-3xl
                  opacity-20
                  -top-10
                  -right-10
                "
              />

              {/* Profile Photo */}

              <div
                className="
                  relative
                  z-10
                  w-40
                  h-40
                  rounded-full
                  overflow-hidden
                  border
                  border-cyan-400/30
                  shadow-xl
                  shadow-cyan-500/20
                  mb-6
                  flex-shrink-0
                "
              >
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} profile`}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* Name */}

              <h3
                className="
                  relative
                  z-10
                  text-3xl
                  font-bold
                  text-white
                  text-center
                  whitespace-nowrap
                "
              >
                {personal.name}
              </h3>

              {/* Roles */}

              <p
                className="
                  relative
                  z-10
                  mt-3
                  text-cyan-400
                  font-semibold
                  text-center
                "
              >
                Full Stack Developer
              </p>

              <p
                className="
                  relative
                  z-10
                  text-purple-400
                  font-semibold
                  text-center
                "
              >
                ML & AI Engineer
              </p>

              {/* Technologies */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-wrap
                  justify-center
                  gap-3
                  mt-8
                  px-4
                "
              >
                <span
                  className="
                    text-sm
                    bg-cyan-500/20
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  React
                </span>

                <span
                  className="
                    text-sm
                    bg-cyan-500/20
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  FastAPI
                </span>

                <span
                  className="
                    text-sm
                    bg-cyan-500/20
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  TensorFlow
                </span>

                <span
                  className="
                    text-sm
                    bg-cyan-500/20
                    px-3
                    py-1
                    rounded-full
                  "
                >
                  Data Science
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;