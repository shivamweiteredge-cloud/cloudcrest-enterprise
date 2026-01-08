import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  Users2, 
  Award, 
  BadgeDollarSign, 
  FileCheck, 
  Headphones, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Users2,
    title: 'Expert Team',
    description: 'A team of seasoned professionals with expertise in finance, market research, and project management.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Extensive experience in preparing DPRs for diverse industries and project scales.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Get top-quality services at budget-friendly rates without compromising on quality.',
  },
  {
    icon: FileCheck,
    title: 'Customized Reports',
    description: 'Tailored solutions to suit the requirements of banks, investors, or stakeholders.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    description: 'From data collection to report submission and follow-ups with financial institutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Assured Quality',
    description: 'Experience excellence with our assured quality services that meet your expectations.',
  },
];

const stats = [
  { label: 'Years of Expertise', value: 10, suffix: '+' },
  { label: 'Team Size', value: 25, suffix: '+' },
  { label: 'Active Clients', value: 100, suffix: '+' },
  { label: 'Completed Jobs', value: 500, suffix: '+' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-accent">
      {displayValue}{suffix}
    </span>
  );
};

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Us?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose CloudCrest?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine expertise, technology, and personalized service to
              deliver exceptional results for your business.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground font-medium mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <div className="mt-8 bg-primary rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
                What We Offer
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Dedicated Team',
                  'Transparent Pricing',
                  '24/7 Support',
                  'Proactive Advisory',
                  'Safe & Secure Data',
                  'QuickBooks Certified',
                  'IRS Compliant',
                  'Peace of Mind',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
