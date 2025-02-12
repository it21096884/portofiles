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
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "MongoDB", "SQL", "Tailwind CSS"],
        description: "Building modern web applications with scalable backend solutions."
    },
    { 
        category: "Mobile Development",
        skills: ["Flutter", "Java", "Android Studio", "Firebase"],
        description: "Developing cross-platform mobile applications with seamless user experience."
    },
    { 
        category: "Machine Learning & AI",
        skills: ["TensorFlow", "Scikit-learn", "PyTorch", "CNN", "ANN", "DQN", "Reinforcement Learning"],
        description: "Training and deploying AI models for image classification, NLP, and predictive analytics."
    },
    { 
        category: "Data Science & Analytics",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
        description: "Performing data analysis, visualization, and statistical modeling."
    },
    { 
        category: "Software Engineering & DevOps",
        skills: ["Git", "CI/CD", "Docker", "Agile Development", "Jira", "MVC Architecture"],
        description: "Ensuring robust software development and deployment pipelines."
    },
    { 
        category: "Cloud & Deployment",
        skills: ["Hugging Face Space", "Streamlit"],
        description: "Deploying AI models and applications to cloud-based environments."
    },
    { 
        category: "UI/UX & Tools",
        skills: ["Figma", "Photoshop", "Postman"],
        description: "Designing user interfaces and testing APIs for software applications."
    }
];


const projects = [
  {
      title: "Café Management System – FabCeylon",
      description: "A full-stack web and mobile application for café management. The web app was built using Next.js, Node.js, Express, and MongoDB, while the mobile app was developed with Flutter.",
      github: "https://github.com/Dinidu-Lochana/Fab-Ceylon-Mobile-App"
  },
  {
      title: "BayMax – Medical Chatbot",
      description: "A multilingual healthcare chatbot utilizing Google Gemini AI and LangChain. Features include persistent memory, stateful conversation management, and personalized healthcare assistance. Deployed on Hugging Face Space.",
      github: "https://github.com/Dinidu-Lochana/Medical-Chatbot",
      website: "https://huggingface.co/spaces/Dinidu-Lochana/BayMax"
  },
  {
      title: "Snake Game using Reinforcement Learning",
      description: "Developed a DQN-based AI agent for Snake using PyTorch and Reinforcement Learning. Implemented Experience Replay and Bellman’s Equation for efficient learning.",
      github: "https://github.com/Dinidu-Lochana/Reinforcement-learning-Snake-game"
  },
  {
      title: "24 Insurance – AI-Powered Fraud Detection & Price Prediction",
      description: "Developed an AI-driven solution for accident fraud detection using CNN and vehicle auction price prediction with ANN. Features an interactive UI and real-time deployment.",
      github: "https://github.com/Dinidu-Lochana/Accident-Fraud-detection",
      website: "https://huggingface.co/spaces/Dinidu-Lochana/24-Insurance"
  },
  {
      title: "Student GPA Predictor",
      description: "A predictive model using Random Forest and Linear Regression to estimate GPAs based on student demographics and study habits. Trained on data from over 2,300 students.",
      github: "https://github.com/Dinidu-Lochana/Student-GPA-Predictor",
      website: "https://huggingface.co/spaces/Dinidu-Lochana/GPA-Predictor"
  },
  {
      title: "Bus Ticket Booking Web Application",
      description: "Developed a web application where drivers can manage trips and passengers can browse, book, and track their tickets. Built using Angular, Spring Boot, and MySQL.",
      github: "https://github.com/Dinidu-Lochana/BuZZing.com"
  },
  {
      title: "Student Login and Module Enrolment Desktop Application",
      description: "A Python-based desktop application for student enrollment and module selection, developed using Tkinter and MySQL.",
      github: "https://github.com/Dinidu-Lochana/Student-Registration-and-Module-Enrolment"
  },
  {
      title: "Heart Disease Classification Model",
      description: "Built an ANN model for heart disease classification, enabling accurate binary and multiclass predictions from medical data.",
      github: "https://github.com/Dinidu-Lochana/Heart-Disease-Classification"
  },
  {
      title: "Cat and Dog Image Classification",
      description: "Developed a CNN model for classifying images of cats and dogs using transfer learning and custom architectures for comparison.",
      github: "https://github.com/Dinidu-Lochana/Cat-and-Dog-Classification"
  },
  {
      title: "Next-Word Prediction Model",
      description: "Built an NLP-based next-word prediction model using RNN and LSTM with TensorFlow.",
      github: "https://github.com/Dinidu-Lochana/Next-Word-Prediction"
  }
];
  return (
    // <div className={darkMode ? "dark bg-gray-1000 text-gray-2000" : "bg-gray-1000 text-gray-1000 min-h-screen"}>
    <div className={`relative w-full min-h-screen ${darkMode ? "dark" : ""}`}>

   
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
          Hi, I'm <span className="text-purple-600">Dinidu</span>
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
          className="text-xl text-black mt-6 max-w-4xl font-medium text-center"
        >
 I'm a Computer Science undergrad at the University of Ruhuna, passionate about software engineering and eager to delve into diverse domains like software development, data analysis, and artificial intelligence. I'm enthusiastic about taking on new challenges and making a meaningful impact through my work. Let's connect and explore the exciting possibilities ahead
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex space-x-6 mt-6"
        >
          <a href="http://www.linkedin.com/in/dinidu-lochana-0a7b07241" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500   transition">
            <FaLinkedin className="text-gray-500  text-2xl" />
          </a>
          <a href="https://github.com/Dinidu-Lochana" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white transition">
            <FaGithub className="text-gray-500  text-2xl" />
          </a>
          <a href="mailto:24.dinidulochana@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white transition">
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
                Hello! I'm Dinidu Lochana Bandara, a Computer Engineering undergraduate at the University of Ruhuna with a strong passion for software development, machine learning, and artificial intelligence. I have hands-on experience in full-stack development, mobile application development, and AI-driven solutions.

I have worked extensively with Next.js, Flutter, Node.js, Express, and MongoDB to develop scalable web and mobile applications.<br/><br/> My expertise in machine learning includes working with CNN, XGBoost, TensorFlow, and reinforcement learning to build AI-powered models for healthcare, fraud detection, and predictive analytics.

Beyond development, I am experienced in Agile methodologies, Git version control, and cloud deployment. My projects range from AI-driven chatbots and medical diagnosis tools to automated bus ticket booking systems and GPA prediction models. I am always eager to explore new technologies and contribute to impactful software solutions.
                </p>
                <p className="text-gray-1000 mt-6 text-xl max-w-3xl text-left">
                  Thank you for visiting my portfolio website. Feel free to explore my projects, and please don't 
                  hesitate to reach out if you have any questions or opportunities for collaboration!
                </p>
              </div>
        
              {/* Right Section - Profile Image */}
              <div className="md:w-1/3 mt-6 md:mt-0 md:ml-12">
                <img
                  src="/dinidu_prof.jpeg"
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
                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
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
                  <h2 className="text-2xl font-bold mb-2 text-gray-600">Dinidu Bandara</h2>
                  <p className="text-gray-600 mb-4">
                  I'm looking forward to connecting with like-minded professionals and exploring opportunities to make an impact. Whether it’s about collaborating on innovative projects, discussing new technologies, or sharing ideas, I’d love to hear from you
                  </p>
                  <p className="text-black-bold mb-4">I am open to work.</p>
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">Connect with me</h3>
                  <div className="flex space-x-4 align-middle justify-center">
                    <a href="http://www.linkedin.com/in/dinidu-lochana-0a7b07241" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaLinkedin className="text-gray-500 h-6 w-6" />
                    </a>
                    <a href="https://github.com/Dinidu-Lochana" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaGithub className="text-gray-500 h-6 w-6" />
                    </a>
                    <a href="mailto:24.dinidulochana@gmail.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
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
