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
          <div>
            {/* <button className="relative inline-flex overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f23232_50%,#07ac7a_100%,#5220c7_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white py-3 px-8 font-medium text-primary-400 backdrop-blur-3xl hover:text-dark-400">
                Get Started
              </span>
            </button> */}
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
