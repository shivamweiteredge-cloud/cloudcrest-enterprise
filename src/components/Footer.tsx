import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/cloudcrest-logo.png';

const services = [
  { label: 'GST & Tax Advisory', href: '#services' },
  { label: 'Tax Domestic & International', href: '#services' },
  { label: 'Ind AS Advisory', href: '#services' },
  { label: 'Company Law Advisory', href: '#services' },
  { label: 'Incorporation Services', href: '#services' },
  { label: 'Other Business Support', href: '#services' },
];

const insights = [
  { label: 'Tax Insights', href: '#' },
  { label: 'GST Insights', href: '#' },
  { label: 'IND AS', href: '#' },
];

const usefulLinks = [
  { label: 'ITR Portal', href: 'https://www.incometax.gov.in/iec/foportal/', external: true },
  { label: 'GST Portal', href: 'https://www.gst.gov.in/', external: true },
  { label: 'MCA', href: 'https://www.mca.gov.in/', external: true },
  { label: 'CBDT', href: 'https://irsofficersonline.gov.in/', external: true },
  { label: 'DGFT', href: 'https://www.dgft.gov.in/', external: true },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-primary-foreground/10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="CloudCrest" className="h-12 brightness-0 invert mb-6" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Cloudcrest is a leading firm specializing in virtual accounting,
              payroll, and taxation services. We excel in delivering financial
              advisory solutions that ensure full statutory compliance and
              maximum client satisfaction.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cloudcrest.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cloudcrest-business-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Our Insights
            </h4>
            <ul className="space-y-2">
              {insights.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-primary-foreground mb-4 mt-8">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Cloudcrest Business Management LLP. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
