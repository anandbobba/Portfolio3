export default function Skills() {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++"],
    "Web Technologies": ["React", "Node.js", "HTML/CSS", "TypeScript"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Firebase"],
    "Soft Skills": ["Problem Solving", "Team Leadership", "Communication", "Time Management"]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}