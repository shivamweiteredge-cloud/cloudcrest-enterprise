import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const complianceEvents = [
  { date: 'May 7', title: 'TDS/TCS Payment', description: 'Due date for deposit of TDS/TCS for April' },
  { date: 'May 11', title: 'GSTR-1 (Monthly)', description: 'Due date for filing GSTR-1 for April (Monthly filers)' },
  { date: 'May 13', title: 'GSTR-1 IFF', description: 'Invoice Furnishing Facility for QRMP filers' },
  { date: 'May 15', title: 'PF/ESI Payment', description: 'Due date for PF and ESI payment for April' },
  { date: 'May 20', title: 'GSTR-3B (Monthly)', description: 'Due date for filing GSTR-3B for April (Monthly filers)' },
  { date: 'May 25', title: 'GST PMT-06', description: 'Due date for GST PMT-06 for QRMP scheme filers' },
  { date: 'May 30', title: 'TDS Return (Q4)', description: 'Due date for filing TDS Return for Q4 (Jan-Mar)' },
  { date: 'May 31', title: 'Form 16 Issuance', description: 'Due date for issuing Form 16 to employees for FY 2024-25' },
  { date: 'Jun 7', title: 'TDS/TCS Payment', description: 'Due date for deposit of TDS/TCS for May' },
  { date: 'Jun 11', title: 'GSTR-1 (Monthly)', description: 'Due date for filing GSTR-1 for May' },
  { date: 'Jun 15', title: 'PF/ESI Payment', description: 'Due date for PF and ESI payment for May' },
  { date: 'Jun 15', title: 'Advance Tax (Q1)', description: 'First installment of advance tax for FY 2025-26' },
  { date: 'Jun 20', title: 'GSTR-3B (Monthly)', description: 'Due date for filing GSTR-3B for May' },
  { date: 'Jun 30', title: 'GST Annual Return', description: 'Due date for filing GSTR-9/9C for FY 2023-24' },
  { date: 'Jul 7', title: 'TDS/TCS Payment', description: 'Due date for deposit of TDS/TCS for June' },
  { date: 'Jul 15', title: 'PF/ESI Payment', description: 'Due date for PF and ESI payment for June' },
  { date: 'Jul 31', title: 'ITR Filing', description: 'Due date for filing Income Tax Returns (non-audit cases) for FY 2024-25' },
];

const CompliancesCalendar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
          >
            Compliances Calendar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            Stay on top of your tax, GST, and compliance deadlines with our comprehensive calendar.
          </motion.p>
        </div>
      </section>

      {/* Calendar Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4 inline mr-2" />
              Upcoming Deadlines
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Key Compliance Dates
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {complianceEvents.map((event, index) => (
              <motion.div
                key={`${event.date}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <span className="text-xs text-primary-foreground/80 block">{event.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold text-primary-foreground block leading-tight">{event.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Need help with any of these compliances? Our team is here to assist you.
            </p>
            <Link to="/contact-us">
              <Button variant="accent" size="lg">
                Get Help <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancesCalendar;
