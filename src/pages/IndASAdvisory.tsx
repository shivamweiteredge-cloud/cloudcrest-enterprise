import { ServicePageLayout } from '@/components/ServicePageLayout';
import { BookOpen, Globe, BarChart3, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Ind AS Transition Services',
    icon: BookOpen,
    points: [
      'Comprehensive analysis and implementation of Ind AS for first-time adopters.',
      'Ensuring seamless integration of new standards into existing accounting frameworks.',
    ],
  },
  {
    title: 'Compliance with Global Standards',
    icon: Globe,
    points: [
      'Assistance in adhering to IFRS for businesses operating across international markets.',
      'Aligning accounting practices with global requirements for cross-border transactions.',
    ],
  },
  {
    title: 'Strategic Financial Reporting',
    icon: BarChart3,
    points: [
      'Preparing financial statements that meet Ind AS, IFRS, and other global standards.',
      'Enhancing transparency and accuracy in financial reporting for investors and stakeholders.',
    ],
  },
  {
    title: 'Advisory for International Growth',
    icon: Briefcase,
    points: [
      'Support for businesses in cross-border acquisitions, joint ventures, and global fundraising.',
      'Guidance on integrating international debt finance and equity markets into your strategy.',
    ],
  },
];

const IndASAdvisory = () => {
  return (
    <ServicePageLayout
      title="IndAS Advisory"
      subtitle="Empowering Your Business with World-Class Accounting Standards"
      description="As global capital markets become increasingly integrated, businesses are seizing opportunities for international growth. Expanding across borders may involve strategic moves such as cross-border acquisitions, joint ventures, raising international debt finance, collaborating with private equity firms, or securing capital through equity markets in India or abroad."
      secondaryDescription="At Cloudcrest, we bring a unique blend of global expertise and local knowledge to help businesses adapt seamlessly to the evolving accounting landscape."
      servicesTitle="How Cloudcrest Can Help"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Proven expertise in Ind AS conversion for over 100 companies.' },
        { text: 'Deep understanding of global and local accounting standards.' },
        { text: 'Tailored solutions for businesses seeking international expansion.' },
        { text: 'Commitment to ensuring compliance, accuracy, and stakeholder confidence.' },
      ]}
      whyChooseDescription="Whether you are adopting Ind AS, aligning with IFRS, or navigating the complexities of international accounting, Cloudcrest is your trusted partner. Contact us today to learn how we can help your business achieve accounting excellence and global growth."
    />
  );
};

export default IndASAdvisory;
