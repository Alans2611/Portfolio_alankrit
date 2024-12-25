import React from "react";
//motion
import {} from "framer-motion";
//motion
import { motion } from "framer-motion";
//varianst
import { fadeIn } from "../variants";
//img
import Img1 from "../assets/prj_01.png";
import Img2 from "../assets/prj_02.png";
import Img3 from "../assets/prj_03.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 h-screen">
          <motion.div
            variants={fadeIn("right, 0.2")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*text*/}
            <div>
              <h2 className="h2 heading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w -sm mb-16"></p>
              <p></p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/*over lay*/}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300 "
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[302px]"
                src={Img1}
              ></img>
              {/*pretitle*/}
              <div
                classname="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50"
              ></div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">World Clock</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left, 0.3")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/*over lay*/}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300"
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[350px]"
                src={Img2}
              ></img>
              {/*pretitle*/}
              <div
                classname="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50"
              ></div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Portfolio Website</span>
              </div>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/*over lay*/}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300"
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
              ></img>
              {/*pretitle*/}
              <div
                classname="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50"
              ></div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Brand Page</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
