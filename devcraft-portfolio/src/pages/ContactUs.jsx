function ContactUs() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Get in Touch</h1>
                <p className="text-foreground-muted-light dark:text-foreground-muted-dark max-w-lg">
                  We're excited to hear from you. Whether you have a question about our services, want to discuss a potential project, or just want to say hello, please don't hesitate to reach out.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">Your Name</label>
                  <input
                    className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary transition-colors"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">Your Email</label>
                  <input
                    className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary transition-colors"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">Your Message</label>
                  <textarea
                    className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark min-h-36 p-4 text-base placeholder:text-foreground-muted-light dark:placeholder:text-foreground-muted-dark focus:border-primary transition-colors"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden">
                <div
                  className="w-full aspect-video bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbZFf1mZjGdYSOU8CYe_N-LshNibHxge-i6K7r2O7uppcEJUlvSAdkEp1gwFTE2IukSoUXSmUDvC8_cZHwSmBkW338q_WqBUiY2_7fhJqSO4l1fxoNbOAClI-2sYsUTleE_AErWBOhSxZZG5vQR4x5xY4nFplsZKxCnGNXRpUZomEelLmRGE2Wm0NCO2alLgw1ZKQfW9pwVAIC5DY7usF7kT_t9VhGsdUsZxw03MWEBRnHvIsXXGIq4w-0Uw5N9tI7pSBEbSU6q90")' }}
                ></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
                <div className="divide-y divide-border-light dark:divide-border-dark border-t border-border-light dark:border-border-dark">
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-foreground-muted-light dark:text-foreground-muted-dark font-medium col-span-1">Address</p>
                    <p className="col-span-2">123 Innovation Drive, San Francisco, CA 94105</p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-foreground-muted-light dark:text-foreground-muted-dark font-medium col-span-1">Phone</p>
                    <p className="col-span-2">+94 772 600 914</p>
                  </div>
                  <div className="py-4 grid grid-cols-3 gap-4">
                    <p className="text-foreground-muted-light dark:text-foreground-muted-dark font-medium col-span-1">Email</p>
                    <p className="col-span-2">contact@techinnovators.com</p>
                  </div>
                </div>
              </div>
            </div>          </div>
        </section>
    </div>
  );
}

export default ContactUs