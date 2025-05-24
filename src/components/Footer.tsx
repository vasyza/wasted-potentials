'use client';
import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elias</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/elias" 
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Follow me on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/github.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://linkedin.com/in/elias" 
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Connect with me on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://twitter.com/elias" 
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Follow me on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://instagram.com/elias" 
                className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Follow me on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/icons/instagram.svg" alt="" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Elias. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
