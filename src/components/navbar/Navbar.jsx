import { useState } from "react";
import personal from "../../data/personal";
import navigation from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (event, link) => {
    event.preventDefault();

    const sectionId = link.replace("#", "");

    // When already on the portfolio homepage,
    // smoothly scroll to the requested section.
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      setMenuOpen(false);
      return;
    }

    // From project/detail pages, return to the portfolio
    // homepage and open the requested section.
    window.location.href = `/#${sectionId}`;
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#030712]/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <a
          href="/#home"
          onClick={(event) =>
            handleNavigation(event, "#home")
          }
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            whitespace-nowrap
          "
        >
          {personal.name}
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:block">
          <ul
            className="
              flex
              items-center
              gap-8
            "
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={`/${item.link}`}
                  onClick={(event) =>
                    handleNavigation(event, item.link)
                  }
                  className="
                    text-gray-300
                    hover:text-cyan-400
                    transition
                    duration-300
                    font-medium
                    whitespace-nowrap
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-11
            h-11
            rounded-xl
            border
            border-white/10
            bg-white/[0.05]
            text-white
            flex
            items-center
            justify-center
            hover:border-cyan-400/40
            hover:text-cyan-400
            transition
            duration-300
          "
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <nav
          className="
            lg:hidden
            border-t
            border-white/10
            bg-[#030712]/95
            backdrop-blur-xl
          "
        >
          <ul
            className="
              px-6
              py-5
              space-y-2
            "
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={`/${item.link}`}
                  onClick={(event) =>
                    handleNavigation(event, item.link)
                  }
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    text-gray-300
                    hover:text-cyan-400
                    hover:bg-white/[0.05]
                    transition
                    duration-300
                    font-medium
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;