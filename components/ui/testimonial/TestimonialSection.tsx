import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section pty-[18.125rem]">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6 items-center">
          <div className="col-span-6 -lg:col-span-12">
            <TestimonialCarousel />
          </div>

          <div className="col-span-6 pl-[8.5rem] -lg:col-span-12">
            <div className="flex items-center text-center gap-x-6 mb-12">
              <Image
                src="/images/subheading-icon.png"
                width="12"
                height="12"
                alt="subheading-icon"
              />
              <h4 className="uppercase">Testimonials</h4>
            </div>

            <div className="content-box mb-12">
              <h2>What Our Clients Say</h2>
              <p>
                Discover how Code Visionary Studios has made a difference for
                our clients. Our testimonials showcase the positive impact of
                our web design, app development, branding, and digital marketing
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
