import Container from "../ui/Container";
import about from "../../data/about";

function About() {
  return (
    <section
      id="about"
      className="
        py-32
        bg-[#030712]
      "
    >
      <Container>

        {/* Section Heading */}

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-center
            text-white
            mb-20
          "
        >
          {about.heading}
        </h2>


        {/* About Content */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* Left Side Profile */}

          <div
            className="
              flex
              justify-center
            "
          >
            <div
              className="
                w-80
                h-96
                rounded-3xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-lg
                flex
                flex-col
                items-center
                justify-center
                shadow-xl
                shadow-cyan-500/10
              "
            >

              {/* Profile Photo */}

              <div
                className="
                  w-48
                  h-48
                  rounded-full
                  overflow-hidden
                  border
                  border-cyan-400/30
                  shadow-xl
                  shadow-cyan-500/20
                  mb-6
                "
              >
                <img
                  src="/images/profile.png"
                  alt="Sheik Numan"
                  className="w-full h-full object-cover"
                />
              </div>


              <h3 className="text-2xl font-bold text-white">
                Sheik Numan
              </h3>

              <p className="text-cyan-400 mt-2">
                Full Stack Developer
              </p>

              <p className="text-purple-400">
                ML & AI Engineer
              </p>

            </div>
          </div>


          {/* Right Side */}

          <div>

            <h3
              className="
                text-3xl
                font-bold
                text-white
                mb-6
              "
            >
              Hello, I'm Sheik Numan 👋
            </h3>


            <p
              className="
                text-gray-300
                leading-8
                mb-8
              "
            >
              {about.introduction}
            </p>


            <p
              className="
                text-gray-400
                leading-8
                mb-10
              "
            >
              {about.journey}
            </p>


            {/* Education */}

            <div className="mb-10">

              <h4
                className="
                  text-xl
                  font-semibold
                  text-cyan-400
                  mb-3
                "
              >
                Education
              </h4>

              <p className="text-white">
                {about.education.degree}
              </p>

              <p className="text-gray-400">
                {about.education.university}
              </p>

            </div>


            {/* Specializations */}

            <div>

              <h4
                className="
                  text-xl
                  font-semibold
                  text-cyan-400
                  mb-4
                "
              >
                Specializations
              </h4>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {about.specialization.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-400/20
                      text-cyan-300
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* Stats */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            mt-24
          "
        >

          {about.stats.map((stat) => (

            <div
              key={stat.label}
              className="
                rounded-2xl
                bg-white/5
                border
                border-cyan-400/20
                py-8
                text-center
              "
            >

              <h3
                className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  mb-2
                "
              >
                {stat.number}
              </h3>

              <p className="text-gray-300">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default About;