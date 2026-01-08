import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Level 4, N Heights, Plot No 38, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91-8977079433',
    href: 'tel:+918977079433',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@cloudcrest.in',
    href: 'mailto:info@cloudcrest.in',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary-foreground font-semibold hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary-foreground font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Company Info */}
            <div className="p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                Cloudcrest Business Management LLP
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A leading firm specializing in virtual accounting, payroll, and
                taxation services. We excel in delivering financial advisory
                solutions that ensure full statutory compliance, prompt service,
                and maximum client satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="resize-none"
                />

                <Button type="submit" variant="accent" size="lg" className="w-full">
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
