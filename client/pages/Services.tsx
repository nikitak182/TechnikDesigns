import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "User-centered design that creates delightful digital experiences.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design Systems",
        "Mobile & Web Optimization",
      ],
    },
    {
      title: "Graphic Design",
      icon: "✨",
      description: "Bold, creative designs that communicate your brand message.",
      features: [
        "Logo & Brand Identity",
        "Marketing Collateral",
        "Packaging Design",
        "Illustrations",
        "Social Media Assets",
        "Print Design",
      ],
    },
    {
      title: "Branding",
      icon: "⭐",
      description:
        "Comprehensive brand strategies that build lasting connections.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Messaging & Positioning",
        "Brand Refresh",
        "Brand Storytelling",
      ],
    },
    {
      title: "Web Design",
      icon: "🌐",
      description: "Modern, responsive websites that convert visitors to customers.",
      features: [
        "Website Design",
        "E-Commerce Design",
        "Responsive Development",
        "SEO Optimization",
        "Performance Optimization",
        "CMS Integration",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery",
      description: "We learn about your business, audience, and goals.",
    },
    {
      step: 2,
      title: "Strategy",
      description: "We develop a clear design strategy and approach.",
    },
    {
      step: 3,
      title: "Design",
      description: "We create beautiful, functional design solutions.",
    },
    {
      step: 4,
      title: "Refine",
      description: "We iterate and perfect based on your feedback.",
    },
    {
      step: 5,
      title: "Deliver",
      description: "We provide all assets and documentation you need.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive design solutions tailored to your unique needs and
              business goals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-border hover:border-accent/50 hover:bg-muted/50 transition-all"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A collaborative approach to design excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {process.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 rounded-xl border border-border h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's discuss which services are right for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
