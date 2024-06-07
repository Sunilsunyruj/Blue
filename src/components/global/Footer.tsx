import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-400">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center text-white-600 sm:justify-start">
            <div className="flex items-center space-x-1">
              <p className="text-3xl font-bold">Bl</p>
              <Image
                src="/fuzzieLogo.png"
                width={16}
                height={16}
                alt="fuzzie logo"
                className="shadow-sm"
              />
              <p className="text-3xl font-bold">em</p>
            </div>
          </div>
        </div>
        <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
          Enhance Every Customer Connection with Blem: Your Partner in Revolutionary CRM Solutions for Sustainable Business Growth and Engagement.
        </p>
        <div className="mt-0 grid grid-cols-1 gap-6 border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white-900">About Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Company History</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Meet the Team</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Employee Handbook</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Careers</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white-900">Our Services</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">CRM Implementation</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Sales</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Customer Support</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Data Analyst</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white-900">Contact Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">info@example.com</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">123, Main Street Country</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Phone: XXXX12341</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white-900">Helpful Links</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">FAQs</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Support</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Consent Preferences</a></li>
              <li><a className="text-white-700 transition hover:text-white-700/75" href="#">Security</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-white-900">Stay in Touch</p>
            <div className="mx-auto mt-8 max-w-md sm:ms-0">
              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    className="w-full rounded-full border-gray-200 px-6 py-3 shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-white-500 sm:text-left">
            Copyright &copy; 2024 Blem. All rights reserved.
          </p>
          <p className="text-center text-sm text-white-500 sm:text-left">
            Terms of Services
          </p>
          <p className="text-center text-sm text-white-500 sm:text-left">
            <Link href="/privacypolicy" className="text-center text-sm text-white-500 sm:text-left underline">
              Privacy Policy
            </Link>
          </p>
          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-white-700 transition hover:text-white-700/75">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-white-700 transition hover:text-white-700/75">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-white-700 transition hover:text-white-700/75">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-white-700 transition hover:text-white-700/75">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.producthunt.com/posts/blem-crm?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-blem&#0045;crm"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=461676&theme=light"
                  alt="Blem CRM - Blem CRM is an AI-powered sales CRM with power dialer. | Product Hunt"
                  style={{ width: '250px', height: '54px' }}
                  width="250"
                  height="54"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
