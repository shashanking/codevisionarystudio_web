import Image from "next/image";
import Link from "next/link";

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="services-section pt-[4.75rem] pb-[3.625rem]">
      <div className="container">
        <div className="flex items-center justify-center text-center gap-x-6 mb-12">
          <Image
            src="/images/subheading-icon.png"
            width="12"
            height="12"
            alt="subheading-icon"
          />
          <h4 className="uppercase">Our services</h4>
        </div>

        <div className="text-center content-box mb-[3.75rem] px-[8%]">
          <h2>Our Expertise</h2>
          <p>
            Discover the comprehensive range of IT services we offer at Code
            Visionary Studios. From web design and app development to branding
            and digital marketing, our expert team delivers innovative solutions
            that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
              <div className="w-[55%] pt-8 pl-[1.875rem]">
                <h3 className="text-2xl font-base relative mb-5">
                  Website Design & Development
                </h3>
                <p className="text-base pr-5">
                  Creating visually stunning and highly functional websites that
                  elevate your online presence. Our expert team blends
                  creativity with technical expertise to deliver custom web
                  solutions tailored to your unique business needs.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="btn btn-white services-item__btn--more"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <Image
                src="/images/web-design.png"
                width="492"
                height="331"
                alt="web application"
                className="absolute top-1/2 right-0 -translate-y-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/web-design-ring.png"
                width="388"
                height="331"
                alt="web application ring"
                className="block absolute right-0 bottom-0 transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
              <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">
                Mobile Application Design & Development
              </h3>

              <Image
                src="/images/mobile-app-dev.png"
                width="274"
                height="242"
                alt="Mobile Application Design & Development"
                className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/mobile-app-dev-block-bg.png"
                width="382"
                height="225"
                alt="Mobile Application Design & Development Block bg"
                className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>

          <div className="col-span-3">
            <div
              className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between bg-no-repeat bg-right-bottom bg-contain group"
              style={{
                backgroundImage: `url("/images/branding-bg-illustration.png")`,
              }}
            >
              <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">
                Branding{" "}
              </h3>

              <Image
                src="/images/branding.png"
                width="286"
                height="258"
                alt="Mobile Application Design & Development"
                className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/branding-block-ring.png"
                width="363"
                height="199"
                alt="Mobile Application Design & Development Block bg"
                className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
              <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">
                Digital Marketing
              </h3>

              <Image
                src="/images/digital-marketing.png"
                width="517"
                height="331"
                alt="web application"
                className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/digital-marketing-ring.png"
                width="299"
                height="409"
                alt="web application ring"
                className="block absolute right-0 top-0 bottom-0 transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
              <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">
                UI/UX Design
              </h3>

              <Image
                src="/images/ui-ux.png"
                width="518"
                height="331"
                alt="web application"
                className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/ui-ux-ring.png"
                width="518"
                height="276"
                alt="web application ring"
                className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="rounded-2xl bg-white bg-opacity-20 relative overflow-hidden h-full flex flex-col justify-between group">
              <h3 className="text-2xl font-base relative pt-8 px-[1.875rem] mb-5">
                Web Applications
              </h3>

              <Image
                src="/images/web-application.png"
                width="517"
                height="312"
                alt="web application"
                className="absolute left-1/2 bottom-0 -translate-x-[50%] z-20 transition-all duration-500 group-hover:scale-110"
              />
              <Image
                src="/images/web-applications-ring.png"
                width="517"
                height="288"
                alt="web application ring"
                className="block mx-auto transition-all duration-500 z-10 group-hover:scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
