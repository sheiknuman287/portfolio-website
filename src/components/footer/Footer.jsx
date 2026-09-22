import personal from "../../data/personal";
import Container from "../ui/Container";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#030712]
        py-10
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          {/* Left */}

          <div className="text-center md:text-left">
            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              {personal.name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Full Stack Developer • ML & AI Engineer
            </p>
          </div>

          {/* Social Links */}

          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-400
                hover:text-cyan-400
                transition
                duration-300
              "
            >
              GitHub
            </a>

            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  transition
                  duration-300
                "
              >
                LinkedIn
              </a>
            )}

            <a
              href={`mailto:${personal.email}`}
              className="
                text-gray-400
                hover:text-cyan-400
                transition
                duration-300
              "
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-8
            pt-6
            border-t
            border-white/10
            text-center
          "
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;