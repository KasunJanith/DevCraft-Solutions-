function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-primary uppercase tracking-wider">Our Services</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Digital Solutions for a Thriving Business</h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-subtle-light dark:text-subtle-dark">We offer a comprehensive suite of digital solutions to help your business thrive in the digital age. Our experts are ready to build.</p>
            </div>
          </div>
        </section>
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tight">Web Development</h2>
                  <h3 className="mt-4 text-xl font-semibold text-foreground-light dark:text-foreground-dark">Custom Web Applications</h3>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">We build responsive, scalable, and secure web applications tailored to your specific business needs. From e-commerce platforms to complex enterprise systems, we deliver high-quality solutions that drive results.</p>
                  <button className="group mt-8 inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
                    <span>Learn More</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20px" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
                <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 transform hover:scale-105 transition-transform duration-500">
                  <img alt="Web Development" className="w-50 h-50 object-cover" src="web.jpg" width="600" height="200"/>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 transform hover:scale-105 transition-transform duration-500">
                  <img alt="App Development" className="w-full h-full object-cover" src="app.jpg" width="600" height="200"/>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">App Development</h2>
                  <h3 className="mt-4 text-xl font-semibold text-foreground-light dark:text-foreground-dark">Mobile App Development</h3>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">We create engaging and intuitive mobile applications for iOS and Android platforms. Our team handles the entire development process, from concept to deployment, ensuring a seamless user experience.</p>
                  <button className="group mt-8 inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
                    <span>Learn More</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20px" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tight">UI/UX Design</h2>
                  <h3 className="mt-4 text-xl font-semibold text-foreground-light dark:text-foreground-dark">User-Centric Design</h3>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">Our UI/UX design experts craft visually appealing and user-friendly interfaces that enhance user engagement and satisfaction. We focus on creating intuitive designs that align with your brand identity and business goals.</p>
                  <button className="group mt-8 inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
                    <span>Learn More</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20px" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
                <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 transform hover:scale-105 transition-transform duration-500">
                  <img alt="UI/UX Design" className="w-full h-full object-cover" src="ui.jpg" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/5 transform hover:scale-105 transition-transform duration-500">
                  <img alt="AI Solutions" className="w-full h-full object-cover" src="ai.jpg" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">AI Solutions</h2>
                  <h3 className="mt-4 text-xl font-semibold text-foreground-light dark:text-foreground-dark">Artificial Intelligence Integration</h3>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">We integrate AI and machine learning technologies into your applications to automate processes, improve decision-making, and enhance user experiences. Our AI solutions are designed to provide a competitive edge.</p>
                  <button className="group mt-8 inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary font-medium px-6 py-3 rounded-lg transition-all duration-300">
                    <span>Learn More</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20px" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>        </section>
    </div>
  );
}

export default Services