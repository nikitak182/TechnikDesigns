import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Index() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive digital experiences that users love. From wireframes to polished interfaces.",
      icon: "🎨",
    },
    {
      title: "Graphic Design",
      description:
        "Bold, creative designs that communicate your brand message with impact and clarity.",
      icon: "✨",
    },
    {
      title: "Branding",
      description:
        "Building cohesive brand identities that resonate with your audience and stand out.",
      icon: "⭐",
    },
    {
      title: "Web Design",
      description:
        "Modern, responsive websites that look stunning on every device and convert.",
      icon: "🌐",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "UI/UX Design",
      description: "A seamless shopping experience redesign",
    },
    {
      title: "SaaS Dashboard",
      category: "Product Design",
      description: "Complex data visualization made simple",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete visual identity system",
    },
    {
      title: "Mobile App",
      category: "UI Design",
      description: "Award-winning mobile application",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium">Welcome to Technik Solutions</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Innovative Tech
              <br />
              <span className="text-accent">Solutions for Growth</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We deliver cutting-edge technical solutions that transform businesses. From conception to implementation, we drive innovation and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive design solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-border hover:border-accent/50 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  A selection of our best work
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all mt-4 md:mt-0"
              >
                View All Projects
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-colors">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🎯</div>
                      <p className="text-sm text-muted-foreground">
                        Project Showcase
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life. Get in touch to discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
