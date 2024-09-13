import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements[0]; // Assuming the email input is the first element
    if (!emailInput.value) {
      emailInput.classList.add('input-error'); // Add error class if input is invalid
      setTimeout(() => emailInput.classList.remove('input-error'), 500); // Remove class after animation
    } else {
      // Handle valid submission
    }
  };

  return (
    <div className="main-container">
      <header className="navbar" role="banner">
        <div className="navbar-container">
          <div className="navbar-logo">NeuralBench</div>
          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
              <li className="nav-item"><a href="#why-neural-bench" className="nav-link">Why NeuralBench</a></li>
              <li className="nav-item" style={{display: 'none'}}><a href="#clients" className="nav-link">Clients</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="content-wrapper">
        {/* Hero Section */}
        <section id="home" className="hero-section fade-in" role="region" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">Empowering Businesses with AI</h1>
            <h2 className="hero-subtitle">Transforming Data into Actionable Insights</h2>
            <ul className="hero-features">
              <li>• AI-Driven Solutions</li>
              <li>• Enhanced Business Intelligence</li>
              <li>• Scalable AI Infrastructure</li>
            </ul>
            <a href="#about" className="cta-button">Learn More</a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-4 text-center">About NeuralBench</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <i className="fas fa-brain w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-lg title-font font-medium">Our Vision</h2>
                    <p className="leading-relaxed text-base">To revolutionize industries by harnessing the power of artificial intelligence, driving innovation, and creating value for businesses worldwide.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <i className="fas fa-rocket w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-lg title-font font-medium">Our Mission</h2>
                    <p className="leading-relaxed text-base">To deliver cutting-edge AI solutions that empower businesses to make data-driven decisions, enhance operational efficiency, and achieve sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-4 text-center">Our Products</h1>
            <div className="flex-wrap">
              <div className="p-4  w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <img alt="AI Analytics Platform" className="w-full h-48 object-cover object-center mb-4" src="src/assets/Analytics.png" />
                  <h2 className="text-lg title-font font-medium">AI Analytics Platform</h2>
                  <p className="leading-relaxed text-base">A comprehensive platform that leverages AI to provide deep insights and analytics, helping businesses make informed decisions.</p>
                  <a href="#!" className="mt-3 product-button text-white py-2 px-4 rounded transition duration-200 " style={{display: 'none'}}>View Product Details</a>
                </div>
              </div>
              <div className="p-4  w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                    <img alt="AI Customer Support" className="w-full h-48 object-cover object-center mb-4" src="src/assets/Customer.png" />
                    <h2 className="text-lg title-font font-medium">AI Customer Support</h2>
                  <p className="leading-relaxed text-base">An intelligent customer support system that uses AI to provide quick and accurate responses, improving customer satisfaction.</p>
                  <a href="#!" className="mt-3 product-button text-white py-2 px-4 rounded transition duration-200 " style={{display: 'none'}}>View Product Details</a>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <img alt="AI Predictive Maintenance" className="w-full h-48 object-cover object-center mb-4" src="src/assets/Predictive.png" />
                  <h2 className="text-lg title-font font-medium">AI Predictive Maintenance</h2>
                  <p className="leading-relaxed text-base">A solution that uses AI to predict equipment failures before they happen, reducing downtime and maintenance costs.</p>
                  <a href="#!" className="mt-3 product-button text-white py-2 px-4 rounded transition duration-200 " style={{display: 'none'}}>View Product Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why NeuralBench Section */}
        <section id="why-neural-bench" className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-4 text-center">Why Choose NeuralBench</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <div className="flex-shrink-0 text-center">
                    <i className="fas fa-brain w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <h2 className="text-lg title-font font-medium">Expertise</h2>
                  <p className="leading-relaxed text-base">Our team of AI experts brings years of experience and deep knowledge to deliver innovative solutions tailored to your needs.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <div className="flex-shrink-0 text-center">
                    <i className="fas fa-cogs w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <h2 className="text-lg title-font font-medium">Innovation</h2>
                  <p className="leading-relaxed text-base">We are at the forefront of AI technology, constantly innovating to provide cutting-edge solutions that drive business success.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <div className="flex-shrink-0 text-center">
                    <i className="fas fa-shield-alt w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <h2 className="text-lg title-font font-medium">Security</h2>
                  <p className="leading-relaxed text-base">We prioritize the security and privacy of your data, implementing robust measures to protect your information at all times.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg card-hover">
                  <div className="flex-shrink-0 text-center">
                    <i className="fas fa-users w-12 h-12 text-black-500 mb-4"></i>
                  </div>
                  <h2 className="text-lg title-font font-medium">Customer Focus</h2>
                  <p className="leading-relaxed text-base">Our customer-centric approach ensures that we understand your unique challenges and deliver solutions that exceed your expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients/Testimonials Section */}
        <section id="clients" className="body-font" style={{display: 'none'}}>
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-4 text-center">Our Happy Clients</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <img alt="Client Logo" className="w-full h-24 object-contain" src="https://via.placeholder.com/150?text=Client+1" />
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <img alt="Client Logo" className="w-full h-24 object-contain" src="https://via.placeholder.com/150?text=Client+2" />
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <img alt="Client Logo" className="w-full h-24 object-contain" src="https://via.placeholder.com/150?text=Client+3" />
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <img alt="Client Logo" className="w-full h-24 object-contain" src="https://via.placeholder.com/150?text=Client+4" />
              </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-10">
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg">
                  <img alt="Client Photo" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mb-4" src="https://via.placeholder.com/80" />
                  <h2 className="text-lg title-font font-medium">John Doe</h2>
                  <p className="leading-relaxed text-base">"NeuralBench's AI solutions have transformed our business operations, making us more efficient and data-driven."</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-200 border p-6 rounded-lg">
                  <img alt="Client Photo" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mb-4" src="https://via.placeholder.com/80" />
                  <h2 className="text-lg title-font font-medium">Jane Smith</h2>
                  <p className="leading-relaxed text-base">"The AI solutions provided by NeuralBench have significantly improved our efficiency and customer satisfaction."</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <a href="#!" className="cta-button text-white py-2 px-4 rounded transition duration-200">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Footer with Icons */}
        <footer className="body-font" style={{backgroundColor: 'var(--text-color)', color: 'var(--background-color)'}}>
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">Contact Us</h2>
              <p className="mt-2 text-sm">Email: support@neuralbench.in</p>
              <p className="mt-2 text-sm" style={{display: 'none'}}>Phone: (123) 456-7890</p>
            </div>

            {/* Social Media Links */}
            <div className="w-full md:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">Follow Us</h2>
              <nav className="list-none mb-10 flex justify-center md:justify-start" aria-label="Social Media Links">
                <li className="mr-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800" aria-label="Facebook">
                    <i className="fab fa-facebook-f w-6 h-6 inline"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800" aria-label="Twitter">
                    <i className="fab fa-twitter w-6 h-6 inline"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in w-6 h-6 inline"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800" aria-label="Instagram">
                    <i className="fab fa-instagram w-6 h-6 inline"></i>
                  </a>
                </li>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="w-full md:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">Legal</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Terms of Service</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Cookie Policy</a>
                </li>
              </nav>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div style={{backgroundColor: 'var(--background-color)', color: 'var(--text-color)',display: 'none'}}>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <div className="flex-grow sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <h2 className="title-font font-medium tracking-widest text-sm mb-3">Subscribe to Our Newsletter</h2>
                <form onSubmit={handleSubmit} className="flex">
                  <input type="email" placeholder="Your Email" className="p-2 rounded-l" />
                  <button className="cta-button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <div style={{backgroundColor: 'var(--text-color)', color: 'var(--background-color)'}}>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-sm text-center sm:text-left">© 2024 NeuralBench —
                <a href="https://www.neuralbench.in/" rel="noopener noreferrer" className="ml-1" target="_blank">@neuralbench</a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}