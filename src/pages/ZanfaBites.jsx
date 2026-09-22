import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

import projects from "../data/projects";


function ZanfaBites() {
  const project = projects.find(
    (item) => item.id === "zanfa-bites"
  );


  // Always open the project page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!project) {
    return null;
  }


  return (
    <main className="min-h-screen bg-[#030712] text-white">

      {/* ========================================
          HERO
      ======================================== */}

      <section
        className="relative bg-[#030712] pb-20"
        style={{
          paddingTop: "72px",
        }}
      >

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full max-w-6xl"
          >

            {/* TITLE + CATEGORY */}

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-start
                gap-4
                md:gap-6
                mb-6
              "
            >

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  font-extrabold
                  leading-[1.05]
                  text-white
                  tracking-tight
                  max-w-4xl
                  break-words
                "
              >
                Zanfa Bites
              </h1>


              <p
                className="
                  inline-flex
                  items-center
                  w-fit
                  shrink-0
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                  px-4
                  py-2
                  text-cyan-400
                  uppercase
                  tracking-[0.22em]
                  text-xs
                  md:text-sm
                  font-semibold
                  mt-1
                "
              >
                {project.category}
              </p>

            </div>


            {/* SUBTITLE */}

            <h2
              className="
                text-2xl
                md:text-4xl
                font-bold
                bg-gradient-to-r
                from-orange-400
                via-pink-500
                to-purple-500
                bg-clip-text
                text-transparent
                leading-tight
                mb-8
                max-w-6xl
              "
            >
              {project.subtitle}
            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                text-gray-400
                text-lg
                md:text-xl
                leading-8
                max-w-5xl
              "
            >
              {project.longDescription}
            </p>

          </motion.div>

        </Container>

      </section>


      {/* ========================================
          ABOUT THE PROJECT
      ======================================== */}

      <section className="pb-24">

        <Container>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              md:p-10
            "
          >

            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-white
                mb-6
              "
            >
              About the Project
            </h2>


            <p
              className="
                text-gray-400
                text-lg
                leading-8
                max-w-5xl
              "
            >
              {project.description}
            </p>

          </div>

        </Container>

      </section>


      {/* ========================================
          HOW IT WORKS
      ======================================== */}

      <section className="pb-24">

        <Container>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-10
            "
          >
            How It Works
          </h2>


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >

            {/* STEP 01 */}

            <div
              className="
                rounded-2xl
                border
                border-orange-400/20
                bg-white/[0.03]
                p-6
              "
            >

              <span
                className="
                  text-orange-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                "
              >
                01
              </span>


              <h3
                className="
                  text-xl
                  font-bold
                  mt-3
                  mb-3
                "
              >
                Menu & Browsing
              </h3>


              <p
                className="
                  text-gray-400
                  leading-7
                "
              >
                Customers can browse categorized restaurant
                menu items and explore available dishes before
                adding them to the cart.
              </p>

            </div>


            {/* STEP 02 */}

            <div
              className="
                rounded-2xl
                border
                border-orange-400/20
                bg-white/[0.03]
                p-6
              "
            >

              <span
                className="
                  text-orange-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                "
              >
                02
              </span>


              <h3
                className="
                  text-xl
                  font-bold
                  mt-3
                  mb-3
                "
              >
                Cart Management
              </h3>


              <p
                className="
                  text-gray-400
                  leading-7
                "
              >
                Selected dishes are added to the cart where
                customers can manage quantities, remove items,
                and view live order totals.
              </p>

            </div>


            {/* STEP 03 */}

            <div
              className="
                rounded-2xl
                border
                border-orange-400/20
                bg-white/[0.03]
                p-6
              "
            >

              <span
                className="
                  text-orange-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                "
              >
                03
              </span>


              <h3
                className="
                  text-xl
                  font-bold
                  mt-3
                  mb-3
                "
              >
                Checkout & Coupons
              </h3>


              <p
                className="
                  text-gray-400
                  leading-7
                "
              >
                Customers can apply supported coupon codes,
                enter their details, and review the final order
                summary before confirming the purchase.
              </p>

            </div>


            {/* STEP 04 */}

            <div
              className="
                rounded-2xl
                border
                border-purple-400/20
                bg-white/[0.03]
                p-6
              "
            >

              <span
                className="
                  text-purple-400
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                "
              >
                04
              </span>


              <h3
                className="
                  text-xl
                  font-bold
                  mt-3
                  mb-3
                "
              >
                Order & PDF Invoice
              </h3>


              <p
                className="
                  text-gray-400
                  leading-7
                "
              >
                After order confirmation, the application
                processes the order and generates a professionally
                formatted PDF invoice automatically.
              </p>

            </div>

          </div>

        </Container>

      </section>


      {/* ========================================
          PROJECT SCREENSHOTS
      ======================================== */}

      <section className="pb-24">

        <Container>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-10
            "
          >
            Project Screenshots
          </h2>


          {/* IMPORTANT:
              2 COLUMNS ON DESKTOP
          */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              items-start
            "
          >

            {project.screenshots.map(
              (screenshot, index) => (

                <motion.div
                  key={screenshot.image}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    shadow-lg
                    shadow-black/20
                  "
                >

                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="
                      w-full
                      h-auto
                      block
                    "
                  />


                  <div
                    className="
                      border-t
                      border-white/10
                      px-5
                      py-4
                    "
                  >

                    <p
                      className="
                        text-orange-400
                        font-semibold
                      "
                    >
                      {screenshot.title}
                    </p>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </Container>

      </section>


      {/* ========================================
          PLATFORM CAPABILITIES
      ======================================== */}

      <section className="pb-24">

        <Container>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-8
            "
          >
            Platform Capabilities
          </h2>


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
            "
          >

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >

              <p
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-orange-400
                  mb-2
                "
              >
                4
              </p>

              <p className="text-gray-400">
                Major Ordering Stages
              </p>

            </div>


            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >

              <p
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-pink-400
                  mb-2
                "
              >
                10%
              </p>

              <p className="text-gray-400">
                Supported Coupon Discount
              </p>

            </div>


            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >

              <p
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-purple-400
                  mb-2
                "
              >
                PDF
              </p>

              <p className="text-gray-400">
                Automatic Invoice Generation
              </p>

            </div>

          </div>

        </Container>

      </section>


      {/* ========================================
          TECH STACK
      ======================================== */}

      <section className="pb-24">

        <Container>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-8
            "
          >
            Tech Stack
          </h2>


          <div className="flex flex-wrap gap-3">

            {project.technologies.map(
              (technology) => (

                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-4
                    py-2
                    text-cyan-300
                  "
                >
                  {technology}
                </span>

              )
            )}

          </div>

        </Container>

      </section>


      {/* ========================================
          KEY FEATURES
      ======================================== */}

      <section className="pb-24">

        <Container>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              mb-8
            "
          >
            Key Features
          </h2>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
            "
          >

            {project.features.map(
              (feature) => (

                <div
                  key={feature}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    text-gray-300
                  "
                >

                  <span className="text-cyan-400 mr-2">
                    ✓
                  </span>

                  {feature}

                </div>

              )
            )}

          </div>

        </Container>

      </section>


      {/* ========================================
          PROJECT LINKS
      ======================================== */}

      <section className="pb-32">

        <Container>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
              pt-2
            "
          >

            {/* LIVE DEMO */}

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                Live Demo
              </Button>
            </a>


            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                GitHub
              </Button>
            </a>


            {/* BACK TO PORTFOLIO */}

            <Link
              to="/#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/30
                bg-cyan-400/10
                px-5
                py-3
                font-semibold
                text-cyan-400
                transition-all
                duration-300
                hover:bg-cyan-400/20
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              ← Back to Portfolio
            </Link>

          </div>

        </Container>

      </section>

    </main>
  );
}


export default ZanfaBites;