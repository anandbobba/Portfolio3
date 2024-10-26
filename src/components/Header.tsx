import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Jane.dev
        </a>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}