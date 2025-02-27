import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { RiH5 } from "react-icons/ri";
import logo from "../assets/about_img.png";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto py-16 lg:py-24">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-[80vh]">
          {/* img */}
          <motion.div
            variants={fadeIn("right, 0.3")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <img
              className="w-[80%] md:w-[60%] lg:w-[350px] h-auto max-h-[500px]"
              src={logo}
              alt="about_img"
            />
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left, 0.3")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h4 className="mb-6 leading-relaxed">
              Hi, I’m Alankrit, a passionate and driven B.Tech Computer Science
              student with a keen interest in software development and
              technology innovation. I specialize in building efficient,
              scalable, and modern web and mobile applications.
            </h4>

            {/* stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Skills
                  <br />
                  Mastered
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Certifications
                  <br />
                  Achieved
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-8 items-center justify-center lg:justify-start">
              <a href="#contact">
                <button className="btn btn-lg">Contact Me</button>
              </a>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
