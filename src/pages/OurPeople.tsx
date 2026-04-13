import { useState } from "react";

const teamMembers = [
  {
    name: "Mr. Mahesh Dosa",
    credentials: "FCA(ICAI), B.com",
    role: "Corporate Advisor",
    description:
      "Corporate Advisor, Ind AS Compliance Expert and Services in the Field of Financial Reporting and Business Valuation",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Mr-Mahesh-Dosa.png",
  },
  {
    name: "Mrs. Lavanya Nichang",
    credentials: "ACA(ICAI), B.Com",
    role: "Corporate Advisor",
    description:
      "Corporate Advisor, services in the field of financial planning and analysis",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Lavanya-Nichang-1.png",
  },
  {
    name: "Mr. Suneel Jagatha",
    credentials: "ACA(ICAI), Dip.IFRS(UK), B.com",
    role: "Finance & Taxation",
    description:
      "Services in the field of Finance Accounting, Taxation compliances and representation services",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Suneel-Jagatha.png",
  },
  {
    name: "Mr. Vikram Reddy Jakka",
    credentials: "ACA(ICAI), B.com",
    role: "Business Consultant",
    description:
      "Services in the field of Management and Business Consultancy",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Vikram-Reddy-Jakka.png",
  },
  {
    name: "Mr. Naresh Gaikoti",
    credentials: "MBA(Finance), B.com, CA-Intermediate",
    role: "GST & Accounting",
    description:
      "Services in the field of accounting, GST Advisory and compliance services",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Naresh-Gaikoti.png",
  },
  {
    name: "Shivani Bung",
    credentials: "CS (ICSI), L.L.M Osmania University, B.com",
    role: "Corporate Governance",
    description:
      "Expert in corporate governance, compliance management, and regulatory frameworks with extensive experience in SEBI regulations, company incorporations, secretarial audits, and regulatory filings.",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Shivani.png",
  },
];

// Initials fallback avatar
function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 1 && !["Mr.", "Mrs.", "Ms.", "Dr."].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a3a5c] to-[#0e9f6e] text-white text-4xl font-bold tracking-wider select-none">
      {initials}
    </div>
  );
}

function TeamCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      style={{
        animationDelay: `${index * 80}ms`,
        animation: "fadeUp 0.6s ease both",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500"
        style={{
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 24px 48px rgba(14,159,110,0.18), 0 4px 16px rgba(0,0,0,0.08)"
            : "0 2px 16px rgba(0,0,0,0.07)",
        }}
      >
        {/* Photo area */}
        <div className="relative w-full aspect-[3/3.5] overflow-hidden bg-slate-100">
          {!imgError ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700"
              style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <InitialsAvatar name={member.name} />
          )}

          {/* Gradient overlay on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(to top, rgba(14,159,110,0.72) 0%, transparent 55%)",
              opacity: hovered ? 1 : 0,
            }}
          />

          {/* Role badge - slides up on hover */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 transition-all duration-500"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(12px)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <p className="text-white text-xs font-semibold tracking-widest uppercase">
              {member.role}
            </p>
          </div>

          {/* Green accent line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0e9f6e] to-[#06b6d4] transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0.4 }}
          />
        </div>

        {/* Text area */}
        <div className="p-5">
          <h3
            className="font-bold text-[#1a3a5c] text-base leading-snug mb-1 transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {member.name}
          </h3>
          <p className="text-[#0e9f6e] text-xs font-semibold tracking-wide mb-2">
            {member.credentials}
          </p>
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurPeople() {
  return (
    <section className="min-h-screen bg-[#f7f9fc] py-20 px-4">
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" style={{ animation: "fadeUp 0.7s ease both" }}>
          <span
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0e9f6e] mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(14,159,110,0.1)" }}
          >
            Our Team
          </span>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#1a3a5c] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The People Behind<br />
            <span
              style={{
                background: "linear-gradient(90deg, #0e9f6e, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CloudCrest
            </span>
          </h1>
          <p
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A team of seasoned chartered accountants, financial advisors, and compliance experts
            dedicated to simplifying your financial journey.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#0e9f6e]" />
            <div className="w-2 h-2 rounded-full bg-[#0e9f6e]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#0e9f6e]" />
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 text-center"
          style={{ animation: "fadeUp 0.7s 0.5s ease both", opacity: 0 }}
        >
          <p className="text-slate-400 text-sm">
            Want to work with us?{" "}
            <a
              href="/contact-us/"
              className="text-[#0e9f6e] font-semibold hover:underline transition-colors"
            >
              Get in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
