import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Let&apos;s <span className="text-blue-400">Connect</span>
              </h2>
              <p className="text-xl text-gray-400">
                Have a project in mind? Let&apos;s discuss how we can work together.
              </p>
            </div>

            <form className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  aria-describedby="name-error"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  aria-describedby="email-error"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or inquiry"
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  aria-describedby="message-error"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-describedby="submit-status"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Image src="/icons/heart.svg" alt="" width={20} height={20} aria-hidden="true" />
                Support My Work
              </h3>
              
              <div className="space-y-4">
                {/* Card Payment */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Image src="/icons/card.svg" alt="" width={16} height={16} aria-hidden="true" />
                    Card Payment
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">Support via card payment</p>
                  <p className="text-blue-400 text-sm font-mono select-all" role="textbox" aria-label="Card number: 4149500120690030">
                    4149500120690030
                  </p>
                </div>

                {/* Bitcoin */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Image src="/icons/bitcoin.svg" alt="" width={16} height={16} aria-hidden="true" />
                    Bitcoin
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">BTC Address</p>
                  <p className="text-orange-400 text-xs font-mono break-all select-all" role="textbox" aria-label="Bitcoin address: 3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd">
                    3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image src="/icons/email.svg" alt="" width={20} height={20} aria-hidden="true" />
                  <a href="mailto:hello@elias.dev" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                    hello@elias.dev
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Image src="/icons/calendar.svg" alt="" width={20} height={20} aria-hidden="true" />
                  <span className="text-gray-400">Schedule a call</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://discord.gg/elias" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Join me on Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/discord.svg" alt="" width={24} height={24} />
                </a>
                <a 
                  href="https://t.me/elias" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Message me on Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/telegram.svg" alt="" width={24} height={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/elias" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Connect with me on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
                </a>
                <a 
                  href="https://twitter.com/elias" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label="Follow me on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;