import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { Mail, Send, Copy, Check, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (portfolioConfig.email) {
      // Build mailto link so the user's default client can immediately send
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${portfolioConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.open(mailtoUrl, '_blank');

      setSubmissionStatus({
        type: 'info',
        message: `Your email client has been opened. You can also send directly to: ${portfolioConfig.email}`,
      });
    } else {
      setSubmissionStatus({
        type: 'info',
        message: 'Email address will be added soon. Please connect directly via LinkedIn or GitHub!',
      });
    }

    // Reset form fields
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build"
          highlightedWord="Something Together"
          subtitle="Interested in hiring for an internship, hackathon collaboration, or technical discussion? I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Feel free to reach out directly via email or connect across developer platforms.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">
                      Email Address
                    </span>
                    {portfolioConfig.email ? (
                      <a
                        href={`mailto:${portfolioConfig.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors truncate block"
                      >
                        {portfolioConfig.email}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm text-slate-400 italic">
                        Email address will be added soon.
                      </span>
                    )}
                  </div>
                </div>

                {portfolioConfig.email && (
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>

              {/* Social links list */}
              <div className="space-y-3">
                <a
                  href={portfolioConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold block">GitHub Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Repositories & code activity
                    </span>
                  </div>
                </a>

                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-indigo-950/20 hover:bg-indigo-900/30 border border-indigo-800/40 hover:border-indigo-600/60 flex items-center justify-between gap-3 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:text-cyan-300">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block">LinkedIn Profile</span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Professional network & updates
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                All fields are validated. Your message prepares directly with my inbox.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors ${
                        errors.name ? 'border-rose-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@domain.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors ${
                        errors.email ? 'border-rose-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors ${
                      errors.subject ? 'border-rose-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or query here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors resize-none ${
                      errors.message ? 'border-rose-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {/* Status Notice */}
                {submissionStatus.message && (
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{submissionStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
