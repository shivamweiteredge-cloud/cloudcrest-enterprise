import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FileCheck, Receipt, RefreshCw, Search, Truck, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'GST & Customs Duty Compliance Blueprint',
    icon: FileCheck,
    points: [
      'Develop a detailed compliance blueprint for GST and customs duties tailored to your business needs.',
    ],
  },
  {
    title: 'GST Compliance Support',
    icon: Receipt,
    points: [
      'Review and submission of tax returns and computations across all states.',
      'Reconciliation of mismatches between your records and those of vendors/customers.',
      'Guidance on selecting the right ASP/GSP solutions.',
    ],
  },
  {
    title: 'Input Tax Credits',
    icon: RefreshCw,
    points: [
      'Resolve operational GST issues, including vendor and customer ecosystem support.',
      'Assistance in obtaining advance rulings and addressing implementation challenges.',
    ],
  },
  {
    title: 'GST Audit Services',
    icon: Search,
    points: [
      'Support for annual GST audits across all registered locations.',
    ],
  },
  {
    title: 'GST Internal Audit & Process Reviews',
    icon: Scale,
    points: [
      'Review Order-to-Cash and Procure-to-Pay processes for GST compliance.',
      'Validate ERP systems and GST-related controls for seamless operations.',
    ],
  },
  {
    title: 'GST Representation & Litigation Support',
    icon: Scale,
    points: [
      'Representation before GST authorities and appellate bodies across India.',
    ],
  },
  {
    title: 'GST Supply Chain Effectiveness Review',
    icon: Truck,
    points: [
      'In collaboration with supply chain experts, optimize your supply chain, network, warehousing, and logistics from a GST perspective.',
    ],
  },
];

const thriveItems = [
  { title: 'Accurate Classification', desc: 'Properly classify goods and services under HSN and SAC codes, applying the correct tax rates (ranging from exempt to 28%).' },
  { title: 'Place of Supply Determination', desc: 'Ascertain the place of supply to identify the relevant state for GST compliance and payments.' },
  { title: 'Input Tax Credits', desc: 'Claim eligible input tax credits while excluding or deferring ineligible ones, and handle refunds or credits for exports.' },
  { title: 'Reverse Charge Mechanism', desc: 'Ensure compliance with reverse charge provisions on applicable inward supplies.' },
  { title: 'Periodic & Annual Returns', desc: 'File accurate periodic and annual GST returns for each registered location.' },
  { title: 'Valuation for Related Party Transactions', desc: 'Apply special valuation rules for transactions with related parties.' },
];

const GSTAdvisory = () => {
  return (
    <ServicePageLayout
      title="GST – Compliance and Advisory"
      subtitle="Navigate the Complexities of GST with Confidence"
      description="Introduced in July 2017, the Goods and Services Tax (GST) replaced multiple indirect taxes such as excise duty, VAT, service tax, central sales tax, and octroi duty. GST has fundamentally transformed the tax landscape in India, impacting businesses in areas such as tax rates, compliance, input credits, pricing, and distribution systems."
      servicesTitle="Our GST Services Include"
      services={services}
      whyChooseTitle="Why Partner with Cloudcrest?"
      whyChooseItems={[
        { text: 'A team of experienced tax advisors with a client-centric approach.' },
        { text: 'Actionable insights and practical solutions to manage GST obligations effectively.' },
        { text: 'Stay ahead of regulatory changes and focus on growing your business.' },
      ]}
      whyChooseDescription="Simplify GST Compliance Today. Stay ahead of regulatory changes and focus on growing your business while we handle the complexities of GST compliance. Contact us to learn how Cloudcrest can be your trusted GST partner!"
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
                To Thrive in This New Environment, Businesses Must Ensure
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {thriveItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
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

export default GSTAdvisory;
