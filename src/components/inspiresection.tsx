import { useState } from 'react';

const InspireSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  // Replace with your actual WhatsApp number (international format, no "+" sign)
  const whatsappNumber = "254791001601";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello,%20I'm%20interested%20in%20your%20services!`;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Process the form submission (e.g., send data to an API)
    console.log({ name, contact });
    // Optionally, reset the form fields
    setName('');
    setContact('');
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-center space-x-4 mb-12">
        <span className="text-4xl font-bold">innovate</span>
        <span className="text-green-400 text-2xl">✦</span>
        <span className="text-4xl font-bold">inspire</span>
        <span className="text-green-400 text-2xl">✦</span>
        <span className="text-4xl font-bold">create</span>
      </div>
      
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-lg text-gray-800">
          Finding the right talent for your business can be a daunting task. Let Catalyst Studio's hiring agency 
          take the guesswork out of the process and help you find the perfect fit for your team.
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Hire Us
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="border border-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Book Consultation
        </button>
      </div>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book a Consultation</h2>
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  Submit
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
