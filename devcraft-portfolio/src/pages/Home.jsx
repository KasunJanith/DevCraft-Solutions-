import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Building responsive and scalable websites using the latest technologies.',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimized']
    },
    {
      icon: 'smartphone',
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native Performance']
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Providing secure and reliable cloud infrastructure and management.',
      features: ['AWS/Azure', 'DevOps', 'Scalable Architecture']
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user interfaces that enhance user experience.',
      features: ['Figma', 'User Research', 'Prototyping']
    },
    {
      icon: 'psychology',
      title: 'AI Integration',
      description: 'Implementing AI and machine learning solutions to automate and enhance.',
      features: ['Machine Learning', 'Chatbots', 'Data Analysis']
    },
    {
      icon: 'trending_up',
      title: 'Digital Strategy',
      description: 'Developing comprehensive digital strategies to drive business growth.',
      features: ['Analytics', 'SEO', 'Growth Planning']
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "E-Commerce Platform",
      description: "A cutting-edge web application for a leading e-commerce platform.",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Health & Fitness App",
      description: "An innovative mobile app for a healthcare provider with AI features.",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "TensorFlow"]
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Cloud Infrastructure",
      description: "A secure and scalable cloud solution for a financial institution.",
      category: "Cloud Solutions",
      technologies: ["AWS", "Docker", "Kubernetes"]
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3M+', label: 'Users Reached' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">We're accepting new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-shadow-lg mb-6">
              Crafting Digital
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 text-shadow mb-8 max-w-3xl mx-auto leading-relaxed">
              We transform ideas into exceptional digital experiences that drive business growth and user engagement through innovative web and mobile solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact-us"
                className="group relative bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/our-work"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to drive your business forward in the modern landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border-light dark:border-border-dark"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence with our innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/our-work"
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors duration-300"
                  >
                    View Case Study
                    <span className="material-symbols-outlined text-lg ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/our-work"
              className="inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Projects
              <span className="material-symbols-outlined text-lg ml-2">
                trending_flat
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and turn your vision into reality with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Start Your Project
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;