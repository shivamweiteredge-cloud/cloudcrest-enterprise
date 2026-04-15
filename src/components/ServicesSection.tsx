import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  BookOpen,
  Users,
  Receipt,
  Globe,
  Shield,
  FileText,
  Scale,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Incorporation Services",
    href: "/incorporation-services",
    description:
      "Starting a business in India involves navigating through various legal and regulatory requirements. We specialize in providing seamless incorporation services for diverse business structures.",
    extra:
      "Whether you're establishing a proprietorship, partnership firm, society, trust, LLP, or a company, we have the expertise to guide you through every step of the process with full compliance and precision.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Reporting",
    href: "/bookkeeping-and-reporting",
    description:
      "Accurate and efficient bookkeeping is the cornerstone of any successful business. We provide comprehensive bookkeeping and reporting solutions tailored to meet your unique needs.",
    extra:
      "Our team ensures your financial records are always up-to-date, audit-ready, and aligned with applicable accounting standards, giving you clear visibility into your business performance.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    href: "/payroll-management-service",
    description:
      "Managing payroll can be time-consuming and complex. We take the hassle out of payroll management, ensuring accuracy, compliance, and timely disbursement.",
    extra:
      "From salary structuring and statutory deductions to PF, ESI, and professional tax compliance, we handle every aspect of payroll so you can focus on growing your business.",
  },
  {
    icon: Receipt,
    title: "GST Compliance & Advisory",
    href: "/gst-and-tax-advisory",
    description:
      "GST has fundamentally transformed the tax landscape in India. Our experts help you navigate GST compliance, filings, and strategic advisory to optimize your tax position.",
    extra:
      "We assist with GST registration, monthly and annual return filings, reconciliation, input tax credit optimization, and representation before GST authorities.",
  },
  {
    icon: Globe,
    title: "Tax – Domestic & International",
    href: "/tax-domestic-and-international",
    description:
      "In today's globalized economy, businesses face complex tax regulations. Whether you're a multinational or domestic business, we simplify your tax challenges.",
    extra:
      "Our tax experts provide end-to-end support for income tax planning, transfer pricing, DTAA benefits, and cross-border transaction advisory to minimize your overall tax burden.",
  },
  {
    icon: Shield,
    title: "Internal Audit & Risk Management",
    href: "/internal-audit-risk-management",
    description:
      "Organizations face numerous challenges in today's dynamic landscape. We help identify risks and implement effective responses to safeguard your success.",
    extra:
      "Our internal audit framework evaluates your internal controls, operational efficiency, and risk exposure — providing actionable insights to strengthen your governance structure.",
  },
  {
    icon: FileText,
    title: "IndAS Advisory",
    href: "/ind-as-advisory",
    description:
      "As global capital markets integrate, businesses seize opportunities for international growth. Our IndAS experts help you navigate complex accounting standards.",
    extra:
      "We support businesses in transitioning to IndAS, preparing compliant financial statements, and training your finance teams on the nuances of Indian Accounting Standards.",
  },
  {
    icon: Scale,
    title: "Company Law & Legal Advisory",
    href: "/company-law-legal-advisory-services",
    description:
      "The Companies Act 2013 has transformed the corporate regulatory framework. Our legal experts help your business stay compliant with all governance needs.",
    extra:
      "From board meeting compliance and secretarial audits to ROC filings and legal advisory on corporate restructuring, we ensure your company stays ahead of regulatory requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
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
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onClick={() => navigate(service.href)}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                {service.description}
              </p>

              {/* Expandable Extra Text */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-muted-foreground text-sm leading-relaxed mb-3 overflow-hidden">
                    {service.extra}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Read More Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(service.href);
                }}
                className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all mt-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
