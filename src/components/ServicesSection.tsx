import { motion } from 'framer-motion';
import { 
  Building2, 
  BookOpen, 
  Users, 
  Receipt, 
  Globe, 
  Shield, 
  FileText, 
  Scale,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: 'Incorporation Services',
    description:
      'Starting a business in India involves navigating through various legal and regulatory requirements. We specialize in providing seamless incorporation services for diverse business structures.',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping & Reporting',
    description:
      'Accurate and efficient bookkeeping is the cornerstone of any successful business. We provide comprehensive bookkeeping and reporting solutions tailored to meet your unique needs.',
  },
  {
    icon: Users,
    title: 'Payroll Management',
    description:
      'Managing payroll can be time-consuming and complex. We take the hassle out of payroll management, ensuring accuracy, compliance, and timely disbursement.',
  },
  {
    icon: Receipt,
    title: 'GST Compliance & Advisory',
    description:
      'GST has fundamentally transformed the tax landscape in India. Our experts help you navigate GST compliance, filings, and strategic advisory to optimize your tax position.',
  },
  {
    icon: Globe,
    title: 'Tax – Domestic & International',
    description:
      "In today's globalized economy, businesses face complex tax regulations. Whether you're a multinational or domestic business, we simplify your tax challenges.",
  },
  {
    icon: Shield,
    title: 'Internal Audit & Risk Management',
    description:
      "Organizations face numerous challenges in today's dynamic landscape. We help identify risks and implement effective responses to safeguard your success.",
  },
  {
    icon: FileText,
    title: 'IndAS Advisory',
    description:
      'As global capital markets integrate, businesses seize opportunities for international growth. Our IndAS experts help you navigate complex accounting standards.',
  },
  {
    icon: Scale,
    title: 'Company Law & Legal Advisory',
    description:
      'The Companies Act 2013 has transformed the corporate regulatory framework. Our legal experts help your business stay compliant with all governance needs.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions designed to empower your business
            growth and ensure regulatory compliance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
