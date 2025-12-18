import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Technik<span className="text-muted-foreground">Designs</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Crafting digital experiences that blend aesthetics with functionality. 
              We transform ideas into impactful designs.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dribbble
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Behance
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Technik Designs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
