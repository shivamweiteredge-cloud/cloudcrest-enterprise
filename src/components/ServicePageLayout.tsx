import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

// Software logos
import tallyLogo from "@/assets/tally.png";
import quickbooksLogo from "@/assets/quickbooks.png";
import microsoftLogo from "@/assets/microsoft.png";
import xeroLogo from "@/assets/xero.png";
import sapLogo from "@/assets/sap.png";
import odooLogo from "@/assets/odoo.png";
import waveLogo from "@/assets/wave.png";

const softwareList = [
  { name: "Tally Prime", logo: tallyLogo },
  { name: "QuickBooks", logo: quickbooksLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Xero", logo: xeroLogo },
  { name: "SAP", logo: sapLogo },
  { name: "Odoo", logo: odooLogo },
  { name: "Wave", logo: waveLogo },
];

const faqData = [
  {
    question: "What is the difference between LLP and Company?",
    answer:
      "An LLP offers flexible management and limited liability with fewer compliance requirements, while a Company (Private/Public) has a more structured governance framework, is better suited for raising capital, and involves more regulatory obligations under the Companies Act, 2013.",
  },
  {
    question: "Do you provide industry specific registrations?",
    answer:
      "Yes, we assist businesses with industry-specific registrations, such as GST registration, Import-Export Code (IEC), MSME registration, FSSAI licensing for food businesses, and professional tax registration. Our team ensures accurate and timely filing, making the process seamless and compliant with industry regulations.",
  },
  {
    question: "Does our entity eligible for Start-Up registration?",
    answer:
      "An entity is eligible for startup registration if it is incorporated as a Private Limited Company, LLP, or Partnership Firm, is less than 10 years old, has an annual turnover not exceeding ₹100 crore, and is working towards innovation or improvement of products/services.",
  },
  {
    question:
      "How does Cloudcrest support businesses after incorporation to ensure compliance and proper governance?",
    answer:
      "Cloudcrest provides post-incorporation support including annual ROC filings, board meeting compliance, statutory audit coordination, GST and income tax filings, payroll management, and ongoing advisory to ensure your business remains fully compliant.",
  },
];

interface ServiceItem {
  title: string;
  points: string[];
  icon?: LucideIcon;
}

interface WhyChooseItem {
  text: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  secondaryDescription?: string;
  servicesTitle: string;
  services: ServiceItem[];
  whyChooseTitle?: string;
  whyChooseItems?: WhyChooseItem[];
  whyChooseDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  additionalSections?: React.ReactNode;
}

export const ServicePageLayout = ({
  title,
  subtitle,
  heroImage,
  description,
  secondaryDescription,
  servicesTitle,
  services,
  whyChooseTitle = "Why Choose CloudCrest?",
  whyChooseItems = [],
  whyChooseDescription,
  ctaTitle = "Let Us Simplify for You",
  ctaDescription = "Contact us to know more about our services",
  additionalSections,
}: ServicePageLayoutProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                {subtitle}
              </p>
              <Link to="/contact-us">
                <Button variant="hero" size="xl" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-2xl shadow-2xl w-full max-h-[400px] object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {description}
            </p>
            {secondaryDescription && (
              <p className="text-muted-foreground text-lg leading-relaxed">
                {secondaryDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {service.icon && (
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {additionalSections}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ background: "var(--gradient-primary)" }}>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {ctaTitle}
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              {ctaDescription}
            </p>
            <Link to="/contact-us">
              <Button variant="hero" size="xl">
                Schedule A Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      {whyChooseItems.length > 0 && (
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {whyChooseTitle}
                </h2>
                <ul className="space-y-4">
                  {whyChooseItems.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              {whyChooseDescription && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {whyChooseDescription}
                  </p>
                  <Link to="/contact-us" className="mt-6 inline-block">
                    <Button variant="accent" size="lg">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/5 transition-colors">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Expertise Section */}
      {/* Software Expertise Section */}
      <section className="py-16 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
              Software Expertise
            </h2>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <span className="h-px w-10 bg-muted-foreground/40" />
              <span className="text-sm font-medium">We Have</span>
              <span className="h-px w-10 bg-muted-foreground/40" />
            </div>
          </motion.div>
        </div>

        {/* Sliding Track */}
        <div className="relative w-full">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--secondary) 0%, transparent 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, var(--secondary) 0%, transparent 100%)",
            }}
          />

          <div
            className="flex gap-8 w-max"
            style={{
              animation: "marquee 25s linear infinite",
            }}>
            {/* Double the list for seamless loop */}
            {[...softwareList, ...softwareList].map((software, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-card rounded-xl shadow-md px-8 py-5 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 min-w-[140px] min-h-[100px] gap-3 cursor-pointer">
                <img
                  src={software.logo}
                  alt={software.name}
                  style={{
                    height: "40px",
                    width: "120px",
                    objectFit: "contain",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {software.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
