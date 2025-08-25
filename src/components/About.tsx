export const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Attractive background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/4 rounded-full blur-xl"></div>
      <div className="section-content relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">About Me</h2>
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed">
                Hi, I'm Pratik 👋<br />
                <span className="font-semibold text-text-primary">Backend Developer | Building Modern APIs</span><br />
                I'm a developer passionate about backend systems and modern technologies. I enjoy 
                building secure APIs, working with databases, and exploring AWS, AI & ML.
              </p>
            </div>

            {/* Currently Learning */}
            <div className="professional-card p-8 bg-gradient-to-r from-primary/5 to-primary-light/5 border border-primary/10">
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mr-3"></div>
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'AWS',
                  'AI & ML',
                  'Advanced Django patterns',
                  'Database optimization',
                  'Test-driven development',
                  'Basic DevOps & CI/CD',
                  'System design fundamentals'
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};