import React from "react";
import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is a smart and reliable doctor appointment booking
            platform designed to make healthcare accessible and convenient. With
            features like easy doctor search by specialty, secure online
            payments, and seamless appointment scheduling, Prescripto connects
            patients with trusted doctors anytime, anywhere. Our mission is to
            simplify healthcare management and provide a smooth experience for
            both patients and doctors.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-83000-347-03</li>
            <li>princeydv@gmail.com</li>
          </ul>
          <div className="flex gap-4 text-2xl mt-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prince-yadav-b118a2278/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="hover:scale-110 duration-300 cursor-pointer"
                style={{ color: "#0077b5" }} // LinkedIn Blue
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prince_ydv333/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare
                className="hover:scale-110 duration-300 cursor-pointer"
                style={{ color: "#E1306C" }} // Instagram Pink
              />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/prince.yadav.649873"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="hover:scale-110 duration-300 cursor-pointer"
                style={{ color: "#1877F2" }} // Facebook Blue
              />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/Prince_ydv333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="hover:scale-110 duration-300 cursor-pointer"
                style={{ color: "#1DA1F2" }} // Twitter Blue
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Prescripto.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
