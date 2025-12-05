import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'HTML5', 'CSS3'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'JWT'],
      icon: '⚙️',
    },
    {
      category: 'Tools & Platform',
      skills: ['Git/GitHub', 'Vercel', 'Netlify', 'VS Code', 'Postman', 'npm'],
      icon: '🛠️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg p-8 border border-gray-700 hover:border-primary transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary bg-opacity-20 border border-primary border-opacity-30 rounded-full text-sm text-gray-200 hover:text-white hover:border-primary transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary p-1 rounded-lg"
        >
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Always Expanding</h3>
            <p className="text-gray-300">
              I'm constantly learning new technologies and best practices to improve my craft. 
              Currently exploring TypeScript, Next.js, and advanced backend optimization techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
