import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Fintech Mobile App",
    category: "UI/UX Design",
    description: "A comprehensive mobile banking experience designed for the modern user.",
    image: project1,
  },
  {
    title: "Artisan Coffee Brand",
    category: "Brand Identity",
    description: "Complete brand identity for a specialty coffee roaster, from logo to packaging.",
    image: project2,
  },
  {
    title: "E-commerce Platform",
    category: "Web Design",
    description: "A clean, conversion-focused online store for a sustainable fashion brand.",
    image: project3,
  },
  {
    title: "Analytics Dashboard",
    category: "UI Design",
    description: "Data visualization interface for a SaaS analytics platform.",
    image: project4,
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Selected projects
              <br />
              <span className="text-muted-foreground">we're proud of</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A curated collection of our recent work across UI/UX and graphic design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-secondary mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Like what you see?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's create something amazing together.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
