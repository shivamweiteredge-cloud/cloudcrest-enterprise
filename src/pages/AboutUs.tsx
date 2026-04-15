import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6"
          >
            About CloudCrest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            Your Virtual Business Partner, empowering your success in the digital age.
          </motion.p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Cloudcrest
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cloudcrest is a leading firm specializing in virtual accounting, Payroll, and taxation services. We excel in delivering financial advisory solutions that ensure full statutory compliance, prompt service, and maximum client satisfaction. Our expertise in Accounting, risk management and scaling small to medium-sized businesses enables us to craft tailored, cutting-edge solutions. Our responsive team leverages cutting-edge technology and deep financial market insights to craft tailored solutions that optimize business productivity and streamline operations. Partner with Cloudcrest to elevate your financial health and propel your business towards success in the digital era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Cloudcrest, we revolutionize the way you manage finances with our cutting-edge virtual accounting services. Our expert team ensures seamless and efficient financial solutions tailored to your unique business needs. Your Virtual Business Partner, empowering your success in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide exceptional virtual accounting services that empower businesses to thrive in the digital era. We are committed to delivering personalized, accurate, and efficient financial solutions, ensuring full statutory compliance and client satisfaction. At Cloudcrest, we strive to be Your Virtual Business Partner, fostering growth and success through unparalleled expertise and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Address</h4>
                <p className="text-sm text-muted-foreground">
                  Level 4, N Heights, Plot No 38, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a href="mailto:info@cloudcrest.in" className="text-sm text-accent hover:underline">info@cloudcrest.in</a>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <a href="tel:+918977079433" className="text-sm text-accent hover:underline">+91-8977079433</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Let us help you transform your business finances.
            </p>
            <Link to="/contact-us">
              <Button variant="hero" size="xl">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
