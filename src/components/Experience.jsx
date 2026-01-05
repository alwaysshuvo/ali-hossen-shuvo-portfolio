import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          Professional Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded-2xl p-8 hover:border-primary transition-all duration-300"
        >
          {/* Role & Company */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-primary">
              WordPress Developer{" "}
              <span className="text-gray-400 text-lg">(Project-Based)</span>
            </h3>
            <p className="text-gray-400">
              Clycode.com — Software & Web Solutions Company
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            I worked as a project-based WordPress Developer under Clycode.com,
            where I was responsible for designing and developing complete
            client websites. I handled projects from initial layout planning
            to final deployment, ensuring professional design, responsiveness,
            and performance.
          </p>

          {/* Responsibilities */}
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
            <li>
              Built full websites using WordPress and Elementor based on real
              client requirements.
            </li>
            <li>
              Designed responsive layouts optimized for desktop, tablet, and
              mobile devices.
            </li>
            <li>
              Customized themes, sections, and UI components to match brand
              identity.
            </li>
            <li>
              Optimized website performance, basic SEO, and loading speed.
            </li>
            <li>
              Collaborated with the team to deliver projects within deadlines.
            </li>
          </ul>

          {/* Key Projects */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-primary mb-4">
              Key Projects Delivered
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all"
              >
                {/* Thumbnail Placeholder */}
                <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                  <img src="https://i.ibb.co.com/GfFgjhtF/Mewcarevet-Thumbnail.png" alt="Mewcarevet" className="w-full h-full object-cover" />
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-semibold text-white mb-2">
                    MewCareVet.com
                  </h5>
                  <p className="text-sm text-gray-400 mb-3">
                    A professional veterinary care website showcasing services,
                    emergency care, and appointment scheduling. Fully built
                    using WordPress and Elementor.
                  </p>
                  <a
                    href="https://mewcarevet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Live Website →
                  </a>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all"
              >
                {/* Thumbnail Placeholder */}
                <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                 
                  <img src="https://i.ibb.co.com/YB40s4wW/Clycode-Thumbnail.png" alt="Clycode" className="w-full h-full object-cover" />
                </div>

                <div className="p-5">
                  <h5 className="text-lg font-semibold text-white mb-2">
                    Clycode.com (Official Website)
                  </h5>
                  <p className="text-sm text-gray-400 mb-3">
                    The official website of Clycode.com, designed to present
                    company services, featured projects, and client success
                    stories with a modern UI.
                  </p>
                  <a
                    href="https://clycode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Live Website →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8 text-sm text-gray-400">
            <span className="font-semibold text-gray-300">
              Technologies Used:
            </span>{" "}
            WordPress, Elementor, HTML, CSS, Basic JavaScript
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
