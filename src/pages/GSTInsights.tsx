import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const GSTInsights = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-4">GST Insights</h1>
        <p className="text-muted-foreground">
          Latest updates and insights on GST.
        </p>
      </main>
      <Footer />
    </>
  );
};
export default GSTInsights;
