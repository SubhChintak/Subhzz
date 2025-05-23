'use client'
import React, { useEffect, useState } from 'react';
import { Github, Twitter, Linkedin, Instagram, ExternalLink, FileText, Download, Link, Menu, X } from 'lucide-react';

const InfiniteTextBanner = ({ texts, className }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-slide">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="inline-block px-4">
            {texts.map((text, index) => (
              <span key={index} className="inline-block mx-4">{text}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

const MacbookWindow = ({ children, title }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-800 shadow-xl">
      <div className="bg-gray-700 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-lime-500"></div>
        </div>
        <div className="text-center flex-1 text-sm text-gray-400">{title}</div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};


const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-gray-900/95 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-lime-400">
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center space-y-8 p-8">
        <a href="#about" onClick={onClose} className="text-2xl text-lime-400 hover:text-lime-300">About</a>
        <a href="#work" onClick={onClose} className="text-2xl text-lime-400 hover:text-lime-300">Work</a>
        <a href="#projects" onClick={onClose} className="text-2xl text-lime-400 hover:text-lime-300">Projects</a>
        <a href="#blog" onClick={onClose} className="text-2xl text-lime-400 hover:text-lime-300">Blog</a>
      </div>
    </div>
  );
};  




const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    "Software Engineer", "Full-stack Developer", "Problem Solver",
    "Open Source Contributor", "Tech Enthusiast", "System Designer"
  ];

  const connectTexts = [
    "Open to new opportunities", "Let's build something amazing",
    "Available for freelance work", "Connect with me", "Drop me a message"
  ];



  const projects = [
    {
      name: "CureXpert",
      description: "Real-time cryptocurrency price tracking app built with React",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.com",
      tech: ["React", "Node.js", "WebSocket"],
      image: "https://i.pinimg.com/736x/f9/79/c2/f979c27f10d01b22dc79d4f7796d2135.jpg"
    },
    {
      name: "Femina flow",
      description: "Real-time cryptocurrency price tracking app built with React",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.com",
      tech: ["React", "Node.js", "WebSocket"],
      image: "https://i.pinimg.com/736x/ab/bc/0e/abbc0e0ca3ad08ec15e183ae14bec4a3.jpg"
    },
       {
        name: "Study Buddy",
        description: "Real-time cryptocurrency price tracking app built with React",
        github: "https://github.com/username/crypto-tracker",
        demo: "https://crypto-tracker-demo.com",
        tech: ["React", "Node.js", "WebSocket"],
        image: "https://i.pinimg.com/originals/ef/16/e4/ef16e4e68b0d3cb81e6bb8a8c3258d7e.gif"
    },
    {
      name: "TPSC Guide",
      description: "Real-time cryptocurrency price tracking app built with React",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.com",
      tech: ["React", "Node.js", "WebSocket"],
      image: "https://i.pinimg.com/736x/1b/1a/59/1b1a5949de059fdee5765b9cbddaac1c.jpg"
    },
    {
      name: "Zoom Clone",
      description: "Real-time cryptocurrency price tracking app built with React",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.com",
      tech: ["React", "Node.js", "WebSocket"],
      image: "https://i.pinimg.com/originals/45/04/28/4504285f9f12ea09bed8366f05a399d4.gif"
    },
    {
      name: "Resort Booking",
      description: "Real-time cryptocurrency price tracking app built with React",
      github: "https://github.com/username/crypto-tracker",
      demo: "https://crypto-tracker-demo.com",
      tech: ["React", "Node.js", "WebSocket"],
      image: "https://i.pinimg.com/736x/a4/99/9e/a4999ef5ce859ce272f85fb1b4e0b631.jpg"
    }
  ];

  const work = [
    {
      company: "CureXpert India",
      role: "Tech Lead",
      period: "2024 - Present",
      description: "Led backend development team, implemented microservices architecture"
    },
    // {
    //   company: "xlayer Technologies Pvt Ltd",
    //   role: "Software Developer Intern",
    //   period: "2021 - 2022",
    //   description: "Developed full-stack features using React and Node.js"
    // }
  ];

  const blogs = [
    {
      title: "Understanding the Event Loop in JavaScript",
      excerpt: "Deep dive into how JavaScript handles asynchronous operations...",
      date: "2024-01-15"
    },
    {
      title: "Building Scalable Systems with Go",
      excerpt: "Exploring Go's concurrency patterns and best practices...",
      date: "2023-12-20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono">

<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />  


      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800 p-4 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-lime-400">SubhChintak</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-lime-400">About</a>
            <a href="#work" className="hover:text-lime-400">Work</a>
            <a href="#projects" className="hover:text-lime-400">Projects</a>
            <a href="#blog" className="hover:text-lime-400">Blog</a>
          </div>
          <button 
            className="md:hidden text-lime-400"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>



      <div className="max-w-6xl mx-auto px-4 pt-24">
        {/* About Section with Macbook styling */}
        <section id="about" className="mb-20">
          <InfiniteTextBanner 
            texts={roles}
            className="text-lime-400/70 text-xl mb-8"
          />
          
          <MacbookWindow title="about.js">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <img 
                    // src="./me@j&k.jpg" 
                    src="https://i.pinimg.com/736x/b5/19/82/b519827312397d2f22bcec7d51888590.jpg"
                    alt="Profile Picture" 
                    className="rounded-lg w-48 h-48 object-cover border-2 border-lime-400"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-lime-400 text-gray-900 px-3 py-1 rounded text-sm">
                    Available
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl mb-4 text-lime-400 font-bold">Subhajit Chakraborty</h1>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Full-stack developer with a passion for building scalable systems and open-source software.
                    </p>
                    {/* <p>
                      When not coding, you'll find me contributing to open source projects and writing technical blogs.
                      I believe in clean code, continuous learning, and building things that matter.
                    </p> */}
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "React", "Node.js", "Go", "Rust", "Docker"].map((tech) => (
                        <span key={tech} className="bg-lime-400 px-3 py-1 rounded-full text-sm text-black font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MacbookWindow>
        </section>



        {/* Work Section */}
        <section id="work" className="mb-20">
          <h2 className="text-3xl text-lime-400 mb-6 font-bold">./WorkExperience</h2>
          <MacbookWindow title="work.js">
            <div className="space-y-8">
              {work.map((job, index) => (
                <div key={index} className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl mb-2 text-lime-400">{job.company}</h3>
                  <div className="text-lime-400/80 mb-2">{job.role}</div>
                  <div className="text-gray-400 mb-3">{job.period}</div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </MacbookWindow>
        </section>



        {/* Projects Section with Macbook styling
        <section id="projects" className="mb-20">
          <h2 className="text-3xl text-lime-400 mb-6 font-bold">./projects</h2>
          <MacbookWindow title="projects.js">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl mb-3 text-lime-400">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="text-lime-400 hover:underline inline-flex items-center gap-2"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-lime-400 hover:underline inline-flex items-center gap-2"
                      >
                        <Link size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a 
                href="https://github.com/yourusername"
                className="inline-flex items-center gap-2 bg-lime-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-lime-500 transition-colors"
              >
                <Github size={20} />
                View More on GitHub
              </a>
            </div>
          </MacbookWindow>
        </section> */}



        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl text-lime-400 mb-6 font-bold">./Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <MacbookWindow key={index} title={`${project.name.toLowerCase()}.js`}>
                <div className="space-y-4">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl text-lime-400">{project.name}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-lime-400 text-black font-bold px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="text-lime-400 hover:underline inline-flex items-center gap-2"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-lime-400 hover:underline inline-flex items-center gap-2"
                      >
                        <Link size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </MacbookWindow>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/yourusername"
              className="inline-flex items-center gap-2 bg-lime-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-lime-500 transition-colors"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </section>



        {/* Blog Section */}
        <section id="blog" className="mb-20">
          <h2 className="text-3xl text-lime-400 mb-6 font-bold">./blogPosts</h2>
          <MacbookWindow title="blog.js">
            <div className="space-y-8">
              {blogs.map((post, index) => (
                <div key={index} className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-xl mb-3 text-lime-400">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-lime-400 hover:underline inline-flex items-center gap-2">
                    Read more <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </MacbookWindow>
        </section>


        {/* Resume Section */}
        <section className="mb-20">
          <h2 className="text-2xl text-lime-400 mb-6">./resume.pdf</h2>
          <div className="border border-gray-700 p-6 rounded-lg hover:border-lime-400 transition-colors">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://drive.google.com/file/your-resume-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-lime-400 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FileText size={20} />
                View Resume
              </a>
              <a 
                href="your-resume-download-link" 
                download
                className="inline-flex items-center justify-center gap-2 bg-lime-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-lime-500 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </section>


        

        {/* Connect Banner */}
        <InfiniteTextBanner 
          texts={connectTexts}
          className="text-lime-400/70 text-xl py-8"
        />

        {/* Social Links */}
        <footer className="border-t border-gray-700 py-8">
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-lime-400 hover:text-gray-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-lime-400 hover:text-gray-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-lime-400 hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-lime-400 hover:text-gray-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </footer>
      </div>



        
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
