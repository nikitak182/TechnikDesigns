import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="text-6xl mb-6">🎨</div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Sorry, the page you're looking for doesn't exist. Let's get you back
            on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Back to Home
            <ArrowRight size={20} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
