import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { OurPeopleSection } from '@/components/OurPeopleSection';
import { motion } from 'framer-motion';

const OurPeople = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our People
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Meet the talented team behind CloudCrest's success.
          </motion.p>
        </div>
      </section>
      <OurPeopleSection />
      <Footer />
    </div>
  );
};

export default OurPeople;
