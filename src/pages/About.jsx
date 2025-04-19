import { motion } from 'framer-motion';

export default function About() {
  // Skills data with icons
  const skills = [
    { name: "React", icon: "⚛️", level: 90 },
    { name: "JavaScript", icon: "📜", level: 95 },
    { name: "Tailwind CSS", icon: "🎨", level: 85 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "Node.js", icon: "💻", level: 85 },
    { name: "FastAPI", icon: "⚡", level: 75 },
    { name: "Framer Motion", icon: "🌟", level: 70 },
    { name: "Database Design", icon: "🗄️", level: 80 },
  ];

  // Animate in variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Rajdhani'] text-5xl font-bold mb-6 tracking-wider">About Me</h1>
          <div className="h-1 w-20 accent-bg mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm a Full-Stack Developer with a passion for creating elegant, efficient, and user-friendly applications.
            I specialize in modern web technologies and am constantly exploring new tools to enhance my skillset.
          </p>
        </motion.div>

        {/* About sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-panel p-8 h-full">
              <h2 className="font-['Rajdhani'] text-2xl font-bold mb-6 accent-color">My Journey</h2>
              <p className="text-gray-300 mb-4">
                I began my coding journey over 5 years ago, originally focusing on frontend development with HTML, CSS, and JavaScript.
                As my skills evolved, I expanded into full-stack development, embracing modern frameworks and server-side technologies.
              </p>
              <p className="text-gray-300 mb-4">
                I've worked on projects ranging from small business websites to complex enterprise applications, always with a focus on
                clean code, performance optimization, and exceptional user experiences.
              </p>
              <p className="text-gray-300">
                My approach combines technical expertise with creative problem-solving, allowing me to build solutions that not only work
                flawlessly but also delight users.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-panel p-8 h-full">
              <h2 className="font-['Rajdhani'] text-2xl font-bold mb-6 accent-color">My Approach</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="accent-color mr-2">✓</span>
                  <span>I prioritize <strong>clean, maintainable code</strong> that stands the test of time</span>
                </li>
                <li className="flex items-start">
                  <span className="accent-color mr-2">✓</span>
                  <span>I believe in <strong>thoughtful UI/UX design</strong> that makes applications intuitive</span>
                </li>
                <li className="flex items-start">
                  <span className="accent-color mr-2">✓</span>
                  <span>I embrace <strong>continuous learning</strong> to stay at the cutting edge</span>
                </li>
                <li className="flex items-start">
                  <span className="accent-color mr-2">✓</span>
                  <span>I value <strong>performance optimization</strong> for fast, responsive applications</span>
                </li>
                <li className="flex items-start">
                  <span className="accent-color mr-2">✓</span>
                  <span>I focus on <strong>accessibility</strong> to ensure applications work for everyone</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="font-['Rajdhani'] text-3xl font-bold mb-8 text-center">My Skills</h2>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-4"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="accent-bg h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="font-['Rajdhani'] text-2xl font-bold mb-4">Ready to start a project?</h2>
          <p className="text-gray-400 mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border accent-border accent-color rounded-md bg-transparent hover:bg-[rgba(34,230,210,0.1)] transition duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
} 