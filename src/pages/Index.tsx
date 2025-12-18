import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Design Studio
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6">
              We craft digital
              <br />
              <span className="text-muted-foreground">experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Technik Designs is a creative studio specializing in UI/UX and graphic design. 
              We transform complex ideas into elegant, user-centered solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Services tailored to your needs
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-4xl font-light text-muted-foreground">01</span>
              <h3 className="text-xl font-semibold mt-4 mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                User-centered interfaces that are intuitive, accessible, and visually compelling.
              </p>
            </div>
            <div className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-4xl font-light text-muted-foreground">02</span>
              <h3 className="text-xl font-semibold mt-4 mb-3">Graphic Design</h3>
              <p className="text-muted-foreground">
                Brand identities, marketing materials, and visual systems that communicate your story.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="ghost">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Ready to start your project?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's collaborate to bring your vision to life. We're here to help you create something remarkable.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
