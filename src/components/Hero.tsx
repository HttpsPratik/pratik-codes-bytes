import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/15" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-light/15 to-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-full blur-3xl" />

      <div className="section-padding w-full relative z-10">
        <div className="section-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                  Junior Backend
                  <span className="block text-primary">Developer</span>
                </h1>
                
                <div className="flex flex-wrap gap-2 text-lg text-text-secondary">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">APIs</span>
                  <span className="skill-tag">Database Design</span>
                </div>
              </div>

              <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
                Computer Science student with hands-on backend development experience through internships. 
                Passionate about building reliable APIs and solving problems with clean, maintainable code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary group glow-on-hover"
                >
                  View Projects
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="btn-secondary glow-on-hover"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://github.com/pratikthapa" 
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift glow-on-hover"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-text-primary" />
                </a>
                <a 
                  href="https://linkedin.com/in/pratikthapa" 
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift glow-on-hover"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-text-primary" />
                </a>
                <a 
                  href="mailto:Pratik.thapa.1223@gmail.com" 
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift glow-on-hover"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5 text-text-primary" />
                </a>
                <Button
                  variant="ghost"
                  className="ml-4 text-text-secondary hover:text-text-primary backdrop-blur-sm glow-on-hover"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume PDF
                </Button>
              </div>
            </div>

            {/* Enhanced Portrait */}
            <div className="flex justify-center lg:justify-end fade-in-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-light/30 rounded-2xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-primary/20 rounded-2xl blur-xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-700"></div>
                <img
                  src={heroPortrait}
                  alt="Pratik Thapa - Junior Backend Developer"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-hero hover-lift border-4 border-white/20 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-text-light" />
      </div>
    </section>
  );
};