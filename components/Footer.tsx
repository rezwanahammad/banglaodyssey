import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <div>
              <p className="text-sm">69/1 RK Mission road</p>
              <p className="font-bold">Mymensingh,Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-xl mr-3" />
            <p className="font-bold">+880 17146 53351</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-xl mr-3" />
            <a
              href="mailto:rezwanahammad68@gmail.com"
              className="text-blue-400 hover:underline"
            >
              rezwanahammad68@gmail.com
            </a>
          </div>
        </div>

        {/* Right - About */}
        <div>
          <h3 className="font-bold mb-2">Bangla Odyssey</h3>
          <p className="text-sm mb-4">
            A web platform showcasing the beauty, culture, and tourist
            attractions of Bangladesh.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/rezwan.ahammad.raad.2024/"
              className="hover:text-blue-400"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Rezwanraad68"
              className="hover:text-blue-400"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rezwan-ahammad-a684b024b/"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/rezwanahammad"
              className="hover:text-blue-400"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
