"use client";
import Image from "next/image";
import Link from "next/link";
import TeamCard from "./components/TeamCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { motion } from "framer-motion";

export default function Home() {
  const teamMembers = [
    {
      id: 1,
      thumbnail: "/images/team-1.jpg",
      title: "Vikash Jha",
      designation: "Co Founder, UI/UX Designer",
    },
    {
      id: 2,
      thumbnail: "/images/team-1.jpg",
      title: "Vikash Jha",
      designation: "Co Founder, UI/UX Designer",
    },
    {
      id: 3,
      thumbnail: "/images/team-1.jpg",
      title: "Vikash Jha",
      designation: "Co Founder, UI/UX Designer",
    },
    {
      id: 4,
      thumbnail: "/images/team-1.jpg",
      title: "Vikash Jha",
      designation: "Co Founder, UI/UX Designer",
    },
  ];

  return (
    <main>
      <section className="hero-section h-screen relative">
        <div class="container h-full relative z-20">
          <div className="flex flex-col h-full justify-center text-center">
            <div className="content-box mb-[6.25rem] text-2xl">
              <motion.div initial={{ y: -100, transitionDuration: 3000, transitionDelay: 10000 }} whileInView={{ y: 0}}>
              <h1>
                Transforming Ideas into<br></br>
                <span className="gradient-text">Digital Reality</span>
              </h1>
              </motion.div>

              <p>Web Design, App Development, Branding & Marketing Services</p>
            </div>
            <div>
              <Link href="/" className="btn btn-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
          <iframe src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      </section>

      <section className="services-section pt-[4.75rem] pb-[3.625rem]">
        <div className="container">
          <div className="flex items-center justify-center text-center gap-x-6 mb-12">
            <Image src="/images/subheading-icon.png" width="12" height="12" alt="subheading-icon" />
            <h4 className="uppercase">Our services</h4>
          </div>

          <div className="text-center content-box mb-[3.75rem] px-[8%]">
            <h2>Our Expertise</h2>
            <p>Discover the comprehensive range of IT services we offer at Code Visionary Studios. From web design and app development to branding and digital marketing, our expert team delivers innovative solutions that drive your business forward.</p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
                <div className="w-[55%] pt-8 pl-[1.875rem]">
                  <h3 className="text-2xl font-base relative mb-5">Website Design & Development</h3>
                  <p className="text-base pr-5">Creating visually stunning and highly functional websites that elevate your online presence. Our expert team blends creativity with technical expertise to deliver custom web solutions tailored to your unique business needs.</p>
                  <div className="mt-6">
                    <Link href="/" className="btn btn-white services-item__btn--more">
                      Learn More
                    </Link>
                  </div>
                </div>

                <Image src="/images/web-design.png" width="492" height="331" alt="web application" className="absolute top-1/2 right-0 -translate-y-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/web-design-ring.png" width="388" height="331" alt="web application ring" className="block absolute right-0 bottom-0 transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>

            <div className="col-span-3">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
                <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">Mobile Application Design & Development</h3>

                <Image src="/images/mobile-app-dev.png" width="274" height="242" alt="Mobile Application Design & Development" className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/mobile-app-dev-block-bg.png" width="382" height="225" alt="Mobile Application Design & Development Block bg" className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>

            <div className="col-span-3">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between bg-no-repeat bg-right-bottom bg-contain group" style={{ backgroundImage: `url("/images/branding-bg-illustration.png")` }}>
                <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">Branding </h3>

                <Image src="/images/branding.png" width="286" height="258" alt="Mobile Application Design & Development" className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/branding-block-ring.png" width="363" height="199" alt="Mobile Application Design & Development Block bg" className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>

            <div className="col-span-4">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
                <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">Digital Marketing</h3>

                <Image src="/images/digital-marketing.png" width="517" height="331" alt="web application" className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/digital-marketing-ring.png" width="299" height="409" alt="web application ring" className="block absolute right-0 top-0 bottom-0 transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>

            <div className="col-span-4">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
                <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">UI/UX Design</h3>

                <Image src="/images/ui-ux.png" width="518" height="331" alt="web application" className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/ui-ux-ring.png" width="518" height="276" alt="web application ring" className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>

            <div className="col-span-4">
              <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
                <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">Web Applications</h3>

                <Image src="/images/web-application.png" width="517" height="312" alt="web application" className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110" />
                <Image src="/images/web-applications-ring.png" width="517" height="288" alt="web application ring" className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section pt-[14.125rem] pb-[10.125rem]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-6 -lg:col-span-12"></div>
            <div className="col-span-6 pl-[8.5rem] -lg:col-span-12">
              <div className="flex items-center text-center gap-x-6 mb-12">
                <Image src="/images/subheading-icon.png" width="12" height="12" alt="subheading-icon" />
                <h4 className="uppercase">Why Us</h4>
              </div>

              <div className="content-box mb-12">
                <h2>Our Expertise</h2>
                <p>Discover the comprehensive range of IT services we offer at Code Visionary Studios. From web design and app development to branding and digital marketing, our expert team delivers innovative solutions that drive your business forward.</p>
              </div>

              <ul>
                <li>
                  <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                    <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">1</div>
                    <div className="content-box text-dark-400">
                      <h3>Customized Strategies</h3>
                      <p>We create bespoke solutions that align with your specific business objectives, ensuring that every project is unique and impactful.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                    <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">2</div>
                    <div className="content-box text-dark-400">
                      <h3>Collaborative Process</h3>
                      <p>We work closely with you throughout the entire process to ensure your vision is realized and expectations are exceeded.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                    <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">3</div>
                    <div className="content-box text-dark-400">
                      <h3>Proven Track Record</h3>
                      <p>Our portfolio of successful projects and satisfied clients speaks to our commitment to excellence and our ability to deliver results.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section"></section>

      <section className="team-section pt-[7.5rem] pb-[7.125rem]">
        <div className="container">
          <div className="flex items-center justify-center text-center gap-x-6 mb-12">
            <Image src="/images/subheading-icon.png" width="12" height="12" alt="subheading-icon" />
            <h4 className="uppercase">Our Team</h4>
          </div>

          <div className="text-center content-box mb-[3.75rem] px-[8%]">
            <h2>MEAT OUR TALENTED TEAM</h2>
            <p>Meet the passionate professionals who drive the success of Code Visionary Studios. Our team's diverse backgrounds and expertise come together to create powerful, integrated solutions that help our clients thrive in the digital world.</p>
          </div>

          <ul className="team-grid flex flex-wrap *:px-2.5 *:w-3/12 -mx-2.5">
            {teamMembers.map((member) => {
              return (
                <li>
                  <TeamCard key={member.id} title={member.title} designation={member.designation} thumbnail={member.thumbnail} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="testimonial-section pty-[18.125rem]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6 items-center">
            <div className="col-span-6 -lg:col-span-12">
              <TestimonialCarousel />
            </div>

            <div className="col-span-6 pl-[8.5rem] -lg:col-span-12">
              <div className="flex items-center text-center gap-x-6 mb-12">
                <Image src="/images/subheading-icon.png" width="12" height="12" alt="subheading-icon" />
                <h4 className="uppercase">Testimonials</h4>
              </div>

              <div className="content-box mb-12">
                <h2>What Our Clients Say</h2>
                <p>Discover how Code Visionary Studios has made a difference for our clients. Our testimonials showcase the positive impact of our web design, app development, branding, and digital marketing services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
