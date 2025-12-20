import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-tight">Technik Designs</h3>
            <p className="text-sm opacity-70">
              Innovative technical solutions for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/services" className="hover:opacity-100 transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:opacity-100 transition">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:opacity-100 transition">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/about" className="hover:opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:opacity-100 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@tekniksolutions.com"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>&copy; {currentYear} Technik Designs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
