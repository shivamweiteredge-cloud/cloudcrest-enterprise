import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "Level 4, N Heights, Plot No 38, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-8977079433",
    href: "tel:+918977079433",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@cloudcrest.in",
    href: "mailto:info@cloudcrest.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: undefined,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to transform your business finances? Get in touch with our
            team of experts today.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-xs mb-1 uppercase tracking-wide font-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary-foreground font-semibold hover:text-accent transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary-foreground font-semibold text-sm">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Company Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex-1 p-6 bg-accent/20 backdrop-blur-sm rounded-2xl border border-accent/30">
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
                Cloudcrest Business Management LLP
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A leading firm specializing in virtual accounting, payroll, and
                taxation services. We excel in delivering financial advisory
                solutions that ensure full statutory compliance, prompt service,
                and maximum client satisfaction.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-10 shadow-2xl h-full flex flex-col justify-center">
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your business needs..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full h-14 text-base font-bold">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
