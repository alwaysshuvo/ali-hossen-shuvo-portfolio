import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
  title: 'CityFix',
  subtitle: 'Report, Track & Resolve Public Infrastructure Issues',
  description:
    'A public issue reporting platform where citizens can report city problems and track resolution progress through role-based dashboards.',
  features: [
    '📝 Issue reporting with image upload & location details',
    '📊 Role-based dashboards (Citizen, Staff, Admin)',
    '🔄 Real-time issue status tracking',
    '🔐 Secure authentication & access control',
  ],
  tech: [
    'React',
    'TailwindCSS',
    'Axios',
    'Firebase',
    'Express',
    'MongoDB',
  ],
  live: 'https://cityfix-c2383.web.app', 
  github: 'https://github.com/alwaysshuvo/CityFix-Report-Track-Resolve',
  server: 'https://github.com/alwaysshuvo/CityFix-Report-Track-Resolve-Server',
},

    {
      title: 'ProductHub',
      subtitle: 'Full Stack E-commerce & Product Management',
      description:
        'A comprehensive MERN e-commerce platform with authentication, product CRUD, admin dashboard, categories, ratings, and a persistent cart system.',
      features: [
        '🔐 Google + Password Authentication',
        '🛒 Persistent MongoDB Cart',
        '📦 Product CRUD + Categories',
        '📊 Admin Dashboard',
      ],
      tech: ['Next.js', 'React', 'Express.js', 'MongoDB', 'TailwindCSS'],
      live: 'https://product-hub-simplify-your-product-m.vercel.app/',
      github:
        'https://github.com/alwaysshuvo/ProductHub-Simplify-Your-Product-Management',
    },

    {
      title: 'MovieMaster Pro',
      subtitle: 'Movie Watchlist Platform',
      description:
        'A movie management system where users can browse movies, save watchlists, switch themes, and enjoy smooth UI animations.',
      features: [
        '🎬 Add/Update/Delete Movies',
        '❤️ User Watchlist',
        '🔐 Firebase Authentication',
        '🌓 Light/Dark Theme',
      ],
      tech: ['React', 'Firebase', 'TailwindCSS', 'Express', 'MongoDB'],
      live: 'https://movie-matrix10.netlify.app/',
      github: 'https://github.com/alwaysshuvo/moviemaster-pro',
      server: 'https://github.com/alwaysshuvo/moviemaster-pro-server',
    },

    {
      title: 'Warmpaws',
      subtitle: 'Winter Pet Care Service',
      description:
        'A pet care service for winter clothing, grooming tips, and secure authentication with a modern responsive UI.',
      features: [
        '🐾 Winter Pet Care Services',
        '👕 Pet Clothing Store',
        '✂️ Grooming & Tips',
        '🔐 Firebase Authentication',
      ],
      tech: ['React', 'Firebase', 'TailwindCSS', 'Express', 'MongoDB'],
      live: 'https://warpaws-pet-care.netlify.app/',
      github:
        'https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service',
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          Featured Projects
        </motion.h2>

        {/* Projects List */}
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
              className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-primary transition-all duration-300 shadow-lg"
            >
              {/* Header */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-lg mb-6">{project.subtitle}</p>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-primary font-semibold mb-3">
                  ✨ Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((item, i) => (
                    <p key={i} className="text-gray-300 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-primary font-semibold mb-3">
                  🛠 Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                <motion.a
                  href={project.live}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center hover:opacity-90"
                >
                  🌐 Live Demo
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg text-center hover:bg-primary hover:text-black"
                >
                  💻 GitHub
                </motion.a>

                {project.server && (
                  <motion.a
                    href={project.server}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg text-center hover:border-primary hover:text-primary"
                  >
                    ⚙ Server
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
