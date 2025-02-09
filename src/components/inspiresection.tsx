import { useState } from 'react';
import emailjs from '@emailjs/browser';

const InspireSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Replace with your actual WhatsApp number (international format, no "+" sign)
  const whatsappNumber = "254791001601";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20your%20services!`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your actual EmailJS service details
      const templateParams = {
        to_email:'elviskarani236@gmail.com',
        from_name: name,
        contact_info: contact,
        message: `New consultation request from ${name}. Contact information: ${contact}`,
      };

      await emailjs.send(
        'service_e7nlpyt', // Replace with your EmailJS service ID
        'template_wsextyc', // Replace with your EmailJS template ID
        templateParams,
        'x2EVmUrj0-jBkhYWf' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setName('');
      setContact('');
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
        <span className="text-2xl sm:text-4xl font-bold">innovate</span>
        <span className="text-green-400 text-xl sm:text-2xl">✦</span>
        <span className="text-2xl sm:text-4xl font-bold">inspire</span>
        <span className="text-green-400 text-xl sm:text-2xl">✦</span>
        <span className="text-2xl sm:text-4xl font-bold">create</span>
      </div>
      
      {/* Description Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-base sm:text-lg text-gray-800">
          Finding the right talent for your business can be a daunting task. Let Catalyst Studio's hiring agency 
          take the guesswork out of the process and help you find the perfect fit for your team.
        </p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-black text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Hire Us
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="border border-black px-6 sm:px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Book Consultation
        </button>
      </div>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Book a Consultation</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
                  Phone or Email
                </label>
                <input
                  id="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400"
                  placeholder="Your Phone Number or Email"
                />
              </div>
              {submitStatus === 'success' && (
                <div className="mb-4 text-green-600">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 text-red-600">Failed to send message. Please try again.</div>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspireSection;