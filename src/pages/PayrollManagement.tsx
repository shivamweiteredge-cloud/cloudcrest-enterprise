import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Calculator, Shield, Receipt, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Salary Computation and Processing',
    icon: Calculator,
    points: [
      'Salary computation ensures accurate calculation of employee wages, including deductions for taxes, benefits, and overtime.',
      'Processing salaries on time maintains employee satisfaction, ensures compliance with labor laws, and supports smooth business operations.',
    ],
  },
  {
    title: 'Statutory Compliance (PF, ESI, TDS)',
    icon: Shield,
    points: [
      'Managing PF, ESI, and TDS by ensuring accurate calculation, deductions, and timely filing of returns.',
      'Assist with registration, maintaining employee accounts, and ensuring adherence to relevant labour laws to avoid penalties.',
    ],
  },
  {
    title: 'Managing Employee Reimbursements & Benefits',
    icon: Receipt,
    points: [
      'Ensures timely processing of claims for work-related expenses, such as travel or office supplies, in compliance with company policies.',
      'Administering employee benefits, like health insurance or retirement plans, ensures employees receive the agreed-upon perks.',
    ],
  },
  {
    title: 'Payroll Tax Filings & Year-End Reporting',
    icon: FileText,
    points: [
      'Handling payroll tax filings involves calculating and submitting taxes like income tax, social security to the appropriate authorities on time.',
      'Year-end reporting includes generating forms like Form 16, summarizing employee earnings and taxes.',
    ],
  },
  {
    title: 'Attendance and Leave Management Integration',
    icon: Clock,
    points: [
      'Automates the tracking of employee working hours, attendance, and leave balances for accurate payroll processing.',
      'Ensures compliance with company policies and labor laws, streamlining the approval process for leave requests.',
    ],
  },
];

const benefitItems = [
  { title: 'Time Savings', desc: 'Free up your valuable time by outsourcing payroll tasks.' },
  { title: 'Cost Efficiency', desc: 'Reduce overhead costs associated with in-house payroll management.' },
  { title: 'Error-Free Payroll', desc: 'Minimize errors and avoid penalties with our meticulous processes.' },
  { title: 'Employee Satisfaction', desc: 'Timely and accurate payroll fosters trust and satisfaction among employees.' },
  { title: 'Regulatory Compliance', desc: 'Stay up-to-date with evolving labour laws and tax regulations.' },
];

const PayrollManagement = () => {
  return (
    <ServicePageLayout
      title="Payroll Management Services"
      subtitle="Streamline Payroll, Empower Your Workforce"
      description="Managing payroll can be time-consuming and complex, but it's a critical function for any business. At Cloudcrest, we take the hassle out of payroll management, ensuring accuracy, compliance, and timely disbursement to keep your team motivated and to run your business operations efficiently."
      servicesTitle="Our Payroll Services Include"
      services={services}
      whyChooseTitle="Why Cloudcrest Stands Out"
      whyChooseItems={[
        { text: 'We understand that payroll is more than just disbursing salaries—it\'s about ensuring employee satisfaction and regulatory compliance.' },
        { text: 'Our dedicated team and state-of-the-art systems make payroll management stress-free.' },
        { text: 'Let us handle your payroll so you can focus on what matters most—your business growth.' },
      ]}
      whyChooseDescription="At Cloudcrest, we understand that payroll is more than just disbursing salaries—it's about ensuring employee satisfaction and regulatory compliance. Our dedicated team and state-of-the-art systems make payroll management stress-free, allowing you to focus on growing your business."
      additionalSections={
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Benefits of Our Payroll Solutions
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefitItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
};

export default PayrollManagement;
