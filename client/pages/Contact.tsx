import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Let's create
              something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-accent" size={24} />
                    <h3 className="text-lg font-bold">Email</h3>
                  </div>
                  <p className="text-muted-foreground">
                    hello@designstudio.com
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="text-accent" size={24} />
                    <h3 className="text-lg font-bold">Phone</h3>
                  </div>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Monday to Friday, 9am to 6pm
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-accent" size={24} />
                    <h3 className="text-lg font-bold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    123 Design Street
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:border-accent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:border-accent transition-colors"
                        placeholder="Project details"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Send Message
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <h3 className="text-lg font-bold mb-3">
                  What's your typical project timeline?
                </h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. Typically,
                  projects range from 4 to 12 weeks. We'll provide a detailed
                  timeline during our discovery process.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="text-lg font-bold mb-3">
                  Do you offer revisions?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We include revision rounds in our design process to
                  ensure you're completely satisfied with the final deliverables.
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="text-lg font-bold mb-3">
                  What industries do you work with?
                </h3>
                <p className="text-muted-foreground">
                  We work with clients across various industries including tech,
                  healthcare, finance, e-commerce, and more. Our diverse portfolio
                  means we understand different market needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">
                  How do we get started?
                </h3>
                <p className="text-muted-foreground">
                  Simple! Just fill out the form above or give us a call. We'll
                  schedule a discovery call to discuss your project and
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
