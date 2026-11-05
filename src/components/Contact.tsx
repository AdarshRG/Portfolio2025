import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Sparkles, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out, Adarsh will get back to you promptly.',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, {
      description: text,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Feel free to contact me for any opportunities, technical collaborations, or BigCommerce & full-stack development inquiries.
          </p>
        </motion.div>

        {/* 2-Column Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto"
        >
          {/* Send a Message Form (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-200/90 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                <p className="text-xs text-gray-500">I usually respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50/50 border-gray-200 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="e.g. jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50/50 border-gray-200 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[140px] bg-gray-50/50 border-gray-200 focus:bg-white text-sm"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-accent hover:bg-portfolio-primary text-white font-medium py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>Send Message</span>
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Details & Quick Links (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-200/90 hover:shadow-md transition-all space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Contact Information</h3>
              <p className="text-xs text-gray-500">Direct channels to reach me</p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-portfolio-accent/10 rounded-lg text-portfolio-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</h4>
                    <a href="tel:+918547855799" className="text-sm font-semibold text-gray-900 hover:text-portfolio-accent block">
                      +91 8547855799
                    </a>
                    <a href="tel:+918848141147" className="text-xs text-gray-600 hover:text-portfolio-accent block">
                      +91 8848141147
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+918547855799', 'Phone number')}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-portfolio-accent hover:bg-white transition-colors"
                  title="Copy Primary Phone"
                  aria-label="Copy primary phone number"
                >
                  <Copy size={15} />
                </button>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-3 group">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-portfolio-accent/10 rounded-lg text-portfolio-accent shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</h4>
                    <a href="mailto:rg.adarsh1@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-portfolio-accent block break-all">
                      rg.adarsh1@gmail.com
                    </a>
                    <a href="mailto:adarshrg1998@gmail.com" className="text-xs text-gray-600 hover:text-portfolio-accent block break-all">
                      adarshrg1998@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('rg.adarsh1@gmail.com', 'Email')}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-portfolio-accent hover:bg-white transition-colors"
                  title="Copy Primary Email"
                  aria-label="Copy primary email"
                >
                  <Copy size={15} />
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2 bg-portfolio-accent/10 rounded-lg text-portfolio-accent shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-gray-900">Trivandrum, Kerala, India</p>
                  <p className="text-xs text-gray-500">Open to Remote & On-Site Roles</p>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-3 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Professional Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.linkedin.com/in/adarsh-rg-367a0a1ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-50 hover:bg-portfolio-accent/10 border border-gray-100 text-gray-800 hover:text-portfolio-primary transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold">
                    <Linkedin size={16} className="text-[#0077b5]" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink size={13} className="text-gray-400 group-hover:text-portfolio-accent" />
                </a>

                <a 
                  href="https://github.com/AdarshRG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-50 hover:bg-portfolio-accent/10 border border-gray-100 text-gray-800 hover:text-portfolio-primary transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold">
                    <Github size={16} className="text-gray-900" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink size={13} className="text-gray-400 group-hover:text-portfolio-accent" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
