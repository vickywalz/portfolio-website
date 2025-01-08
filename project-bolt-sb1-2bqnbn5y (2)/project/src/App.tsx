import React, { useEffect } from 'react';
import { Code2, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { SkillBadge } from './components/SkillBadge';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality and payment integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Firebase", "CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "API", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="binary-rain"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <Code2 className="w-16 h-16 mx-auto mb-8 text-cyan-400 floating" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text pulse">
              VICTORY WORLU
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Web Developer
            </p>
            <a href="#portfolio" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all scale-hover">
              View My Work
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800&q=80"
                alt="Victory Worlu"
                className="rounded-2xl shadow-2xl scale-hover"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with 2 years of experience in building
                modern web applications. I specialize in creating responsive, user-friendly
                interfaces using cutting-edge technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <SkillBadge text="HTML5" />
                <SkillBadge text="CSS3" />
                <SkillBadge text="JavaScript" />
                <SkillBadge text="React" />
                <SkillBadge text="Node.js" />
                <SkillBadge text="MongoDB" />
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  victory.worlu@example.com
                </a>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors rotate-hover">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors rotate-hover">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors rotate-hover">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;