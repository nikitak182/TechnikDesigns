import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Design with purpose,
              <br />
              <span className="text-muted-foreground">craft with care</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate designers dedicated to creating meaningful digital experiences 
              that connect brands with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Technik Designs was founded with a simple belief: great design should be accessible to everyone. 
                  We combine strategic thinking with creative execution to deliver solutions that matter.
                </p>
                <p>
                  Our approach is rooted in understanding—we listen, research, and collaborate closely with our 
                  clients to ensure every project reflects their unique vision and goals.
                </p>
                <p>
                  From startups to established brands, we've partnered with diverse clients to create 
                  experiences that resonate and inspire action.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-background border border-border rounded-lg text-center">
                <span className="text-4xl font-semibold">50+</span>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div className="p-6 bg-background border border-border rounded-lg text-center">
                <span className="text-4xl font-semibold">30+</span>
                <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
              </div>
              <div className="p-6 bg-background border border-border rounded-lg text-center">
                <span className="text-4xl font-semibold">5+</span>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-background border border-border rounded-lg text-center">
                <span className="text-4xl font-semibold">100%</span>
                <p className="text-sm text-muted-foreground mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
              <p className="text-muted-foreground">
                We believe in removing the unnecessary to focus on what truly matters. 
                Simple solutions are often the most effective.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                The best work comes from partnership. We work closely with our clients, 
                treating every project as a shared journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to quality in every detail. From concept to delivery, 
                we hold ourselves to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
