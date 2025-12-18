import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layout, Smartphone, PenTool, Image, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/Layout";

const services = [
  {
    icon: Layout,
    title: "UI Design",
    description: "Beautiful, intuitive interfaces that users love. We craft every pixel with purpose, ensuring your product looks stunning and functions flawlessly.",
  },
  {
    icon: Smartphone,
    title: "UX Design",
    description: "User experiences that feel natural. Through research and testing, we create journeys that guide users effortlessly toward their goals.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive websites that make an impact. We design for all devices, ensuring your brand shines everywhere your audience is.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that tell your story. From logos to color systems, we build brands that connect and resonate.",
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom illustrations that bring concepts to life. We create unique visual elements that set your brand apart from the competition.",
  },
  {
    icon: Image,
    title: "Print Design",
    description: "Marketing materials that leave lasting impressions. From business cards to brochures, we design for the physical world.",
  },
];

const Services = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Design solutions for
              <br />
              <span className="text-muted-foreground">every challenge</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of design services to help your brand stand out 
              and connect with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-all group"
              >
                <service.icon className="h-8 w-8 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground">
              A structured approach that ensures consistent, high-quality results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Understanding your goals and challenges" },
              { step: "02", title: "Define", desc: "Establishing the strategy and direction" },
              { step: "03", title: "Design", desc: "Creating and refining the solution" },
              { step: "04", title: "Deliver", desc: "Launching and supporting your success" },
            ].map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <span className="text-4xl font-light text-muted-foreground">{item.step}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Services;
