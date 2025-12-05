import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "alihossenshuvo@gmail.com",
      href: "mailto:alihossenshuvo@gmail.com",
      description: "Send me an email",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+8801678606028",
      href: "https://wa.me/8801678606028",
      description: "Chat on WhatsApp",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Ali Hossen Shuvo",
      href: "https://www.linkedin.com/in/ali-hossen-shuvo",
      description: "Connect on LinkedIn",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "alwaysshuvo",
      href: "https://github.com/alwaysshuvo",
      description: "Check my repositories",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target={
                method.href.startsWith("http") &&
                !method.href.startsWith("mailto:")
                  ? "_blank"
                  : "_self"
              }
              rel={
                method.href.startsWith("http") &&
                !method.href.startsWith("mailto:")
                  ? "noopener noreferrer"
                  : ""
              }
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-700 hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-primary font-semibold mb-2">{method.value}</p>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {method.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg mb-12"
        >
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-300 text-lg">
              Uttara, Dhaka, Bangladesh 🇧🇩
            </p>
            <p className="text-gray-400 mt-2">
              Available for freelance projects & full-time opportunities
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Looking for a dedicated developer? Let's create something amazing
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:alihossenshuvo@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ali-hossen-shuvo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Prefer to review my experience first?
          </p>

          <motion.a
            href="/Ali_Hossen_Shuvo_Resume.pdf"
            download="Ali_Hossen_Shuvo_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-primary border border-primary rounded-lg transition-all font-semibold"
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
