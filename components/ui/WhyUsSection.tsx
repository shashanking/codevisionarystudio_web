import Image from "next/image";

export const WhyUsSection: React.FC = () => {
  return (
    <section className="why-us-section pt-[14.125rem] pb-[10.125rem]">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-6 -lg:col-span-12"></div>
          <div className="col-span-6 pl-[8.5rem] -lg:col-span-12">
            <div className="flex items-center text-center gap-x-6 mb-12">
              <Image
                src="/images/subheading-icon.png"
                width="12"
                height="12"
                alt="subheading-icon"
              />
              <h4 className="uppercase">Why Us</h4>
            </div>

            <div className="content-box mb-12">
              <h2>Our Expertise</h2>
              <p>
                Discover the comprehensive range of IT services we offer at Code
                Visionary Studios. From web design and app development to
                branding and digital marketing, our expert team delivers
                innovative solutions that drive your business forward.
              </p>
            </div>

            <ul>
              <li>
                <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                  <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="content-box text-dark-400">
                    <h3>Customized Strategies</h3>
                    <p>
                      We create bespoke solutions that align with your specific
                      business objectives, ensuring that every project is unique
                      and impactful.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                  <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="content-box text-dark-400">
                    <h3>Collaborative Process</h3>
                    <p>
                      We work closely with you throughout the entire process to
                      ensure your vision is realized and expectations are
                      exceeded.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="rounded-[4.875rem] bg-white px-[2.875rem] py-3.5 flex items-center gap-x-5 why-us-block">
                  <div className="bg-dark-400 rounded-full inline-flex items-center justify-center size-[4.375rem] text-4xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="content-box text-dark-400">
                    <h3>Proven Track Record</h3>
                    <p>
                      Our portfolio of successful projects and satisfied clients
                      speaks to our commitment to excellence and our ability to
                      deliver results.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
