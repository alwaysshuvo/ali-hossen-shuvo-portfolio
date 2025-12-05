import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black bg-opacity-40">
      <div className="max-w-4xl mx-auto">
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
          className="bg-gray-900 bg-opacity-50 rounded-lg p-8 border border-gray-700 hover:border-primary transition-colors duration-300"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm <span className="text-primary font-semibold">Ali Hossen Shuvo</span>, a passionate Junior Full Stack Developer 
            based in <span className="text-primary font-semibold">Uttara, Dhaka, Bangladesh</span>. 
            I specialize in building modern, responsive web applications using the MERN stack 
            (MongoDB, Express.js, React, Node.js).
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            With a strong foundation in both frontend and backend development, I create 
            scalable solutions that solve real-world problems. I'm passionate about writing clean, 
            maintainable code and constantly learning new technologies to stay ahead in the 
            ever-evolving tech landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-300">Dedicated to Quality</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg"
            >
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-300">Always Learning</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-center mb-4 font-semibold">Quick Contact</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:alihossenshuvo@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300"
              >
                📧 alihossenshuvo@gmail.com
              </motion.a>
              <motion.a
                href="https://wa.me/8801678606028"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300"
              >
                💬 +8801678606028
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
