export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: "💻",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "Django & DRF", level: "Intermediate" },
        { name: "FastAPI", level: "Basic" },
        { name: "JavaScript", level: "Basic" },
        { name: "HTML/CSS", level: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" },
        { name: "SQL Queries", level: "Intermediate" },
        { name: "Database Design", level: "Basic" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "API Testing (Postman)", level: "Intermediate" },
        { name: "Virtual Environments", level: "Intermediate" },
        { name: "Docker", level: "Basic" },
        { name: "Linux/Command Line", level: "Basic" }
      ]
    },
    {
      title: "Deployment",
      icon: "🚀",
      skills: [
        { name: "Railway", level: "Basic" },
        { name: "Heroku", level: "Basic" },
        { name: "Environment Variables", level: "Intermediate" },
        { name: "Basic Cloud Deployment", level: "Basic" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Intermediate':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Basic':
        return 'bg-text-light/10 text-text-secondary border-text-light/20';
      default:
        return 'bg-secondary text-secondary-foreground border-border';
    }
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Technologies and tools I've worked with through internships and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="professional-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-text-light italic">
            Always eager to learn new technologies and expand my skill set
          </p>
        </div>
      </div>
    </section>
  );
};