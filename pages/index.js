import { motion } from "framer-motion";
import { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";
import React, { useState } from "react";
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        isHovered ? 'w-[250px]' : 'w-[180px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        h-[400px] p-6
        transition-all duration-300 ease-in-out
        flex flex-col
        ${skill.isHighlighted ? 'bg-violet-400' : 'bg-transparent'}
        ${darkMode ? 'dark:border dark:border-gray-700' : ''}
      `}>
        <h3 className={`
          text-lg font-bold mb-8
          ${skill.isHighlighted ? 'text-white' : 'text-violet-400'}
        `}>
          {skill.category}
        </h3>
        <ul className="mb-4 space-y-2">
          {skill.tools.map((tool) => (
            <li
              key={tool}
              className={`
                transition-transform duration-300 font-semibold
                ${skill.isHighlighted ? 'text-white' : 'text-violet-400'}
                ${isHovered ? 'translate-x-2' : ''}
              `}
            >
              {tool}
            </li>
          ))}
        </ul>
        {skill.description && (
          <p
            className={`text-sm mt-auto font-medium ${
              skill.isHighlighted ? 'text-white/90' : 'text-violet-400'
            } transition-opacity duration-300 ease-in-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {skill.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      category: 'Front-end Development',
      tools: ["React.js", "Next.js", "Tailwind CSS"],
      isHighlighted: false,
      description: 'I design and develop responsive web applications using React.js, Next.js, and Tailwind CSS, ensuring an intuitive and seamless user experience across devices.'
    },
    {
      category: 'Back-end Development',
      tools: ["Node.js", "Express.js", "PHP"],
      isHighlighted: true,
      description: 'I develop robust server-side applications using Node.js, Express.js, and PHP, enabling smooth and scalable back-end services.'
    },
    {
      category: 'Databases',
      tools: ["MongoDB", "SQL"],
      isHighlighted: false,
      description: 'I work with databases like MongoDB and SQL to store, query, and manage data efficiently, supporting various application needs.'
    },
    {
      category: "Mobile Development",
      tools: ["Flutter", "Java", "Android Studio", "Firebase", "React (Backend)"],
      isHighlighted: true,
      description: "Building cross-platform mobile applications with a robust backend infrastructure."
    },
    {
      category: "Machine Learning & AI",
      tools: ["CNN", "XGBoost", "TensorFlow", "PyTorch", "Scikit-learn"],
      isHighlighted: false,
      description: "Developing and training machine learning models for predictive analytics and AI applications."
    },
    {
      category: "Software Engineering",
      tools: ["Git", "GitHub", "MVC Architecture", "Agile Methodologies"],
      isHighlighted: true,
      description: "Applying software engineering principles for efficient and maintainable development."
    }
  ];

  const projects = [
    {
        title: "Glow Up - Salon Management App",
        description: "A Flutter mobile app with a React backend that enhances salon operations. Features include customer feedback analysis, hair damage identification, and AI-powered makeup recommendations.",
        github: "https://github.com/NindukiAbeyrathne/Glowguide-R24-070",
        website:"https://it21096884.github.io/GlowUp/",
        research: "https://www.researchgate.net/publication/388428820_GlowUp_-_Enhancing_Salon_Experience_through_AI-Driven_Customer_Insights?_sg%5B0%5D=NUQtH3No6BrJ8RlQynQo3xAMw1iM-gJFYkOt0mO2cklFQ4yyfp76nsGRzLBa_Qr-moaR5t-0SJM5b-FRPVGwQElhoeMIrKPbMlbpfFxc.9G-bpVKrdEatjxhxIT3Zs125SliXpFlixrq6XPDwRhGQ2B18hFrZ0Uu5Qn5y1CwDgQNa4_W5WY8hWMqeYhfl_Q&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InByb2ZpbGUiLCJwcmV2aW91c1BhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlQ29udGVudCJ9fQ"
    },
    {
      title: "Facial Diagnosis & Makeup Recommendation",
      description: "An AI-powered model that detects facial deformities and recommends personalized makeup solutions. Published research in the IEEE-indexed ICAC conference.",
      github: "https://github.com/NindukiAbeyrathne/Glowguide-R24-070",
      website:"https://it21096884.github.io/GlowUp/",
      research: "https://www.researchgate.net/publication/388441756_Facial_Diagnosis_Skin_Care_and_Makeup_Recommendation_Using_Advanced_Deep_Learning_Techniques?_sg%5B0%5D=NUQtH3No6BrJ8RlQynQo3xAMw1iM-gJFYkOt0mO2cklFQ4yyfp76nsGRzLBa_Qr-moaR5t-0SJM5b-FRPVGwQElhoeMIrKPbMlbpfFxc.9G-bpVKrdEatjxhxIT3Zs125SliXpFlixrq6XPDwRhGQ2B18hFrZ0Uu5Qn5y1CwDgQNa4_W5WY8hWMqeYhfl_Q&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InByb2ZpbGUiLCJwcmV2aW91c1BhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlQ29udGVudCJ9fQ"
    },
    {
        title: "Blush Me - E-commerce Platform",
        description: "Developed an e-commerce platform for cosmetic products. Built a customer mobile app using Java (Android Studio) and an admin web app using React and .NET.",
        github: "https://github.com/NimeshaPriyabandu/EAD-E-commerce_System"
    },
    {
        title: "Online Craft Corner Tourist System",
        description: "A full-stack web app using React, Node.js, and MongoDB, providing a marketplace for Sri Lankan craft businesses.",
        github: "https://github.com/NindukiAbeyrathne/AF_Craft_Coner"
    },
    {
        title: "Online Employee Management System",
        description: "A Java-based system with MVC architecture for managing employee payments and records.",
        github: "https://github.com/it21096884/Employee-Management-System"
    },
    {
        title: "Online Vehicle Management System",
        description: "Developed a vehicle management system using HTML, JavaScript, and SQL for handling rental and payment processes.", 
        github: "https://github.com/it21096884/Online-Vehicle-Management-System"
    }
  ];

  return (
    <div className={`relative w-full min-h-screen ${darkMode ? "bg-[#15111b]" : "bg-white"}`}>
      <Navbar />
    
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-sm tracking-wide uppercase ${darkMode ? "text-gray-300" : "text-gray-800"}`}
        >
          Let's build something together
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`mt-2 text-5xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          Hi, I'm <span className="text-purple-600">Oshadi</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`mt-2 text-3xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-800"}`}
        >
          A Student of Computer Science
        </motion.h2><br/>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`max-w-3xl mt-6 text-xl font-medium text-center ${darkMode ? "text-gray-300" : "text-gray-800"}`}
        >
          I am a Computer Science student, graduated from SLIIT as a Software Engineer. I'm ready to explore and contribute in various domains. 
          Whether it's software development, data analysis, or artificial intelligence, I am eager to tackle new challenges and make a positive impact.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex mt-6 space-x-6"
        >
          <a href="https://www.linkedin.com/in/oshadi-senevirathna-91b182244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500">
            <FaLinkedin className="text-2xl text-gray-500" />
          </a>
          <a href="https://github.com/NindukiAbeyrathne" target="_blank" rel="noopener noreferrer" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500">
            <FaGithub className="text-2xl text-gray-500" />
          </a>
          <a href="mailto:oshadi@gmail.com" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500">
            <FaEnvelope className="text-2xl text-gray-500" />
          </a>
          <a href="https://discord.com/users/9811" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500">
            <FaDiscord className="text-2xl text-gray-500" />
          </a>
        </motion.div>
      </section>

      <div id = "about" className="flex flex-row items-center justify-center h-screen px-10 text-center">
              {/* Left Section - About Text */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="text-lg font-semibold text-purple-600">ABOUT</h3>
                <h1 className="mt-2 text-4xl font-bold">Who I Am</h1>
                <p className="max-w-3xl mt-6 text-left text-l text-gray-1000">
                Hello! I'm Oshadi, a passionate and driven Software Engineering student with hands-on experience in full-stack development, mobile applications, and machine learning. I enjoy exploring new technologies and leveraging them to create innovative solutions that solve real-world problems.

With a strong foundation in React, Flutter, .NET, Node.js, and MongoDB, I have developed and deployed full-stack applications that enhance user experiences. <br/><br/>My expertise extends to machine learning and deep learning, where I have worked with CNN, XGBoost, and TensorFlow to build AI-driven models, including brain tumor classification and personalized recommendation systems.

I thrive in collaborative environments, having worked on multiple projects where I applied Agile methodologies, Git version control, and MVC architecture to deliver efficient and scalable software. My research contributions in AI-powered facial diagnosis and salon management have been published in IEEE-indexed conferences, showcasing my ability to merge academic research with practical applications.
                </p>
                <p className="max-w-3xl mt-6 text-left text-l text-gray-1000">
                  Thank you for visiting my portfolio website. Feel free to explore my projects, and please don't 
                  hesitate to reach out if you have any questions or opportunities for collaboration!
                </p>
              </div>
        
              {/* Right Section - Profile Image */}
              <div className="mt-8 md:w-1/3 md:mt-0 md:ml-12">
                <img
                  src="/prof.jpeg"
                  alt="Profile"
                  className="shadow-lg rounded-2xl"
                />
              </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-16 dark:bg-gray-800">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-2 text-violet-500 font">SKILLS</h2>
          <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">What I can do</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <SkillCard
                key={skill.category}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-800">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-semibold text-center text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative p-6 transition-all bg-gray-100 shadow-lg dark:bg-gray-700 rounded-xl hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>

                <div className="flex mt-4 space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800"
                    >
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800"
                    >
                      Website
                    </a>
                  )}
                  {project.research && (
                    <a
                      href={project.research}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800"
                    >
                      Research
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen px-10 py-16 dark:bg-gray-800">
        <h2 className="text-xl font-semibold tracking-wide text-purple-600 uppercase">Contact</h2>
        <h1 className="mt-2 mb-6 text-4xl font-bold text-gray-800 dark:text-white">Let's Get in Touch</h1>

        <form className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl dark:bg-gray-700">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="text-gray-700 dark:text-white">Name</label>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div>
              <label className="text-gray-700 dark:text-white">Email</label>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <label className="text-gray-700 dark:text-white">Message</label>
              <Textarea placeholder="Your Message" rows={4} />
            </div>
            <Button className="mt-4 text-white bg-purple-600 hover:bg-purple-700">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}