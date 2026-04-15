import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Scale, FileText, Shield, Users, BookOpen, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Company Law and Secretarial Services',
    icon: Scale,
    points: [
      'End-to-end compliance with the Companies Act 2013.',
      'Expert assistance in company formation, governance, and regulatory filings.',
    ],
  },
  {
    title: 'Labour Law Compliance Review & Risk Management',
    icon: Shield,
    points: [
      'Comprehensive assessment and management of compliance risks related to labour laws.',
    ],
  },
  {
    title: 'Commercial Documentation',
    icon: FileText,
    points: [
      'Drafting, reviewing, and managing legal documents tailored to your business needs.',
    ],
  },
  {
    title: 'Compliance Services',
    icon: BookOpen,
    points: [
      'Incorporation of new companies and LLPs in India and abroad.',
      'Conversion of companies/partnerships into LLPs and vice versa.',
      'E-filing of returns and documents with regulatory authorities.',
      'Comprehensive secretarial compliance services, including record reviews and updates.',
      'Representing clients before the Central Government, Company Law Board, and other authorities.',
      'Assistance in convening and conducting board meetings, shareholder meetings, and more.',
      'Winding up or dissolution of companies and LLPs.',
    ],
  },
  {
    title: 'Commercial Law Advisory Services',
    icon: Briefcase,
    points: [
      'Impact analysis of the Companies Act 2013 on your business operations.',
      'Advisory on corporate laws, SEBI regulations, FEMA, labour laws, and allied laws.',
      'Support for mergers, amalgamations, joint ventures, absorption, and external reconstruction.',
      'Designing and auditing legal compliance frameworks for businesses.',
      'Drafting and reviewing joint venture agreements, shareholders\' agreements, foreign collaboration documents.',
    ],
  },
  {
    title: 'Intellectual Property Rights (IPR) Services',
    icon: Shield,
    points: [
      'Assistance in registration, renewal, and enforcement of trademarks.',
      'Drafting royalty agreements and advising on IPR-related matters.',
    ],
  },
  {
    title: 'Employment Law Advisory',
    icon: Users,
    points: [
      'Drafting codes of conduct, HR policies, and employment contracts.',
    ],
  },
];

const CompanyLawAdvisory = () => {
  return (
    <ServicePageLayout
      title="Company Law & Legal Advisory Services"
      subtitle="Expert Legal Advisory for Corporate Governance"
      description="The Companies Act 2013 has significantly transformed the corporate regulatory framework in India, introducing changes with wide-reaching implications. At Cloudcrest, our team of legal advisory experts is equipped to help your business stay compliant while addressing all your company law and corporate governance needs."
      secondaryDescription="We offer comprehensive compliance and advisory services covering company law, Securities and Exchange Board of India (SEBI) regulations, and other corporate laws. From representation before the Registrar of Companies (RoC) to handling commercial and legal documentation, we ensure seamless support for your legal and regulatory requirements."
      servicesTitle="Our Legal Support Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expertise in Compliance: Deep understanding of company law and regulatory frameworks.' },
        { text: 'Tailored Solutions: Services customized to suit your specific business requirements.' },
        { text: 'End-to-End Support: From incorporation to dissolution and everything in between.' },
        { text: 'Proactive Approach: Helping you stay ahead of legal changes and mitigate compliance risks.' },
      ]}
      whyChooseDescription="Let us take the complexity out of corporate regulations and help your business thrive. Contact Cloudcrest today to explore how our Company Law & Legal Advisory Services can empower your business."
    />
  );
};

export default CompanyLawAdvisory;
