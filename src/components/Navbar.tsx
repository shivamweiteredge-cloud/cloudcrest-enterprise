import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cloudcrest-logo.png";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import team4 from "@/assets/team4.png";
import team5 from "@/assets/team5.png";
import team6 from "@/assets/team6.png";
import microsoft from "@/assets/microsoft.png";
import adda from "@/assets/adda.png";
import zoho from "@/assets/zoho.png";
const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Incorporation Services", href: "#services" },
      { label: "Bookkeeping & Reporting", href: "#services" },
      { label: "Payroll Management", href: "#services" },
      { label: "GST Compliance", href: "#services" },
      { label: "Tax Advisory", href: "#services" },
      { label: "IndAS Advisory", href: "#services" },
      { label: "Internal Audit & Risk Management", href: "#services" },
      { label: "Company Law & Legal Advisory Services", href: "#services" },
    ],
  },
  {
    label: "Consulting",
    href: "#consulting",
    children: [
      { label: "Tax Representation", href: "#consulting" },
      { label: "Virtual CFO", href: "#consulting" },
      { label: "Feasibility Reports", href: "#consulting" },
    ],
  },
  {
    label: "Our Insights",
    href: "#ourinsights",
    children: [
      { label: "Tax Insights", href: "#insights" },
      { label: "GST Insights", href: "#insights" },
      { label: "IndAS Insights", href: "#insights" },
      { label: "Other Business Insights", href: "#insights" },
    ],
  },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Our People", href: "#people" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="CloudCrest" className="h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}>
              <a
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                  isScrolled
                    ? "text-foreground hover:text-accent hover:bg-accent/10"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}>
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>

              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-xl border border-border overflow-hidden">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">
                        {child.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant={isScrolled ? "outline" : "hero-outline"} size="sm">
            Compliances Calendar
          </Button>
          <Button variant={isScrolled ? "accent" : "hero"} size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline">Compliances Calendar</Button>
                <Button variant="accent">Get Started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
