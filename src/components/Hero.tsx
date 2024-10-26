import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Hi, I'm Jane
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Computer Science Student
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Passionate about building innovative solutions and learning new technologies. 
            Currently pursuing my Bachelor's in Computer Science at Tech University.
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-purple-100">
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
            <p className="text-sm font-medium">Currently Learning</p>
            <p className="text-purple-600">Machine Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}