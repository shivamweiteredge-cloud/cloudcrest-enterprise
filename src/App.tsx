import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const IncorporationServices = lazy(() => import("./pages/IncorporationServices"));
const BookkeepingAndReporting = lazy(() => import("./pages/BookkeepingAndReporting"));
const PayrollManagement = lazy(() => import("./pages/PayrollManagement"));
const GSTAdvisory = lazy(() => import("./pages/GSTAdvisory"));
const TaxDomesticInternational = lazy(() => import("./pages/TaxDomesticInternational"));
const InternalAudit = lazy(() => import("./pages/InternalAudit"));
const IndASAdvisory = lazy(() => import("./pages/IndASAdvisory"));
const CompanyLawAdvisory = lazy(() => import("./pages/CompanyLawAdvisory"));
const TaxRepresentation = lazy(() => import("./pages/TaxRepresentation"));
const VirtualCFO = lazy(() => import("./pages/VirtualCFO"));
const DetailedProjectReport = lazy(() => import("./pages/DetailedProjectReport"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurPeople = lazy(() => import("./pages/OurPeople"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const CompliancesCalendar = lazy(() => import("./pages/CompliancesCalendar"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Services */}
            <Route path="/incorporation-services" element={<IncorporationServices />} />
            <Route path="/bookkeeping-and-reporting" element={<BookkeepingAndReporting />} />
            <Route path="/payroll-management-service" element={<PayrollManagement />} />
            <Route path="/gst-and-tax-advisory" element={<GSTAdvisory />} />
            <Route path="/tax-domestic-and-international" element={<TaxDomesticInternational />} />
            <Route path="/internal-audit-risk-management" element={<InternalAudit />} />
            <Route path="/ind-as-advisory" element={<IndASAdvisory />} />
            <Route path="/company-law-legal-advisory-services" element={<CompanyLawAdvisory />} />
            {/* Consulting */}
            <Route path="/tax-representation-services" element={<TaxRepresentation />} />
            <Route path="/virtual-cfo-services" element={<VirtualCFO />} />
            <Route path="/detailed-project-report" element={<DetailedProjectReport />} />
            {/* About */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-people" element={<OurPeople />} />
            {/* Contact */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/compliances-calendar" element={<CompliancesCalendar />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
