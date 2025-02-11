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
          category: "Data Analytics", 
          skills: ["PLOTLY", "TABLEAU", "MATPLOTLIB"],
          description: "Analyzing data with powerful visualization tools to gain insights."
        },
        { 
          category: "App Development", 
          skills: ["UNITY", "PYGAME", "FLUTTER"],
          description: "Creating interactive applications and games across multiple platforms."
        },
        { 
          category: "Data Science", 
          skills: ["PYTORCH", "TENSORFLOW", "SCIKIT-LEARN"],
          description: "Building intelligent models for data-driven decision-making."
        },
        { 
          category: "Computer Vision", 
          skills: ["YOLO", "OPENCV", "ROBOFLOW"],
          description: "Developing vision-based AI systems for image and video processing."
        },
        { 
          category: "Web Development", 
          skills: ["REACT", "FLUTTER", "NEXTJS-14"],
          description: "Building responsive and dynamic websites with modern frameworks."
        },
        { 
          category: "MLOps", 
          skills: ["AWS", "DOCKER", "MLFLOW"],
          description: "Deploying and managing machine learning models at scale."
        },
      ];

      const projects = [
        {
          title: "Desktop AI Assistant",
          description: "A trained Python command-line program that listens to users and helps with daily tasks using automation and LLM Gemini.",
          image: "/ai-assistant.png", 
          
        },
        {
          title: "Recommendation System",
          description: "Provides personalized recommendations for movies, songs, and books using collaborative filtering and hybrid techniques.",
          image: "/recommendation.png",
          dark: true,
        },
        {
          title: "Heart Attack Prediction",
          description: "A machine learning model that predicts heart attack risks using medical data.",
          image: "/heart-prediction.png",
        },
        {
          title: "Brain Tumor Classification",
          description: "A CNN model to classify brain tumors using MRI scans, improving early detection and treatment.",
          image: "/brain-tumor.png",
        },
        {
          title: "Sign Language Detection",
          description: "A model trained to detect common sign language gestures for better accessibility.",
          image: "/sign-language.png",
        },
        {
          title: "Automated ML",
          description: "A powerful tool to automate machine learning model training and evaluation.",
          image: "/automated-ml.png",
          dark: true,
        },
      ];
      
      

  return (
    <div className={darkMode ? "dark bg-gray-1000 text-gray-2000" : "bg-gray-1000 text-gray-1000 min-h-screen"}>
      <Navbar />
      
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
          className="text-lg text-gray-1000 mt-6 max-w-3xl font-medium text-center"
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
                <p className="text-gray-1000 mt-6 max-w-3xl text-lg text-left">
                  Hello! I'm Oshadi, a passionate and dedicated computer science student with a love for 
                  learning and creating projects in various tech stacks. I thrive on exploring new technologies 
                  and leveraging them to build innovative solutions. With a strong foundation in computer science 
                  principles and practical experience in multiple frameworks and languages, I enjoy the challenge 
                  of solving complex problems and delivering high-quality software.
                </p>
                <p className="text-gray-1000 mt-6 text-lg max-w-3xl text-left">
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
          
  <div id="skills" className="flex flex-col items-center justify-center min-h-screen px-10 ">
  <h2 className="text-purple-600 text-xl font-semibold uppercase tracking-wide">Skills</h2>
  <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-2 mb-6">What I Can Do</h1><br/>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-center">
    {skillsData.map((skill, index) => (
      <div
        key={index}
        className=" text-lg bg-gray-100 dark:bg-gray-400 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-purple-200 hover:shadow-lg"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <h3 className="text-lg font-semibold text-black-500 dark:text-white">{skill.category}</h3>
        <div className="mt-3 text-gray-1000 dark:text-gray-1000">
          {hoveredIndex === index ? (
            <p className="text-lg">{skill.description}</p>
          ) : (
            <ul className="space-y-1">
              {skill.skills.map((item, i) => (
                <li key={i} className="text-lg bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-md inline-block mr-2 mt-1">
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


    {/* <section id="projects" className="flex flex-row items-center justify-center h-screen text-center px-10">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-gray-900">What I've Built</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg shadow-lg ${project.dark ? "bg-gray-1000 text-gray-1000" : "bg-black-1000 "}`}
                  >
                    <h3 className="text-2xl font-semibold">{project.title}</h3><br/>
                    <p className="mt-2 text-lg">{project.description}</p>
                    {project.icons && (
                      <div className="mt-4 flex space-x-2">
                        {project.icons.map((icon, i) => (
                          <Image key={i} src={icon} alt="icon" width={30} height={30} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
    </section> */}

<section id="projects" className="flex flex-row items-center justify-center h-screen text-center px-10">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-900">What I've Built</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg ${project.dark ? "bg-gray-1000 text-gray-1000" : "bg-black-1000"}`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <div
              className="p-4 bg-purple-500 text-white rounded-lg ml-4 flex-grow"
              style={{ maxWidth: "calc(100% - 150px)" }}
            >
              <p className="mt-2 text-lg">{project.description}</p>
            </div>
          </div>
          {project.icons && (
            <div className="mt-4 flex space-x-2">
              {project.icons.map((icon, i) => (
                <Image key={i} src={icon} alt="icon" width={30} height={30} />
              ))}
            </div>
          )}
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
                    I'm looking forward to connecting with like-minded professionals and finding opportunities to make an impact.
                  </p>
                  <p className="text-gray-600 mb-4">I am open to work.</p>
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
