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

  const skillData = [
    
    {
      category: 'Data Analytics',
      tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      isHighlighted: false,
      description: 'I use tools like Pandas, NumPy, Matplotlib, and Seaborn to visualize and analyze complex datasets, providing actionable insights for data-driven decision-making.'
    },
    {
      category: 'AI ML Development',
      tools: ['PyTorch', 'Tensorflow', 'Scikit-Learn', "Langchain"],
      isHighlighted: true,
      description: "I build and deploy predictive models using PyTorch, TensorFlow, Scikit-Learn, and Langchain for working with LLMs to solve real-world problems."
    },
    {
      category: 'Front-end Development',
      tools: ["React.js", "Next.js", "Tailwind CSS"],
      isHighlighted: false,
      description: 'I design and develop responsive web applications using React.js, Next.js, and Tailwind CSS, ensuring an intuitive and seamless user experience across devices.'
    },
    {
      category: 'Back-end Development',
      tools: ["Node.js", "Express.js", "Spring Boot"],
      isHighlighted: true,
      description: 'I develop robust server-side applications using Node.js, Express.js, and Spring Boot, enabling smooth and scalable back-end services.'
    },
    {
      category: 'Databases',
      tools: ["MongoDB", "SQL", "Neo4j"],
      isHighlighted: false,
      description: 'I work with databases like MongoDB, SQL, and Neo4j to store, query, and manage data efficiently, supporting various application needs.'
    },
    {
      category: 'Tools',
      tools: ['Git', 'Jira', 'Figma', 'Photoshop', 'Postman'],
      isHighlighted: true,
      description: 'I use tools like Git for version control, Jira for project management, and Postman for API testing, while also incorporating Figma and Photoshop for UI/UX design.'
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
      <section id = "home" className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-wide uppercase text-gray-1000"
        >
          Let's build something together
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-2 text-5xl font-bold"
        >
          Hi, I'm <span className="text-purple-600">Dinidu</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-2 text-3xl font-semibold text-gray-1000"
        >
          A Student of Computer Science
        </motion.h2><br/>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-4xl mt-6 text-xl font-medium text-center text-black"
        >
 I'm a Computer Science undergrad at the University of Ruhuna, passionate about software engineering and eager to delve into diverse domains like software development, data analysis, and artificial intelligence. I'm enthusiastic about taking on new challenges and making a meaningful impact through my work. Let's connect and explore the exciting possibilities ahead
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex mt-6 space-x-6"
        >
          <a href="http://www.linkedin.com/in/dinidu-lochana-0a7b07241" target="_blank" rel="noopener noreferrer" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white-500">
            <FaLinkedin className="text-2xl text-gray-500" />
          </a>
          <a href="https://github.com/Dinidu-Lochana" target="_blank" rel="noopener noreferrer" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white">
            <FaGithub className="text-2xl text-gray-500" />
          </a>
          <a href="mailto:24.dinidulochana@gmail.com" className="p-3 transition bg-white rounded-full shadow-lg hover:bg-purple-300 hover:text-white">
            <FaEnvelope className="text-2xl text-gray-500" />
          </a>
          
        </motion.div>
      </section>
      {/* <Aboutme /> */}
    
        
      <div id = "about" className="flex flex-row items-center justify-center h-screen px-10 text-center">
              {/* Left Section - About Text */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="text-lg font-semibold text-purple-600">ABOUT</h3>
                <h1 className="mt-2 text-4xl font-bold">Who I Am</h1>
                <p className="max-w-3xl mt-6 text-xl text-left text-gray-1000">
                Hello! I'm Dinidu Lochana Bandara, a Computer Engineering undergraduate at the University of Ruhuna with a strong passion for software development, machine learning, and artificial intelligence. I have hands-on experience in full-stack development, mobile application development, and AI-driven solutions.

I have worked extensively with Next.js, Flutter, Node.js, Express, and MongoDB to develop scalable web and mobile applications.<br/><br/> My expertise in machine learning includes working with CNN, XGBoost, TensorFlow, and reinforcement learning to build AI-powered models for healthcare, fraud detection, and predictive analytics.

Beyond development, I am experienced in Agile methodologies, Git version control, and cloud deployment. My projects range from AI-driven chatbots and medical diagnosis tools to automated bus ticket booking systems and GPA prediction models. I am always eager to explore new technologies and contribute to impactful software solutions.
                </p>
                <p className="max-w-3xl mt-6 text-xl text-left text-gray-1000">
                  Thank you for visiting my portfolio website. Feel free to explore my projects, and please don't 
                  hesitate to reach out if you have any questions or opportunities for collaboration!
                </p>
              </div>
        
              {/* Right Section - Profile Image */}
              <div className="mt-6 md:w-1/3 md:mt-0 md:ml-12">
                <img
                  src="/dinidu_prof.jpeg"
                  alt="Profile"
                  className="shadow-lg rounded-2xl"
                />
              </div>
      </div>
          
      <div id="skills" className="flex flex-col items-center justify-center min-h-screen px-10 bg-white-100 ">
      <h2 className="text-xl font-semibold tracking-wide text-purple-600 uppercase">Skills</h2>
      <h1 className="mt-2 mb-6 text-4xl font-bold text-gray-800 dark:text-white">What I Can Do</h1>

      <div className="grid w-full grid-rows-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="p-6 transition duration-300 transform bg-white border border-gray-200 shadow-lg dark:bg-white-800 rounded-xl hover:shadow-xl hover:scale-105 dark:border-gray-700"
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
                    <li key={i} className="px-4 py-2 text-lg text-white transition bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
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

<section id="projects" className="flex flex-row items-center justify-center min-h-screen px-10 py-16 text-center">
  <div className="container px-6 mx-auto">
    <h2 className="mb-10 text-4xl font-bold text-center text-white-900">What I've Built</h2>
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 transition duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
          <p className="mt-2 text-lg text-gray-600">{project.description}</p>

          {/* Links Section */}
          <div className="flex mt-4 space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                GitHub
              </a>
            )}
            {project.research && (
              <a
                href={project.research}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Research Paper Published In IEEE
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
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




    <div id = "contact" className="flex flex-col items-center justify-center h-screen px-10 text-center">
            <h1 className="mb-8 text-4xl font-bold text-center">Get In Touch</h1>
            <div className="grid justify-center max-w-4xl grid-cols-3 gap-8 mx-auto align-middle md:grid-cols-1">
              {/* Left Card */}
              <Card className="shadow-lg animate-fade-in-up">
                <CardContent className="p-6">
                  <img 
                    src="./cont.jpg" 
                    alt="Business Card" 
                    className="w-full mb-4 rounded-lg"
                  />
                  <h2 className="mb-2 text-2xl font-bold text-gray-600">Dinidu Bandara</h2>
                  <p className="mb-4 text-gray-600">
                  I'm looking forward to connecting with like-minded professionals and exploring opportunities to make an impact. Whether it’s about collaborating on innovative projects, discussing new technologies, or sharing ideas, I’d love to hear from you
                  </p>
                  <p className="mb-4 text-black-bold">I am open to work.</p>
                  <h3 className="mb-2 text-lg font-semibold text-gray-600">Connect with me</h3>
                  <div className="flex justify-center space-x-4 align-middle">
                    <a href="http://www.linkedin.com/in/dinidu-lochana-0a7b07241" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaLinkedin className="w-6 h-6 text-gray-500" />
                    </a>
                    <a href="https://github.com/Dinidu-Lochana" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaGithub className="w-6 h-6 text-gray-500" />
                    </a>
                    <a href="mailto:24.dinidulochana@gmail.com" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                      <FaEnvelope className="w-6 h-6 text-gray-500" />
                    </a>
                    
                  </div>
                </CardContent>
              </Card>
      
             
            </div>
    </div>

      </div>

        
      
        
      
      
    
  );
}
