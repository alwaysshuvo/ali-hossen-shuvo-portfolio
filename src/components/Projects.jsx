import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "CityFix",
      image: "https://i.ibb.co.com/QjC5yWcS/City-Fix-Thumbnail.png",
      description:
        "CityFix is a public infrastructure issue reporting platform where citizens can report city problems, track resolution progress, and interact with authorities through role-based dashboards.",
      features: [
        "Issue reporting with image & location",
        "Citizen, Staff & Admin dashboards",
        "Real-time issue tracking",
        "Authentication & role-based access",
      ],
      tech: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Express.js",
        "MongoDB",
      ],
      live: "https://cityfix-c2383.web.app",
      client:
        "https://github.com/alwaysshuvo/CityFix-Report-Track-Resolve",
      server:
        "https://github.com/alwaysshuvo/CityFix-Report-Track-Resolve-Server",
    },
    {
      title: "ProductHub",
      image: "https://i.ibb.co.com/F4hVq4dC/Product-Hub-Thumbnail.png",
      description:
        "ProductHub is a full-stack e-commerce and product management platform where users can browse products, manage carts, and admins can manage inventory in real time.",
      features: [
        "Google & credential authentication",
        "Persistent shopping cart",
        "Admin dashboard & product CRUD",
        "Category & rating system",
      ],
      tech: [
        "Next.js",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      live:
        "https://product-hub-simplify-your-product-m.vercel.app/",
      client:
        "https://github.com/alwaysshuvo/ProductHub-Simplify-Your-Product-Management",
    },
    {
      title: "MovieMaster Pro",
      image: "https://i.ibb.co.com/sJHJDByN/Movie-Matrix-Thumbnail.png",
      description:
        "MovieMaster Pro is a movie collection and watchlist platform that allows users to browse movies, manage watchlists, filter content, and enjoy a modern UI experience.",
      features: [
        "Movie CRUD system",
        "User watchlist",
        "Firebase authentication",
        "Light & dark theme",
      ],
      tech: [
        "React",
        "Firebase",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      live: "https://movie-matrix10.netlify.app/",
      client: "https://github.com/alwaysshuvo/moviemaster-pro",
      server:
        "https://github.com/alwaysshuvo/moviemaster-pro-server",
    },
    {
      title: "Warmpaws",
      image: "https://i.ibb.co.com/8gjNGQSP/Warm-Paws-Thumbnail.png",
      description:
        "Warmpaws is a winter pet care platform offering pet clothing, grooming tips, and secure authentication with a responsive and user-friendly design.",
      features: [
        "Pet care services",
        "Winter clothing showcase",
        "Firebase authentication",
        "Responsive UI",
      ],
      tech: [
        "React",
        "Firebase",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
      ],
      live: "https://warpaws-pet-care.netlify.app/",
      client:
        "https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black bg-opacity-40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-primary transition-all"
            >
              {/* Thumbnail */}
              <div className="md:w-1/3 h-60 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="list-disc list-inside text-gray-300 text-sm mb-4 space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-800 border border-gray-600 rounded-full text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-primary text-white rounded-lg font-semibold"
                  >
                    Live Demo
                  </a>

                  {/* GitHub Dropdown */}
                  <div className="relative group">
                    <button className="px-5 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-black">
                      GitHub
                    </button>
                    <div className="absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                      <a
                        href={project.client}
                        target="_blank"
                        className="block px-4 py-2 text-sm hover:bg-gray-800"
                      >
                        Client Repository
                      </a>
                      {project.server && (
                        <a
                          href={project.server}
                          target="_blank"
                          className="block px-4 py-2 text-sm hover:bg-gray-800"
                        >
                          Server Repository
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
