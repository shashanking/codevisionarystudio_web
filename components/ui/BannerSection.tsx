import { motion } from "framer-motion";
import { HoverBorderGradient } from "./buttons/HoverBorderGradient";
export const BannerSection: React.FC = () => {
  return (
    <section className="hero-section h-screen relative">
      <div className="container h-full relative z-20">
        <div className="flex flex-col h-full justify-center text-center">
          <div className="content-box mb-[6.25rem] text-2xl">
            <motion.div
              initial={{
                y: -100,
                transitionDuration: "3000",
                transitionDelay: "10000",
              }}
              whileInView={{ y: 0 }}
            >
              <h1>
                Transforming Ideas into<br></br>
                <span className="gradient-text">Digital Reality</span>
              </h1>
            </motion.div>

            <p>Web Design, App Development, Branding & Marketing Services</p>
          </div>
          <div className=" flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white bg-white font-medium text-primary-400 font-bold flex items-center space-x-2 font-heading"
            >
              <span>Get Started</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <iframe
          src="https://my.spline.design/webbg-2027e265eca50f4533c337593fa82e2a"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
};
