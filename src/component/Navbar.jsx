import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react"; // For icons

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={cn(
        "fixed w-full z-40 transition duration-300 pr-9",
        isScrolled ? "bg-NAV shadow-md text-dark" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#hero" className="text-xl font-bold text-primary">
          <span className="relative left-2">
            <span className="text-glow text-foreground">Nayem</span> Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="transition-colors duration-300 text-foreground hover:text-primary"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 flex items-center justify-center p-1 md:hidden text-foreground hover:text-primary"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-md z-30 flex flex-col items-center justify-center space-y-6 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="text-lg transition-colors text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
