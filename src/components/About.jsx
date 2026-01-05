import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black bg-opacity-40 ">
      <div className="max-w-4xl mx-auto mt-">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700 hover:border-primary transition-all duration-300"
        >
          {/* Who I Am */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
              👋 Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-white">Ali Hossen Shuvo</span>
              , a passionate Junior Full Stack Developer based in Uttara, Dhaka,
              Bangladesh. I specialize in building modern, responsive web
              applications using the MERN stack (MongoDB, Express.js, React,
              Node.js).
            </p>
          </div>

          {/* Programming Journey */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
              🚀 My Programming Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My journey into programming began with curiosity about how
              websites work, which gradually turned into a deep passion for full
              stack development. I enjoy transforming ideas into real-world
              applications through clean, scalable, and maintainable code.
            </p>
          </div>

          {/* What I Enjoy */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">
              💻 What I Love to Do
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I love building user-friendly interfaces, solving backend
              challenges, and continuously improving my skills by learning new
              technologies and best practices.
            </p>
          </div>

          {/* Beyond Coding */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">
              🎵 Beyond Coding
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Outside of programming, I enjoy listening to music, exploring
              tech-related content, and staying updated with the latest trends
              in the tech world.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "5+", label: "Projects Completed" },
              { value: "100%", label: "Dedicated to Quality" },
              { value: "24/7", label: "Always Learning" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-lg"
              >
                <div className="bg-gray-900 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <p className="text-gray-300">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
