import { useState } from "react";

const teamMembers = [
  {
    name: "Mr. Mahesh Dosa",
    credentials: "FCA(ICAI), B.Com",
    description:
      "Corporate Advisor, Ind AS Compliance Expert and Services in the Field of Financial Reporting and Business Valuation",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Mr-Mahesh-Dosa.png",
  },
  {
    name: "Mrs. Lavanya Nichang",
    credentials: "ACA(ICAI), B.Com",
    description:
      "Corporate Advisor, services in the field of financial planning and analysis",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Lavanya-Nichang-1.png",
  },
  {
    name: "Mr. Suneel Jagatha",
    credentials: "ACA(ICAI), Dip.IFRS(UK), B.com",
    description:
      "Services in the field of Finance Accounting, Taxation compliances and representation services",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Suneel-Jagatha.png",
  },
  {
    name: "Mr. Vikram Reddy Jakka",
    credentials: "ACA(ICAI), B.com",
    description: "Services in the field of Management and Business Consultancy",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Vikram-Reddy-Jakka.png",
  },
  {
    name: "Mr. Naresh Gaikoti",
    credentials: "MBA(Finance), B.com, CA-Intermediate",
    description:
      "Services in the field of accounting, GST Advisory and compliance services",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Naresh-Gaikoti.png",
  },
  {
    name: "Shivani Bung",
    credentials: "CS (ICSI), L.L.M Osmania University, B.com",
    description:
      "Expert in corporate governance, compliance management, and regulatory frameworks with extensive experience in SEBI regulations, company incorporations, secretarial audits, and regulatory filings.",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Shivani.png",
  },
];

const softwareLogos = [
  {
    name: "Tally Prime",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Tally-Prime.png",
  },
  {
    name: "QuickBooks",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Qb.png",
  },
  {
    name: "Zoho",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Zoho.png",
  },
  {
    name: "Microsoft",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Microsoft.png",
  },
  {
    name: "Xero",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Xero.png",
  },
  {
    name: "Marg ERP",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/marvg.png",
  },
  {
    name: "SAP",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Sap.png",
  },
  {
    name: "Odoo",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/odoo.png",
  },
  {
    name: "Mygate",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Mygate.png",
  },
  {
    name: "Wave",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Wave.png",
  },
  {
    name: "Adda",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Adda.png",
  },
  {
    name: "Vyapar",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/vy.png",
  },
  {
    name: "Assetsoft",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/as.png",
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Photo */}
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Dark overlay + text — visible on hover */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-400"
        style={{
          background: hovered
            ? "rgba(10, 30, 60, 0.82)"
            : "rgba(10, 30, 60, 0)",
          opacity: hovered ? 1 : 0,
        }}>
        <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
        <p className="text-blue-300 text-sm font-medium mb-3">
          {member.credentials}
        </p>
        <p className="text-slate-200 text-xs leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export const OurPeopleSection = () => {
  return (
    // ← This light blue background matches the real website exactly
    <div style={{ backgroundColor: "#e8f4fd" }}>
      {/* ── TEAM SECTION ── */}
      <section id="people" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header — matches real site: blue title + "Members" with lines */}
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "#1a9bdc" }}>
              Our Team
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
              <span className="text-slate-600 font-medium text-sm tracking-widest uppercase">
                Members
              </span>
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
            </div>
          </div>

          {/* Team Grid with hover overlay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOFTWARE LOGOS SECTION ── */}
      <section
        id="software"
        className="py-20"
        style={{ backgroundColor: "#dceef9" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "#1a9bdc" }}>
              Software Expertise
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
              <span className="text-slate-600 font-medium text-sm tracking-widest uppercase">
                We Have
              </span>
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
            </div>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {softwareLogos.map((logo) => (
              <div
                key={logo.name}
                className="group flex flex-col items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
                <span className="mt-2 text-[10px] font-medium text-slate-400 group-hover:text-blue-500 transition-colors text-center leading-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
