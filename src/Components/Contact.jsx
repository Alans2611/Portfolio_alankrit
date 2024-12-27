import React, { useEffect } from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxfPyStyLqr2P8g33JgW6rs6BBUq1GcjnsE34S6kyvgH1aHVwzocdujiSVOLHR6U72s/exec";
    const form = document.forms["submit-to-google-sheet"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });
  }, []);

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto my-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/*form*/}
          <motion.form
            name="submit-to-google-sheet"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 sm:p-12 items-start max-w-lg mx-auto lg:mx-0"
          >
            <input
              className="bg-transparent border-b py-3 outline-none
              w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none
              w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none
              w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
