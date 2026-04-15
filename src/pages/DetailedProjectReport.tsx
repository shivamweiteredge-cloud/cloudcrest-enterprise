import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FileBarChart, Search, BarChart3, Shield, Globe } from 'lucide-react';

const services = [
  {
    title: 'Technical Feasibility',
    icon: Search,
    points: [
      'Assessment of project infrastructure, resources, and technical requirements.',
      'Analysis of operational workflows and technology integration.',
    ],
  },
  {
    title: 'Market Feasibility',
    icon: Globe,
    points: [
      'Comprehensive market research to assess demand, competition, and target audience.',
      'Identification of market trends and growth opportunities.',
    ],
  },
  {
    title: 'Financial Feasibility',
    icon: BarChart3,
    points: [
      'Detailed project costing, revenue projections, and ROI analysis.',
      'Preparation of financial models, cash flow statements, and break-even analysis.',
    ],
  },
  {
    title: 'Economic & Social Impact',
    icon: FileBarChart,
    points: [
      'Evaluation of the project\'s impact on local communities and overall economic development.',
      'Highlighting alignment with government initiatives and policies, if applicable.',
    ],
  },
  {
    title: 'Compliance & Risk Assessment',
    icon: Shield,
    points: [
      'Identification of regulatory requirements and compliance strategies.',
      'Comprehensive risk analysis with mitigation plans.',
    ],
  },
];

const DetailedProjectReport = () => {
  return (
    <ServicePageLayout
      title="Feasibility Report / Detailed Project Report (DPR)"
      subtitle="Your Strategic Partner for Fundraising and Bank Loan Approvals"
      description="In today's competitive business environment, a well-prepared Feasibility Report or Detailed Project Report (DPR) is crucial for securing funding and obtaining approvals for bank loans. At Cloudcrest, we specialize in crafting comprehensive and meticulously analysed reports that highlight your project's potential, ensuring stakeholders gain confidence in your vision."
      secondaryDescription="A Feasibility Report or DPR is a structured document that evaluates the viability of a proposed project. It includes in-depth analyses of technical, financial, operational, and market aspects, providing a clear roadmap for implementation and demonstrating the project's profitability and sustainability."
      servicesTitle="Our Expertise in Feasibility Reports/DPR"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expert Team: A team of seasoned professionals with expertise in finance, market research, and project management.' },
        { text: 'Customized Reports: Tailored solutions to suit the requirements of banks, investors, or stakeholders.' },
        { text: 'Proven Track Record: Extensive experience in preparing DPRs for diverse industries and project scales.' },
        { text: 'End-to-End Support: From data collection to report submission and follow-ups with financial institutions, we handle it all.' },
      ]}
      whyChooseDescription="At Cloudcrest, we are committed to helping you achieve your business goals by delivering reports that demonstrate your project's potential. Whether you're raising funds, seeking bank loans, or planning a new venture, our reports are designed to make an impactful impression on stakeholders."
    />
  );
};

export default DetailedProjectReport;
