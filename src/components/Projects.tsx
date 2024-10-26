import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Study Assistant",
    description: "A machine learning-powered study assistant that helps students organize and optimize their learning process.",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    title: "EcoTrack",
    description: "Mobile app for tracking personal carbon footprint and suggesting eco-friendly alternatives.",
    tech: ["React Native", "Firebase", "Express"],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    title: "StudyGroup Finder",
    description: "Platform connecting university students for collaborative study sessions.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    github: "https://github.com",
    live: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}