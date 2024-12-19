import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFeedbackClick = (selectedFeedback) => {
    setFeedback(selectedFeedback);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Your message has been successfully sent!');
    setEmail('');
    setFeedback('');
  };

  return (
    <section id="contact" className="contact bg-black text-white py-20 px-8 lg:px-20 h-screen flex items-center justify-center">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="information space-y-8 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Me
          </h1>
          <p className="text-lg text-gray-300">
            Got a question? Want to work together? Feel free to reach out to me!
          </p>
          <div className="space-y-4">
            <a href="mailto:mankaryash25@gmail.com" className="flex items-center space-x-2 text-gray-200 hover:text-yellow-300 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-500" />
              <span className="text-lg">mankaryash25@gmail.com</span>
            </a>
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer" className="flex items-start space-x-2 text-gray-200 hover:text-yellow-300 transition duration-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-purple-500" />
              <span className="text-lg">Nagpur, Maharashtra, India</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form flex flex-col items-center justify-centerbg-black p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email *"
              required
              className="w-full md:w-3/4 h-12 px-6 rounded-full border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="h-12 w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-white mr-2" />
              Send Message
            </button>
          </form>

          {/* Success/Error Message */}
          {successMessage && (
            <div className="mt-4 text-center text-yellow-400 font-medium">{successMessage}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// const Contact = () => {
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState(''); // Feedback can be 'happy', 'neutral', or 'dissatisfied'
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleFeedbackClick = (selectedFeedback) => {
//     setFeedback(selectedFeedback); // Set the feedback based on the emoji clicked
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate form submission success
//     setSuccessMessage('Your message has been successfully sent!');
//     setEmail(''); // Reset email input
//     setFeedback(''); // Reset feedback after submission
//   };

//   return (

 
// <section id="contact" className="contact pt-30 bg-gray-800 text-white  dark:bg-black px-20 py-20 h-screen">
//   <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-8 mt-20">
//     {/* Contact Information */}
//     <div className="information space-y-8 flex flex-col items-start">
//       <h1 className="text-3xl font-bold text-center">
//         <span className="text-white dark:text-gray-400 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
//           Contact
//         </span>
//       </h1>
//       <p className="text-gray-300 dark:text-yellow-400">
//         If you have any questions or want to work together, feel free to contact me!
//       </p>
//       <a href="mailto:mankaryash25@gmail.com" className="flex items-center space-x-2 text-gray-200 dark:text-gray-400">
//         <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-500" />
//         <span>: mankaryash25@gmail.com</span>
//       </a>
//       <a
//         href="https://goo.gl/maps/xyz"
//         target="_blank"
//         rel="noreferrer"
//         className="flex items-start space-x-2 text-gray-200 dark:text-gray-400"
//       >
//         <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-purple-500" />
//         <span>Nagpur , Maharashtra , India</span>
//       </a>

//     </div>

//     {/* Contact Form */}
//     <div className="form bg-grey p-3 flex flex-col items-start mt-20">
//       <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email *"
//           required
//           className="w-3/4 h-10 p-5 text-black border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//         />
//         <button
//           id="submit"
//           type="submit"
//           className="w-1/1 h-12 bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-4 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white flex items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
//         </button>
//       </form>
//     </div>

//     {/* Success/Error Message */}
//     {successMessage && (
//       <div className="mt-4 text-center text-yellow-400">
//         {successMessage}
//       </div>
//     )}
//   </div>
// </section>

//   );
// };

// export default Contact;
