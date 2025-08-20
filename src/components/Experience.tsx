import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Experience = () => {
  const experiences = [
    {
      title: "Django Backend Developer Intern",
      company: "Truenary Solutions",
      location: "Nepal",
      period: "Dec 2023 - Mar 2024",
      type: "Internship",
      achievements: [
        "Developed RESTful APIs using Django REST Framework",
        "Implemented user authentication and authorization systems",
        "Collaborated with frontend developers on API integration",
        "Wrote unit tests and participated in code reviews",
        "Gained experience with Git workflows and team development"
      ],
      skills: ["Django", "DRF", "PostgreSQL", "Git", "API Development"]
    },
    {
      title: "Web Development Intern",
      company: "Prabidhee Innovations",
      location: "Nepal",
      period: "May 2023 - Jul 2023",
      type: "Internship",
      achievements: [
        "Built frontend interfaces with HTML, CSS, JavaScript",
        "Created backend admin panels with Laravel",
        "Developed basic APIs following RESTful principles",
        "Learned about database relationships and queries",
        "Collaborated with senior developers on project requirements"
      ],
      skills: ["HTML/CSS", "JavaScript", "Laravel", "MySQL", "API Design"]
    }
  ];

  const education = {
    degree: "Bachelor in Computer Application (BCA)",
    institution: "Tribhuvan University",
    location: "Nepal",
    period: "2019 - 2025",
    status: "Ongoing",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems", 
      "Web Development",
      "Software Engineering",
      "Computer Networks"
    ]
  };

  const certificates = [
    {
      title: "Introduction to Software Testing",
      institution: "University of Minnesota",
      platform: "Coursera",
      date: "Apr 25, 2025",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/N6E6BG52KD5V"
    },
    {
      title: "Foundations of Software Testing and Validation",
      institution: "University of Leeds",
      platform: "Coursera", 
      date: "Apr 18, 2025",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ANNG96BE6SZ8"
    },
    {
      title: "Black-box and White-box Testing",
      institution: "University of Minnesota",
      platform: "Coursera",
      date: "Apr 26, 2025",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/RCZ8I6B53LOM"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-section">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="professional-card p-8 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-xl font-semibold text-text-primary mb-2">{exp.title}</h4>
                    <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-text-secondary">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-text-primary mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-text-primary mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            Education
          </h3>

          <div className="professional-card p-8 hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h4 className="text-xl font-semibold text-text-primary mb-2">{education.degree}</h4>
                <p className="text-lg font-medium text-primary mb-2">{education.institution}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-text-secondary">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{education.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{education.location}</span>
                  </div>
                </div>
              </div>
              
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                {education.status}
              </span>
            </div>

            <div>
              <h5 className="font-medium text-text-primary mb-3">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="skill-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            Certificates
          </h3>

          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div key={index} className="professional-card p-6 hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-2">{cert.title}</h4>
                    <p className="text-primary font-medium mb-1">{cert.institution}</p>
                    <div className="flex items-center gap-4 text-text-secondary text-sm">
                      <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                        {cert.platform}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Show Credential
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};