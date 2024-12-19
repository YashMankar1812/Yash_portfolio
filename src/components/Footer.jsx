import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
      <section className="footer bg-gray-800 text-white dark:bg-black flex flex-col sm:flex-row justify-between px-5 py-6 sm:py-10 space-y-4 sm:space-y-0">
        <a href="#" className="text-xl sm:text-2xl text-blue-400 text-center flex justify-center">
          Yash Mankar
        </a>
        <div className="social-container text-center flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <ul className="social-media flex justify-center space-x-6">
            <li className="icon">
              <a href="https://github.com/YashMankar1812" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-400" />
              </a>
            </li>
            <li className="icon">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-400" />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.linkedin.com/in/yash-mankar-50625825b/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700" />
              </a>
            </li>
            <li className="icon">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-500" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright text-center sm:text-right">
          <p className="text-gray-400 mx-3 bg-black p-2 m-0">
            © 2025 All Rights Reserved. Designed by 💖 Yash
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
