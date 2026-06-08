import { useEffect, useState } from "react";
// import logoImage from "@/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 top-0 left-0 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center gap-2">
          {/* <img src={logoImage} className="h-12" alt="Logo" /> */}
          <span
            className={`text-xl font-semibold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            TerraHive
          </span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>

        <div
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            ${scrolled ? "bg-white" : "bg-primary md:bg-transparent"}
            transition-all duration-300 overflow-hidden
            ${
              isOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
            }
          `}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 md:p-0">
            <li>
              <a
                href="#"
                className={`
                      block py-2 px-4 rounded-md transition
                      ${
                        scrolled
                          ? "text-black hover:bg-primary hover:text-white transition duration-300"
                          : "text-white hover:bg-white/10 md:hover:bg-primary md:hover:text-white transition duration-300"
                      }
                    `}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`
                      block py-2 px-4 rounded-md transition
                      ${
                        scrolled
                          ? "text-black hover:bg-primary hover:text-white transition duration-300"
                          : "text-white hover:bg-white/10 md:hover:bg-primary md:hover:text-white transition duration-300"
                      }
                    `}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`
                      block py-2 px-4 rounded-md transition
                      ${
                        scrolled
                          ? "text-black hover:bg-primary hover:text-white transition duration-300"
                          : "text-white hover:bg-white/10 md:hover:bg-primary md:hover:text-white transition duration-300"
                      }
                    `}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#properties"
                className={`
                      block py-2 px-4 rounded-md transition
                      ${
                        scrolled
                          ? "text-black hover:bg-primary hover:text-white transition duration-300"
                          : "text-white hover:bg-white/10 md:hover:bg-primary md:hover:text-white transition duration-300"
                      }
                    `}
              >
                Properties
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
