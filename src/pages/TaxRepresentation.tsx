import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Gavel, Receipt, FileText, Shield } from 'lucide-react';

const services = [
  {
    title: 'Income Tax Representation',
    icon: Gavel,
    points: [
      'Assistance in responding to notices under various sections of the Income Tax Act, such as Section 143(1), Section 148, or Section 139(9).',
      'Preparation and filing of responses to queries raised during scrutiny assessments or reassessments.',
      'Representation before the Assessing Officer, Commissioner of Income Tax (Appeals), and other authorities.',
      'Advisory on mitigating risks and ensuring compliance with tax provisions.',
    ],
  },
  {
    title: 'GST Representation',
    icon: Receipt,
    points: [
      'Handling notices for mismatches in GST returns, late filing, or discrepancies flagged by authorities.',
      'Assistance in responding to inquiries under GST provisions, including input tax credit (ITC) mismatches and reverse charge mechanism issues.',
      'Representation during departmental audits, investigations, or assessments.',
      'Advisory on resolving disputes and filing appeals before appellate authorities.',
    ],
  },
  {
    title: 'Notice Management Services',
    icon: FileText,
    points: [
      'Analysis and interpretation of the notice or communication to determine its implications.',
      'Drafting detailed and accurate replies supported by necessary documentation.',
      'Coordination with tax authorities to ensure smooth handling of the case.',
    ],
  },
  {
    title: 'Other Representations',
    icon: Shield,
    points: [
      'Representing clients during tax assessments, surveys, or hearings.',
      'Assistance in seeking clarifications or advance rulings on complex tax matters.',
      'Support in filing appeals and pursuing litigation where required.',
    ],
  },
];

const TaxRepresentation = () => {
  return (
    <ServicePageLayout
      title="Tax Representation Services"
      subtitle="Expert Guidance for Resolving Tax Notices and Representations"
      description="Receiving a tax notice or communication from the tax authorities can be overwhelming. At Cloudcrest, we provide professional tax representation services to ensure that your responses are accurate, timely, and effective. Whether it's for income tax or GST matters, we stand by your side, representing you before the authorities and safeguarding your interests."
      secondaryDescription="Our experienced team specializes in handling notices, inquiries, and assessments, ensuring compliance and minimizing potential liabilities."
      servicesTitle="Our Tax Representation Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest for Tax Representation?"
      whyChooseItems={[
        { text: 'Deep Expertise: Extensive knowledge of Income Tax and GST laws, rules, and procedures.' },
        { text: 'Tailored Approach: Solutions customized to address the specific notice or representation requirements of each client.' },
        { text: 'Comprehensive Support: From notice interpretation to representation at various forums, we handle it all.' },
        { text: 'Proactive Guidance: Focused on resolving issues efficiently while ensuring compliance and avoiding future disputes.' },
      ]}
      whyChooseDescription="Facing a tax notice or representation requirement? Don't let it disrupt your operations. Our dedicated team of tax experts is here to manage your compliance and representation needs with professionalism and precision."
    />
  );
};

export default TaxRepresentation;
