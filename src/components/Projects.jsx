import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'ProductHub',
      subtitle: 'Full Stack E-commerce & Product Management',
      description: 'A comprehensive e-commerce platform with product management, authentication, and shopping cart functionality.',
      features: [
        '🔐 Google & Password Authentication',
        '🛒 MongoDB Cart System',
        '📂 Product Categories & Ratings',
        '👨‍💼 Admin Product Panel',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
      live: 'https://product-hub-simplify-your-product-m.vercel.app/',
      github: 'https://github.com/alwaysshuvo/ProductHub-Simplify-Your-Product-Management',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'MovieMaster Pro',
      subtitle: 'Movie Watchlist Platform',
      description: 'A feature-rich movie management application where users can create personalized watchlists with theme support.',
      features: [
        '🎬 Add/Update/Delete Movies',
        '❤️ Personalized Watchlist',
        '🔐 Firebase Authentication',
        '🌓 Light/Dark Theme',
      ],
      tech: ['React', 'Firebase', 'TailwindCSS', 'Express', 'MongoDB'],
      live: 'https://movie-matrix10.netlify.app/',
      github: 'https://github.com/alwaysshuvo/moviemaster-pro',
      server: 'https://github.com/alwaysshuvo/moviemaster-pro-server',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Warmpaws',
      subtitle: 'Winter Pet Care Service',
      description: 'A pet care service platform offering winter care solutions, clothing store, and grooming tips for pets.',
      features: [
        '🐾 Pet Winter Care Services',
        '👕 Pet Clothing Store',
        '✂️ Grooming Tips & Guides',
        '🔐 Firebase Authentication',
      ],
      tech: ['React', 'Firebase', 'TailwindCSS', 'Express', 'MongoDB'],
      live: 'https://warpaws-pet-care.netlify.app/',
      github: 'https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-black bg-opacity-40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-lg overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-1`}>
                <div className="bg-gray-900 px-8 py-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-lg">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-3">✨ Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, fIdx) => (
                      <p key={fIdx} className="text-gray-300 text-sm">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-3">🛠️ Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all text-center"
                  >
                    🌐 Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all text-center"
                  >
                    💻 GitHub
                  </motion.a>
                  {project.server && (
                    <motion.a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-center"
                    >
                      ⚙️ Server
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/alwaysshuvo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-primary border border-primary rounded-lg transition-all"
          >
            Visit My GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
