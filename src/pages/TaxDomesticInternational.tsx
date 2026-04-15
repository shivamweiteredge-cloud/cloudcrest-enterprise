import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Globe, Building2, Users, FileText, Gavel, Briefcase, Scale } from 'lucide-react';

const services = [
  {
    title: 'Tax Strategy and Planning',
    icon: Globe,
    points: [
      'Developing effective taxation strategies for corporates and non-corporates, including maximizing benefits from tax holidays and incentives.',
    ],
  },
  {
    title: 'Business Setup & Investment Advisory',
    icon: Building2,
    points: [
      'Guidance on taxation and exchange control regulations for setting up businesses in India or abroad.',
    ],
  },
  {
    title: 'Employee Tax Efficiency',
    icon: Users,
    points: [
      'Reviewing and optimizing employee compensation structures for tax efficiency.',
    ],
  },
  {
    title: 'Withholding Tax Advisory',
    icon: FileText,
    points: [
      'Assistance with withholding tax compliance and securing advance rulings on international tax matters.',
    ],
  },
  {
    title: 'Tax Representation',
    icon: Gavel,
    points: [
      'Representation before tax and judicial authorities during assessments, appeals, and handling income tax search, seizure, and survey cases.',
    ],
  },
  {
    title: 'Expatriate Taxation',
    icon: Briefcase,
    points: [
      'Specialized advisory services for expatriates to ensure compliance with Indian and international tax laws.',
    ],
  },
  {
    title: 'Corporate Structuring & Transaction Advisory',
    icon: Scale,
    points: [
      'Advising on corporate restructuring and transactions to minimize tax incidence effectively.',
    ],
  },
];

const TaxDomesticInternational = () => {
  return (
    <ServicePageLayout
      title="Tax – Domestic and International"
      subtitle="Navigating Tax Challenges with Expertise"
      description="In today's globalized economy, businesses operate in an environment of complex and evolving tax regulations. Whether you're a multinational corporation managing diverse tax rules or a domestic business looking to optimize compliance, Cloudcrest is here to simplify your tax challenges."
      secondaryDescription="Our team offers in-depth knowledge of Indian and international tax laws, providing seamless advisory and compliance solutions tailored to your needs. We provide a full spectrum of tax services covering Direct Tax, Indirect Tax, and Transfer Pricing."
      servicesTitle="Our Services Include"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expert advisory across all taxation domains.' },
        { text: 'Practical, actionable solutions tailored to your business needs.' },
        { text: 'Regular interaction with tax authorities to stay ahead of regulatory changes.' },
        { text: 'We support multinational and Indian companies, expatriates, and resident and non-resident Indians.' },
      ]}
      whyChooseDescription="Cloudcrest is committed to helping you navigate complex tax landscapes with ease and confidence. Contact us today to learn how we can support your business with end-to-end taxation solutions."
    />
  );
};

export default TaxDomesticInternational;
