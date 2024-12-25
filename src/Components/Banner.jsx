import React from "react";
//images
import Image from "../assets/banner_img.png"
//icons

import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//Motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-12">
          {" "}
          {/* This div needs to be closed */}
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[110px]"
            >
              ALANKRIT 
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="nb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Creator",
                  2000,
                  "Instructor",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate Frontend developer with 2+ years in building scalable, 
              high-impact applications, leveraging technologies like JavaScript, React, Nodejs and Tailwind CSS. 
              Passionate about delivering optimized, advanced solutions 
              with a strong focus on collaboration and code quality.

            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="src/assets/Alankrit_Updated_resume.pdf" dowload className="text-gradient btn-link">
              <button className="btn btn-lg">Download Resume</button>
              </a>
              <a href="#contact" className="text-gradient btn-link">
              <button className="btn btn-lg">Contact Me</button>
              </a>
            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/alankrit-srivastav26/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Alans2611">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/alankritsrivastav_26?igsh=MXY2b3B1M3o5NnRzMA==">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px] mx-auto "
          >
            <img className="border-none outline-none ring-0 transform -translate-y-24 h-screen w-screen" src={Image} alt="Developer Image"/>
          </motion.div>
        </div>
        {/* Closing the div here */}
      </div>
    </section>
  );
};

export default Banner;
