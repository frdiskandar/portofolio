import { useState } from "react";
import { motion as M} from "motion/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {Link} from 'react-scroll'

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Portofolio", to: "/portofolio" },
  { label: "Contact", target: "footer" },
];

function Navigation({ onNavigate }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <ul className="nav-ul">
      {navItems.map(({ label, target, to }) => (
        <li key={label} className="nav-li">
          {to ? (
            <RouterLink className="nav-link" to={to} onClick={onNavigate}>
              {label}
            </RouterLink>
          ) : isHome ? (
            <Link
              className="nav-link"
              to={target}
              smooth={true}
              duration={500}
              onClick={onNavigate}
            >
              {label}
            </Link>
          ) : (
            <RouterLink
              className="nav-link"
              to="/"
              state={{ scrollTo: target }}
              onClick={onNavigate}
            >
              {label}
            </RouterLink>
          )}
        </li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <RouterLink
            to="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={closeMenu}
          >
            FRD_DEV
          </RouterLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onNavigate={closeMenu} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <M.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onNavigate={closeMenu} />
          </nav>
        </M.div>
      )}
    </div>
  );
};

export default Navbar;
