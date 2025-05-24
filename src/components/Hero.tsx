'use client';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="bg-black text-white min-h-screen flex items-center" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m <span className="text-blue-400">Elias</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300">
                Frontend Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              I create beautiful and functional web experiences with modern technologies. 
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="View my projects"
              >
                View My Work
              </button>
              <a 
                href="/cv.pdf" 
                download
                className="inline-block border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Download my CV"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8" role="list" aria-label="Social media links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label="Visit my GitHub profile"
              >
                <Image src="/icons/github.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label="Visit my LinkedIn profile"
              >
                <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label="Visit my Twitter profile"
              >
                <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label="Visit my Dribbble profile"
              >
                <Image src="/icons/dribbble.svg" alt="" width={24} height={24} />
              </a>
              <a 
                href="https://figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label="Visit my Figma profile"
              >
                <Image src="/icons/figma.svg" alt="" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-bold text-white opacity-20">
                E
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
