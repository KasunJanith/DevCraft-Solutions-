import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: Send via backend API (when you have one)
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (response.ok) {
      //   setSubmitStatus('success');
      //   setFormData({ name: '', email: '', subject: '', message: '' });
      // } else {
      //   setSubmitStatus('error');
      // }

      // Option 2: EmailJS (Third-party service)
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      // setSubmitStatus('success');
      // setFormData({ name: '', email: '', subject: '', message: '' });

      // Option 3: Gmail link (current implementation)
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission from DevCraft Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from DevCraft Solutions Contact Form`
      );
      
      // Open Gmail compose in new tab
      window.open(`https://mail.google.com/mail/?view=cm&to=devcraft.team25@gmail.com&su=${subject}&body=${body}`, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-foreground-muted-light dark:text-foreground-muted-dark max-w-2xl mx-auto">
              Ready to transform your ideas into digital reality? We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground-light dark:text-foreground-dark" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground-light dark:text-foreground-dark" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground-light dark:text-foreground-dark" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground-light dark:text-foreground-dark" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project, requirements, timeline, or any questions you have..."
                  />
                </div>                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ✅ Gmail compose window opened! Please send the pre-filled email. If it didn't open, contact us directly at devcraft.team25@gmail.com
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Something went wrong. Please try again or contact us directly at devcraft.team25@gmail.com
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground-light dark:text-foreground-dark mb-1">Office Address</h3>
                      <p className="text-foreground-muted-light dark:text-foreground-muted-dark">
      
                        Negombo,
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">call</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground-light dark:text-foreground-dark mb-1">Phone Number</h3>
                      <p className="text-foreground-muted-light dark:text-foreground-muted-dark">+94 772 600 914</p>
                      <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">Mon-Fri 9am-6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">mail</span>
                    </div>                    <div>
                      <h3 className="font-semibold text-foreground-light dark:text-foreground-dark mb-1">Email Address</h3>
                      <p className="text-foreground-muted-light dark:text-foreground-muted-dark">devcraft.team25@gmail.com</p>
                      <p className="text-sm text-foreground-muted-light dark:text-foreground-muted-dark">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Why Work With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-foreground-muted-light dark:text-foreground-muted-dark">Free consultation & project estimation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-foreground-muted-light dark:text-foreground-muted-dark">Agile development methodology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-foreground-muted-light dark:text-foreground-muted-dark">24/7 support & maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-foreground-muted-light dark:text-foreground-muted-dark">Transparent communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+94772600914"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span className="material-symbols-outlined">call</span>
              <span>Call Now</span>
            </a>            <a
              href="mailto:devcraft.team25@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span className="material-symbols-outlined">mail</span>
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs