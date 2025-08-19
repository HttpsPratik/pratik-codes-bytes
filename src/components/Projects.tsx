import { ExternalLink, Github, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Digital Wallet API - Complete Backend System",
      subtitle: "Django REST Framework • SQLite • JWT • Caching",
      description: "Production-ready digital wallet API demonstrating enterprise-level backend development skills. Built with development-focused technologies while maintaining production-ready architecture patterns.",
      keyFeatures: [
        "JWT authentication with refresh token rotation",
        "Peer-to-peer money transfers with atomic transactions",
        "QR payment system with expiration handling",
        "Comprehensive transaction management and audit trail",
        "Local memory caching and rate limiting for performance",
        "Multi-currency support with configurable fee structure",
        "IP address and device logging for audit trails",
        "Swagger/OpenAPI documentation"
      ],
      technologies: ["Django REST Framework", "SQLite", "Local Memory Caching", "JWT", "Docker-ready", "Swagger"],
      learnings: "Financial API development, race condition prevention, atomic transactions, caching strategies, security best practices, fintech compliance",
      links: {
        github: "https://github.com/HttpsPratik/Digital-Wallet-Api",
      },
      featured: true
    },
    {
      title: "Pet Adoption Platform",
      subtitle: "Django • React • PostgreSQL",
      description: "Full-stack platform connecting pet shelters with potential adopters in Nepal, featuring comprehensive pet listings and user management.",
      keyFeatures: [
        "Pet listing and management system",
        "Advanced search and filtering",
        "User profiles and authentication",
        "Contact and messaging system"
      ],
      technologies: ["Django REST Framework", "React", "PostgreSQL", "Bootstrap"],
      learnings: "Full-stack development, API integration, deployment, user experience design",
      links: {
        live: "https://petsansaar.netlify.app/",
        github: "https://github.com/HttpsPratik/Adoption-Project",
        
      },
      featured: true
    },
    {
      title: "E-Commerce Backend",
      subtitle: "Django • Local Payment APIs",
      description: "Backend system for e-commerce platform with integrated Nepali payment gateways including eSewa and Khalti.",
      keyFeatures: [
        "Product and inventory management",
        "Shopping cart functionality",
        "eSewa and Khalti integration",
        "Order processing and tracking"
      ],
      technologies: ["Django", "SQLite", "eSewa API", "Khalti API", "REST Framework"],
      learnings: "Payment processing, session management, security best practices",
      links: {
        github: "https://github.com/HttpsPratik/ecommerce-nepal",
        demo: "https://www.youtube.com/watch?v=O-TVr5cNWXA"
      },
      featured: true
    },
    {
      title: "Task Management API",
      subtitle: "FastAPI • PostgreSQL • JWT Authentication",
      description: "RESTful API for managing tasks with user authentication, featuring CRUD operations, user registration/login, and advanced task filtering capabilities.",
      keyFeatures: [
        "CRUD operations for tasks and users",
        "JWT-based authentication system",
        "Advanced filtering and search",
        "Database relationships and migrations"
      ],
      technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "JWT"],
      learnings: "API design, JWT tokens, database relationships, Docker containerization",
      links: {
        github: "https://github.com/HttpsPratik/FastApi-Task-management",
        
      },
      featured: false
    }
  ];

  const renderProjectLinks = (links: any) => {
    return (
      <div className="flex flex-wrap gap-3">
        {links.live && (
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary-light text-white"
            onClick={() => window.open(links.live, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        )}
        {links.github && (
          <Button 
            size="sm" 
            variant="outline" 
            className="border-border hover:bg-secondary"
            onClick={() => window.open(links.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        )}
        {links.docs && (
          <Button 
            size="sm" 
            variant="outline" 
            className="border-border hover:bg-secondary"
            onClick={() => window.open(links.docs, '_blank')}
          >
            <FileText className="w-4 h-4 mr-2" />
            API Docs
          </Button>
        )}
        {links.frontend && (
          <Button 
            size="sm" 
            variant="outline" 
            className="border-border hover:bg-secondary"
            onClick={() => window.open(links.frontend, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Frontend
          </Button>
        )}
        {links.demo && (
          <Button 
            size="sm" 
            variant="outline" 
            className="border-border hover:bg-secondary"
            onClick={() => window.open(links.demo, '_blank')}
          >
            <Play className="w-4 h-4 mr-2" />
            Demo Video
          </Button>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Real-world applications showcasing my backend development skills and problem-solving abilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            Featured Projects
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="professional-card p-8 hover-lift border-l-4 border-l-primary">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-text-primary mb-2">{project.title}</h4>
                  <p className="text-sm font-medium text-primary mb-4">{project.subtitle}</p>
                  <p className="text-text-secondary leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-text-primary mb-3">Key Features:</h5>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-text-primary mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-text-primary mb-2">What I Learned:</h5>
                  <p className="text-sm text-text-secondary italic">{project.learnings}</p>
                </div>

                {renderProjectLinks(project.links)}
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="professional-card p-6 hover-lift">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-text-primary mb-1">{project.title}</h4>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {renderProjectLinks(project.links)}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Interested in seeing more of my work?
            </h3>
            <p className="text-text-secondary mb-6">
              Check out my GitHub profile for additional projects and contributions
            </p>
            <a
            href="https://www.linkedin.com/in/pratik-thapa-9a7399240/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button className="bg-primary hover:bg-primary-light text-white">
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
