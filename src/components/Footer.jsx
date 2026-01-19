import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLinkSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <section>
      <footer className="footer sm:footer-horizontal bg-[#22254a] p-10 text-white">
        <aside className="space-y-4">
          <img src="/logo-01.png" className="rounded-xl w-20" alt="" />
          <p>
            Pet House Industries Ltd.
            <br />
            Providing reliable tech since 2007
          </p>
          <div className="flex space-x-6">
            <img
              className="w-12 cursor-pointer"
              src="../../assets/facebook.png"
              alt=""
            />
            <img
              className="w-12 cursor-pointer"
              src="../../assets/instagram.png"
              alt=""
            />
            <img
              className="w-12 cursor-pointer"
              src="../../assets/youtube.png"
              alt=""
            />
            <img
              className="w-12 cursor-pointer"
              src="../../assets/twitter.png"
              alt=""
            />
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </nav>

        <nav>
          <h6 className="footer-title">Help Center</h6>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">FAQ</a>
        </nav>

        <nav>
          <h6 className="footer-title">contact us</h6>
          <div className="flex items-center gap-2">
            <FiPhoneCall /> <a className="link link-hover"> +88018523-39825</a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall /> <a className="link link-hover"> +88015237-39825</a>
          </div>
          <div className="flex items-center gap-2">
            <IoLinkSharp /> <a className="link link-hover"> WWW.pethouse.com</a>
          </div>
        </nav>
      </footer>
      <div className="sm:footer-horizontal bg-[#171a39] p-6 text-white">
        <p className="text-center">
          all right reserved by @pethouse Ltd. Copyright &copy; 2026 | Powered
          by pethouse{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
