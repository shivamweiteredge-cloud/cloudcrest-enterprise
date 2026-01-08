import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Kasi Naidu',
    role: 'Business Owner',
    content:
      "CloudCrest's expert financial and tax guidance has been crucial in ensuring our business's compliance, optimizing our tax strategy, and supporting our growth, making them an invaluable partner in our success.",
    rating: 5,
  },
  {
    name: 'Suneel J',
    role: 'Entrepreneur',
    content:
      'Thank you for preparing the return. The summary looks comprehensive and well-organized. The team explained each area and section in detail. He is friendly and not commercial; he is very polite. I rate his service 5 stars.',
    rating: 5,
  },
  {
    name: 'Pss Prashanth',
    role: 'Company Director',
    content:
      'We have recently incorporated a company with Cloudcrest Business Management LLP. Their incorporation services were seamless and professional. I highly recommend them to anyone seeking top-notch services.',
    rating: 5,
  },
  {
    name: 'K Srinu',
    role: 'Startup Founder',
    content:
      'Cloudcrest made the incorporation process seamless and hassle-free. Their knowledgeable team guided us every step of the way, ensuring we met all legal requirements with ease!',
    rating: 5,
  },
  {
    name: 'Ganesh A',
    role: 'Managing Director',
    content:
      'Cloudcrest Business Management LLP has been instrumental in streamlining our bookkeeping processes. Their team is detail-oriented and always ensures our financial records are accurate and up to date.',
    rating: 5,
  },
  {
    name: 'Raheem Mohammad',
    role: 'Business Owner',
    content:
      'The bookkeeping and accounting services from Cloudcrest Business Management LLP have been a game-changer for us. Their efficient team keeps everything organized, allowing us to focus on growing our business.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have
            to say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border relative shadow-xl">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/20" />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
              "{testimonials[activeIndex].content}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xl font-bold text-accent">
                  {testimonials[activeIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
