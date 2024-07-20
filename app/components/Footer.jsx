import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer rounded-t-[3.75rem]">
      <div className="container">
        <div className="pt-20 pb-[6.625rem]">
          {/* Footer Contact Form */}
          <h2 className="text-dark-400 mb-10">Contact Us</h2>

          <div className="footer-contact-form">
            <form action="#">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-3">
                  <input type="text" name="cf_name" id="" className="form-control" placeholder="Your Name*" required />
                </div>

                <div className="col-span-3">
                  <input type="email" name="cf_email" id="" className="form-control" placeholder="Email ID*" required />
                </div>

                <div className="col-span-3">
                  <input type="tel" name="cf_phone" id="" className="form-control" placeholder="Phone Number" required />
                </div>

                <div className="col-span-3">
                  <select name="cf_subject" id="" className="form-control h-[3.625rem]" required>
                    <option value="" selected disabled>
                      Subject
                    </option>
                    <option value="Sub 1">Subject 1</option>
                    <option value="Sub 2">Subject 2</option>
                    <option value="Sub 3">Subject 3</option>
                  </select>
                </div>
              </div>

              <div className="mt-20">
                <button type="submit" className="btn btn-dark submit-btn w-full text-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          {/* Footer About */}
          <div className="col-span-6 pr-[9.75rem]">
            <div className="mb-7">
              <Link href="/">
                <Image src="/images/footer-logo.png" width="240" height="64" alt="footer logo" />
              </Link>
            </div>

            <div className="content-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis erat ac ex bibendum, nec vulputate lorem posuere. Nunc mollis turpis eget nibh sollicitudin, nec semper sem facilisis.</p>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="col-span-3 pl-[9.25rem]">
            <h3 className="uppercase text-2xl mb-4">Menu</h3>

            <nav>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <Link href="/" className="text-white block hover:text-gray-200">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/" className="text-white block hover:text-gray-200">
                    Our Services
                  </Link>
                </li>

                <li>
                  <Link href="/" className="text-white block hover:text-gray-200">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link href="/" className="text-white block hover:text-gray-200">
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link href="/" className="text-white block hover:text-gray-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Footer Contact */}
          <div className="col-span-3">
            <h3 className="uppercase text-2xl mb-4">Contact Info</h3>

            <ul className="flex flex-col gap-y-3">
              <li>
                <a href="tel:+1 (289) 352-1293">+1 (289) 352-1293</a>
              </li>
              <li>Address, Kolkata, West Bengal 700040</li>
              <li>
                <a href="mailto:Codevisionary@gmail.com">Codevisionary@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-[3.75rem] pb-16 overflow-hidden">
        {/* Sliding Text */}
        <div className="sliding-heading flex items-center border-t border-white border-b py-12">
          <div className="flex items-center gap-x-14 scrolling-right-1">
            <span>Code Visionary Studios</span>
            <Image src="/images/sliding-heading-icon.png" width="53" height="53" alt="shape" />
          </div>

          <div className="flex items-center gap-x-14 scrolling-right-2">
            <span>Code Visionary Studios</span>
            <Image src="/images/sliding-heading-icon.png" width="53" height="53" alt="shape" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
