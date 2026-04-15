import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const OtherInsights = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Other Business Insights
        </h1>
        <p className="text-muted-foreground">
          Latest updates on other business topics.
        </p>
      </main>
      <Footer />
    </>
  );
};
export default OtherInsights;
