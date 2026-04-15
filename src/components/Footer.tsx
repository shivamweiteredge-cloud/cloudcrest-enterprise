import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/cloudcrest-logo.png';

const services = [
  { label: 'GST & Tax Advisory', href: '/gst-and-tax-advisory' },
  { label: 'Tax Domestic & International', href: '/tax-domestic-and-international' },
  { label: 'Ind AS Advisory', href: '/ind-as-advisory' },
  { label: 'Company Law Advisory', href: '/company-law-legal-advisory-services' },
  { label: 'Incorporation Services', href: '/incorporation-services' },
  { label: 'Bookkeeping & Reporting', href: '/bookkeeping-and-reporting' },
];

const usefulLinks = [
  { label: 'ITR Portal', href: 'https://www.incometax.gov.in/iec/foportal/' },
  { label: 'GST Portal', href: 'https://www.gst.gov.in/' },
  { label: 'MCA', href: 'https://www.mca.gov.in/' },
  { label: 'CBDT', href: 'https://irsofficersonline.gov.in/' },
  { label: 'CBIC', href: 'https://www.cbic.gov.in/' },
  { label: 'DGFT', href: 'https://www.dgft.gov.in/' },
  { label: 'NSWS', href: 'https://www.nsws.gov.in/' },
  { label: 'TGCT', href: 'https://www.tgct.gov.in/tgportal/' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-primary-foreground/10">
          <div className="lg:col-span-2">
            <Link to="/"><img src={logo} alt="CloudCrest" className="h-12 brightness-0 invert mb-6" /></Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Cloudcrest is a leading firm specializing in virtual accounting, payroll, and taxation services. We excel in delivering financial advisory solutions that ensure full statutory compliance and maximum client satisfaction.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/cloudcrest.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/cloudcrest-business-management/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}><Link to={s.href} className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/our-people" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">Our People</Link></li>
              <li><Link to="/contact-us" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/compliances-calendar" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">Compliances Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors inline-flex items-center gap-1">
                    {link.label}<ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} Cloudcrest Business Management LLP. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
