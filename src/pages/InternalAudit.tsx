import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Shield, Search, Monitor, FileCheck, Leaf, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Internal and Management Audit',
    icon: Search,
    points: ['Comprehensive assessment of internal controls and operational processes.'],
  },
  {
    title: 'Enterprise Risk Management (ERM)',
    icon: Shield,
    points: ['Identifying, evaluating, and mitigating risks to achieve strategic objectives.'],
  },
  {
    title: 'Techno-Commercial and Concurrent Review',
    icon: Monitor,
    points: ['Ensuring optimal alignment of technological and operational processes.'],
  },
  {
    title: 'Due Diligence Reviews',
    icon: FileCheck,
    points: ['Assessing financial, operational, and compliance risks during mergers and acquisitions.'],
  },
  {
    title: 'IT Risk and Advisory',
    icon: Monitor,
    points: ['Identifying vulnerabilities in IT systems and suggesting robust cybersecurity solutions.'],
  },
  {
    title: 'Compliance Review',
    icon: Scale,
    points: ['Ensuring adherence to regulatory requirements and internal policies.'],
  },
  {
    title: 'Carbon & Sustainability Risk Advisory',
    icon: Leaf,
    points: ['Guiding businesses on managing environmental risks and sustainability compliance.'],
  },
];

const methodologies = [
  'Standard Operating Procedures (SOPs): Establishing clear processes for consistency and efficiency.',
  'Client-Specific Toolkits: Supporting multi-location engagements with tailored solutions.',
  'Data Analytics Tools: Utilizing CAATs like ACL and IDEA for precise sampling and analytics.',
  'Research-Based Checklists: Ensuring thorough evaluations aligned with industry standards.',
  'Customized Reporting: Delivering actionable insights to various management levels.',
];

const helpItems = [
  'Critical Evaluation of Internal Controls: Identifying gaps and recommending improvements.',
  'Operational Reviews: Providing constructive feedback to optimize performance.',
  'Cost Reduction & Revenue Optimization: Identifying opportunities to enhance financial efficiency.',
  'System and Procedure Evaluation: Reviewing IT and operational systems for improvements.',
  'Risk Assessment & Mitigation: Identifying risks and suggesting mitigation strategies.',
  'Regulatory Compliance: Ensuring adherence to legal and operational guidelines.',
  'Corporate Governance Support: Assisting with governance requirements under the Companies Act, 2013.',
];

const InternalAudit = () => {
  return (
    <ServicePageLayout
      title="Internal Audit & Risk Management"
      subtitle="Tailored Expertise to Minimize Risks and Maximize Returns"
      description="In today's dynamic business landscape, organizations face numerous challenges such as the global banking crisis, cybercrime, shifting market dynamics, and heightened stakeholder accountability. Identifying risks and implementing effective responses early is critical to safeguarding your organization's success."
      secondaryDescription="At Cloudcrest, we specialize in providing comprehensive Internal Audit and Risk Management solutions designed to enhance operational efficiency, ensure regulatory compliance, and fortify corporate governance."
      servicesTitle="Our Internal Audit & Risk Management Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expertise in serving diverse industries and geographies.' },
        { text: 'Advanced methodologies and tools for accurate analysis.' },
        { text: 'Proactive guidance to navigate regulatory and operational challenges.' },
        { text: 'Commitment to enhancing governance, compliance, and efficiency.' },
      ]}
      whyChooseDescription="Partner with us to build a resilient organisation that thrives amidst uncertainty. Contact us today to learn how our Internal Audit and Risk Management services can drive your business forward."
      additionalSections={
        <>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Methodologies and Tools</h2>
                  <ul className="space-y-3">
                    {methodologies.map((m, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">How Cloudcrest Can Help</h2>
                  <ul className="space-y-3">
                    {helpItems.map((h, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default InternalAudit;
