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



export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsData = [
    { 
        category: "Full-Stack Development",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "SQL", "PHP"],
        description: "Developing dynamic and scalable web applications with modern frameworks."
    },
    { 
        category: "Mobile Development",
        skills: ["Flutter", "Java", "Android Studio", "Firebase", "React (Backend)"],
        description: "Building cross-platform mobile applications with a robust backend infrastructure."
    },
    { 
        category: "Machine Learning & AI",
        skills: ["CNN", "XGBoost", "TensorFlow", "PyTorch", "Scikit-learn"],
        description: "Developing and training machine learning models for predictive analytics and AI applications."
    },
    { 
        category: "Software Engineering",
        skills: ["Git", "GitHub", "MVC Architecture", "Agile Methodologies"],
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
      <div className={`relative w-full min-h-screen ${darkMode ? "dark" : ""}`}>
        <Navbar />
          
        <video
        key={darkMode} // This forces a re-render when darkMode changes
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] min-w-full min-h-full"
        style={{
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        }}
        autoPlay
        loop
        muted
        playsInline
        src={darkMode ? "/nightt.mp4" : "/morrr.mp4"}
        >
        </video>
      
      {/* Hero Section */}
      <section id = "home" className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm text-gray-1000 uppercase tracking-wide"
        >
          Let's build something together
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl font-bold mt-2"
        >
          Hi, I'm <span className="text-purple-600">Oshadi</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl font-semibold text-gray-1000 mt-2"
        >
          A Student of Computer Science
        </motion.h2><br/>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl text-gray-1000 mt-6 max-w-3xl font-medium text-center"
        >
          I am a Computer Science student, graguated from SLIIT as a Software Engineer. I'm ready to explore and contribute in various domains. 
          Whether it's software development, data analysis, or artificial intelligence, I am eager 
          to tackle new challenges and make a positive impact.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex space-x-6 mt-6"
        >
          <a href="https://www.linkedin.com/in/oshadi-senevirathna-91b182244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500   transition">
            <FaLinkedin className="text-gray-500  text-2xl" />
          </a>
          <a href="https://github.com/it21096884" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white transition">
            <FaGithub className="text-gray-500  text-2xl" />
          </a>
          <a href="mailto:neeranjala905@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white transition">
            <FaEnvelope className="text-gray-500  text-2xl" />
          </a>
          
        </motion.div>
      </section>
      {/* <Aboutme /> */}
    
        
      <div id = "about" className="flex flex-row items-center justify-center h-screen text-center px-10">
              {/* Left Section - About Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-purple-600 text-lg font-semibold">ABOUT</h3>
                <h1 className="text-4xl font-bold mt-2">Who I Am</h1>
                <p className="text-gray-1000 mt-6 max-w-3xl text-xl text-left">
                Hello! I'm Oshadi, a passionate and driven Software Engineering student with hands-on experience in full-stack development, mobile applications, and machine learning. I enjoy exploring new technologies and leveraging them to create innovative solutions that solve real-world problems.

With a strong foundation in React, Flutter, .NET, Node.js, and MongoDB, I have developed and deployed full-stack applications that enhance user experiences. <br/><br/>My expertise extends to machine learning and deep learning, where I have worked with CNN, XGBoost, and TensorFlow to build AI-driven models, including brain tumor classification and personalized recommendation systems.

I thrive in collaborative environments, having worked on multiple projects where I applied Agile methodologies, Git version control, and MVC architecture to deliver efficient and scalable software. My research contributions in AI-powered facial diagnosis and salon management have been published in IEEE-indexed conferences, showcasing my ability to merge academic research with practical applications.
                </p>
                <p className="text-gray-1000 mt-6 text-xl max-w-3xl text-left">
                  Thank you for visiting my portfolio website. Feel free to explore my projects, and please don't 
                  hesitate to reach out if you have any questions or opportunities for collaboration!
                </p>
              </div>
        
              {/* Right Section - Profile Image */}
              <div className="md:w-1/3 mt-6 md:mt-0 md:ml-12">
                <img
                  src="/prof.jpeg"
                  alt="Profile"
                  className="rounded-2xl shadow-lg"
                />
              </div>
      </div>
          
      <div id="skills" className="flex flex-col items-center justify-center min-h-screen px-10 bg-white-100 ">
      <h2 className="text-purple-600 text-xl font-semibold uppercase tracking-wide">Skills</h2>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-6">What I Can Do</h1>

      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl text-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-white-800 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-black">{skill.category}</h3>
            <div className="mt-3 text-gray-700 dark:text-black-300">
              {hoveredIndex === index ? (
                <p className="text-lg">{skill.description}</p>
              ) : (
                <ul className="flex flex-wrap justify-center gap-2 mt-3">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="text-lg bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md transition hover:bg-purple-600">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

<section id="projects" className="flex flex-row items-center justify-center min-h-screen text-center px-10 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-white-900 mb-10">What I've Built</h2>
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
          <p className="mt-2 text-gray-600 text-lg">{project.description}</p>

          {/* Links Section */}
          <div className="mt-4 flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                GitHub
              </a>
            )}
            {project.research && (
              <a
                href={project.research}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Research Paper Published In IEEE
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                website
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    <div id = "contact" className="flex flex-col items-center justify-center h-screen text-center px-10">
            <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-8 max-w-4xl mx-auto align-middle justify-center">
              {/* Left Card */}
              <Card className="shadow-lg animate-fade-in-up">
                <CardContent className="p-6">
                  <img 
                    src="./cont.jpg" 
                    alt="Business Card" 
                    className="rounded-lg mb-4 w-full"
                  />
                  <h2 className="text-2xl font-bold mb-2 text-gray-600">Oshadi Senevirathna</h2>
                  <p className="text-gray-600 mb-4">
                  I'm looking forward to connecting with like-minded professionals and exploring opportunities to make an impact. Whether it’s about collaborating on innovative projects, discussing new technologies, or sharing ideas, I’d love to hear from you
                  </p>
                  <p className="text-black-bold mb-4">I am open to work.</p>
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Connect with me</h3>
                  <div className="flex space-x-4 align-middle justify-center">
                    <a href="https://www.linkedin.com/in/oshadi-senevirathna-91b182244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaLinkedin className="text-gray-500 h-6 w-6" />
                    </a>
                    <a href="https://github.com/it21096884" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaGithub className="text-gray-500 h-6 w-6" />
                    </a>
                    <a href="mailto:neeranjala905@gmail.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaEnvelope className="text-gray-500 h-6 w-6" />
                    </a>
                    
                  </div>
                </CardContent>
              </Card>
      
             
            </div>
    </div>

      </div>

        
      
        
      
      
    
  );
}
