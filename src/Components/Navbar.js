/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import logo from "../assets/img/Logo.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/Twitter.svg";
import linkedin from "../assets/img/Frame 28.svg";
import facebook from "../assets/img/Facebook.svg";
import google from "../assets/img/Google Play.svg";
import apple from "../assets/img/App Store.svg";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav id="header" className="w-full shadow">
      <div className="header">
        <div className="newhead">
          <div className="head flex items-center justify-between py-3 lg:py-5 md:block">
            <a href="">
              <img src={logo} alt="Logo" className="logo" />
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            id="menus"
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <ul className="items-center text-[20px] justify-center hidden lg:flex  lg:gap-[20px]">
              <li className="text-white hover:text-indigo-200">
                <a href="Whyus">Why ProjectBist</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#Aboutus">About us</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="Ourservices">Our services</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#Contantus">Contact uS</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="">Blog</a>
              </li>
            </ul>

            <div className="mobile-nav-menu-only lg:hidden z-50 left-0 flex flex-col absolute w-full sm:top-[100px] md:top-[150px] bg-white p-4 justify-start text-left align-top">
              <div className="top4 flex gap-5 ">
                <a href="">
                  <img width={100} src={google} />
                </a>
                <a href="">
                  <img width={100} src={apple} />
                </a>
              </div>
              <div className="mobile-menues  text-[#212D44] flex flex-col my-6 gap-4 border-y-[1px] border-[#212D44] py-7 ">
                <p>Why ProjectBist</p>
                <p>Our Services</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blog</p>
              </div>
              <div className="mobile-menues text-[#212D44] flex flex-col gap-4  py-7  ">
                <p>Lagos, Nigeria</p>
                <p>+234 (0)70 6434 5674</p>
                <p>info@projectbist.com</p>
                <div className="socials">
                  <a>
                    <img src={facebook} />
                  </a>
                  <a>
                    <img src={twitter} />
                  </a>
                  <a>
                    <img src={instagram} />
                  </a>
                  <a>
                    <img src={linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Dbutton" className=" ">
          <a
            href=""
            className="text-[#887040] text-[16px] bg-[#F5F6FA] hidden lg:inline-block rounded-sm shadow hover:bg-[#f5f6fa]">
            Download apip
          </a>
        </div>
      </div>
    </nav>
  );
}
