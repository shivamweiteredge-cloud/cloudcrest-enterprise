import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Building2, Users, Briefcase, FileText, Heart, BookOpen, Award } from 'lucide-react';

const services = [
  {
    title: 'Proprietorship Firm',
    icon: Building2,
    points: [
      'Assistance in registering your sole proprietorship, obtaining required licenses, and setting up a current account.',
      'Advisory on compliance with GST, income tax, and other applicable regulations.',
    ],
  },
  {
    title: 'Partnership Firms',
    icon: Users,
    points: [
      'Drafting and registering the partnership deed with the Registrar of Firms.',
      'Guidance on partnership taxation and compliance.',
      'Support in amendments, retirement, or dissolution processes.',
    ],
  },
  {
    title: 'Limited Liability Partnership (LLP)',
    icon: Briefcase,
    points: [
      'Assistance with LLP incorporation under the LLP Act, 2008.',
      'Drafting and filing the LLP agreement with the Ministry of Corporate Affairs (MCA).',
      'Advisory on compliance, annual filings, and LLP amendments.',
    ],
  },
  {
    title: 'Private and Public Limited Companies',
    icon: Building2,
    points: [
      'Comprehensive incorporation services for companies under the Companies Act, 2013.',
      'Assistance in name approval, drafting MOA/AOA, and filing incorporation forms with MCA.',
      'Support with obtaining PAN, TAN, and GST registrations.',
    ],
  },
  {
    title: 'Society Registration',
    icon: Heart,
    points: [
      'Guidance on registering societies under the Societies Registration Act, 1860.',
      'Assistance in drafting the Memorandum of Association (MOA) and Rules and Regulations.',
      'Support for renewals and compliance with regulatory requirements.',
    ],
  },
  {
    title: 'Trust Registration',
    icon: BookOpen,
    points: [
      'Advisory on setting up public or private charitable trusts.',
      'Assistance with trust deed drafting and registration.',
      'Guidance on obtaining 12A and 80G certifications for tax exemptions.',
    ],
  },
  {
    title: 'Other Registrations',
    icon: Award,
    points: [
      'Obtaining Drug license from CDSCO, Licenses from DoT, Patents, Trade Marks, Registration as a Startup Business etc.',
      'General registrations: Labour, Food, PF, ESI, PT, State Excise duties etc.',
    ],
  },
];

const IncorporationServices = () => {
  return (
    <ServicePageLayout
      title="Incorporation Services"
      subtitle="Simplifying Business Formation with Comprehensive Solutions"
      description="Starting a business in India involves navigating through various legal and regulatory requirements. At Cloudcrest, we specialize in providing seamless incorporation services for diverse business structures, ensuring your organization is set up with precision and compliance from the very beginning."
      secondaryDescription="Whether you're establishing a proprietorship, partnership firm, society, trust, LLP, or a company, we have the expertise to guide you through every step of the process."
      servicesTitle="Our Incorporation Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest for Incorporation?"
      whyChooseItems={[
        { text: 'Expert Guidance: Extensive experience in handling diverse business structures and compliance frameworks.' },
        { text: 'End-to-End Support: From drafting documents to obtaining necessary approvals, we ensure a hassle-free incorporation process.' },
        { text: 'Tailored Solutions: Customized incorporation strategies to align with your business goals and legal requirements.' },
        { text: 'Compliance Assurance: Ensuring full adherence to legal and regulatory norms for a smooth start to your business journey.' },
      ]}
      whyChooseDescription="Lay a strong foundation for your business with our expert incorporation services. Contact us today to discuss your business setup needs, and let us help you turn your vision into reality."
    />
  );
};

export default IncorporationServices;
