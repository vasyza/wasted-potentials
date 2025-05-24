'use client';
import Image from 'next/image';
import { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

interface CopyFeedback {
  card?: string;
  btc?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [copyFeedback, setCopyFeedback] = useState<CopyFeedback>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string; };
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const nameError = validateField('name', formData.name);
    if (nameError) {
      newErrors.name = nameError;
      isValid = false;
    }

    const emailError = validateField('email', formData.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    const messageError = validateField('message', formData.message);
    if (messageError) {
      newErrors.message = messageError;
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors).find(key => errors[key as keyof FormErrors]) as keyof FormErrors | undefined;
      if (firstErrorKey) {
        const errorElement = document.getElementById(firstErrorKey);
        if (errorElement) {
          errorElement.focus();
        }
      }
      return;
    }

    setSubmissionStatus('loading');
    setTimeout(() => {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmissionStatus('idle'), 5000); 
    }, 2000);
  };

  const handleCopy = async (textToCopy: string, feedbackKey: keyof CopyFeedback) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyFeedback((prev) => ({ ...prev, [feedbackKey]: 'Copied!' }));
    } catch (err) {
      setCopyFeedback((prev) => ({ ...prev, [feedbackKey]: 'Failed' }));
    }
    setTimeout(() => {
      setCopyFeedback((prev) => ({ ...prev, [feedbackKey]: undefined }));
    }, 2500);
  };

  const cardNumber = "4149500120690030";
  const btcAddress = "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd";

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

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Enter your full name"
                  className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition-all`}
                  aria-describedby="name-error"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Enter your email address"
                  className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition-all`}
                  aria-describedby="email-error"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Tell me about your project or inquiry"
                  rows={6}
                  className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent resize-none transition-all`}
                  aria-describedby="message-error"
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                aria-describedby="submit-status-message" 
              >
                {submissionStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              <div id="submit-status-message" role="status" aria-live="polite" className="mt-4 h-6">
                {submissionStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
                {submissionStatus === 'error' && <p className="text-red-500">Failed to send message. Please try again.</p>}
              </div>
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
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Image src="/icons/card.svg" alt="" width={16} height={16} aria-hidden="true" />
                      Card Payment
                    </h4>
                    <button
                      onClick={() => handleCopy(cardNumber, 'card')}
                      aria-label="Copy card number"
                      className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {copyFeedback.card || 'Copy'}
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">Support via card payment</p>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-400 text-sm font-mono select-all" id="card-number" aria-label={`Card number: ${cardNumber}`}>
                      {cardNumber}
                    </p>
                  </div>
                  <div aria-live="polite" className="text-xs h-4 mt-1"> {/* h-4 to prevent layout shift */}
                    {copyFeedback.card === "Copied!" && <span className="text-green-500">Copied!</span>}
                    {copyFeedback.card === "Failed" && <span className="text-red-500">Failed to copy.</span>}
                  </div>
                </div>

                {/* Bitcoin */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Image src="/icons/bitcoin.svg" alt="" width={16} height={16} aria-hidden="true" />
                      Bitcoin
                    </h4>
                     <button
                      onClick={() => handleCopy(btcAddress, 'btc')}
                      aria-label="Copy Bitcoin address"
                      className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {copyFeedback.btc || 'Copy'}
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">BTC Address</p>
                  <div className="flex items-center justify-between">
                    <p className="text-orange-400 text-xs font-mono break-all select-all" id="btc-address" aria-label={`Bitcoin address: ${btcAddress}`}>
                      {btcAddress}
                    </p>
                  </div>
                   <div aria-live="polite" className="text-xs h-4 mt-1"> {/* h-4 to prevent layout shift */}
                    {copyFeedback.btc === "Copied!" && <span className="text-green-500">Copied!</span>}
                    {copyFeedback.btc === "Failed" && <span className="text-red-500">Failed to copy.</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info (remains unchanged) */}
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