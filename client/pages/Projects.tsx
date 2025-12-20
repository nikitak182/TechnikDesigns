import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "UI/UX Design",
      description: "A complete redesign of an online shopping experience",
      emoji: "🛍️",
      tags: ["UI/UX", "Web Design"],
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Product Design",
      description:
        "Complex data visualization and user interface design for analytics",
      emoji: "📊",
      tags: ["UI/UX", "Product Design"],
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      description: "Complete visual identity system and brand guidelines",
      emoji: "🎯",
      tags: ["Branding", "Graphic Design"],
    },
    {
      id: 4,
      title: "Mobile App",
      category: "App Design",
      description: "Award-winning fitness tracking mobile application",
      emoji: "📱",
      tags: ["UI/UX", "Mobile"],
    },
    {
      id: 5,
      title: "Restaurant Branding",
      category: "Graphic Design",
      description: "Logo, packaging, and collateral design for a fine dining",
      emoji: "🍽️",
      tags: ["Branding", "Graphic Design"],
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Design",
      description: "Modern, responsive website for a tech consulting firm",
      emoji: "🌐",
      tags: ["Web Design", "UI/UX"],
    },
  ];

  const categories = [
    "all",
    "UI/UX",
    "Branding",
    "Graphic Design",
    "Web Design",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of our best work across various industries and design
              disciplines.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    activeFilter === cat
                      ? "bg-accent text-accent-foreground"
                      : "border border-border hover:border-accent/50 text-foreground"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-colors">
                    <div className="text-6xl">{project.emoji}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Want to Collaborate?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always excited to work on new and interesting projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Let's Work Together
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
