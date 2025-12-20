import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies to deliver forward-thinking solutions.",
    },
    {
      title: "Excellence",
      description:
        "Every solution is built with precision, reliability, and performance in mind.",
    },
    {
      title: "Partnership",
      description:
        "We work closely with clients to understand their goals and exceed expectations.",
    },
    {
      title: "Results",
      description:
        "We focus on measurable outcomes that drive sustainable business growth.",
    },
  ];

  const team = [
    { name: "Nikita Kadam", role: "Founder & Product Designer", emoji: "👩‍🎨" },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              About Technik Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're a team of innovative technologists dedicated to delivering
              transformative solutions that drive business growth and digital excellence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded in 2015, Technik Solutions emerged from a vision to make advanced technology
              accessible to businesses of all sizes. What started as a small tech consultancy has
              grown into a trusted partner for hundreds of organizations worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We've helped startups scale rapidly, enterprises optimize operations, and innovators
              bring ambitious ideas to life. Every project is an opportunity to prove that smart
              technology and strategic thinking create lasting business impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue to push technological boundaries while staying true to our core
              values: innovation, collaboration, and excellence.
            </p>
          </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl aspect-square flex items-center justify-center text-6xl">
                🎨
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 rounded-xl border border-border">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xs mx-auto">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl border border-border hover:border-accent/50 transition-all"
                >
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-foreground text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Interested in collaborating? We'd love to hear about your project.
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
