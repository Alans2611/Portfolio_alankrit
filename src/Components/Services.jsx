import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Web Development",
    description:
      "I build responsive, high-performing websites and applications using modern technologies.",
    link: "Learn more",
  },
  {
    name: "Content Creation",
    description:
      "I craft compelling and engaging content, ranging from blog posts to video scripts, that resonates with target audiences and drives results.",
    link: "Learn more",
  },
  {
    name: "Operations Management",
    description:
      "I streamline workflows and manage operations to ensure efficient project execution and optimal resource utilization.",
    link: "Learn more",
  },
  {
    name: "Business Development",
    description:
      "I identify growth opportunities, build strong client relationships, and drive strategic initiatives to expand business reach and profitability.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          > 
          
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h4 className="max-w-[455px] mb-16">
              I am a passionate and versatile professional committed to
              delivering impactful solutions. My expertise spans
              multiple domains, allowing me to cater to diverse client needs and
              excel in dynamic environments.
            </h4>
            <img className="h-3/6 -translate-y-12 ml-8" src="src/assets/Lovepik_com-401495044-man-working-in-front-of-computer-25d-business-illustration-axono.png" alt="working" />
            <button className="btn btn-sm -translate-y-8">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
