import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import logo1 from "../assets/Services.png";

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
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <p className="max-w-[500px] mx-auto lg:mx-0 leading-relaxed mb-8 text-lg">
              I am a passionate and versatile professional committed to
              delivering impactful solutions. My expertise spans multiple
              domains, allowing me to cater to diverse client needs and excel in
              dynamic environments.
            </p>
            <img
              className="h-52 lg:h-64 mx-auto lg:mx-0 -translate-y-6"
              src={logo1}
              alt="Services Overview"
            />
            <button className="btn btn-sm mt-6">See my work</button>
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
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 pb-8 flex flex-col lg:flex-row justify-between gap-8"
                    key={index}
                  >
                    <div className="lg:max-w-[476px]">
                      <h4 className="text-xl font-semibold mb-4">{name}</h4>
                      <p className="text-md leading-relaxed">{description}</p>
                    </div>
                    <div className="flex items-center lg:items-end">
                      <a
                        href="#"
                        className="btn w-12 h-12 flex items-center justify-center hover:bg-accent transition"
                        aria-label={`Learn more about ${name}`}
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="#"
                        className="ml-4 text-sm text-accent hover:underline"
                      >
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
