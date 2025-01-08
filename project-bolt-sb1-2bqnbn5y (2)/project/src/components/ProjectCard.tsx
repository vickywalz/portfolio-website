import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="fade-in bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={demoUrl}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
          <a
            href={githubUrl}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}