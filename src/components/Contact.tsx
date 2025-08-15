import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Pratik.thapa.1223@gmail.com",
      link: "mailto:Pratik.thapa.1223@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+977-945839904",
      link: "tel:+977945839904"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      username: "@HttpsPratik",
      link: "https://github.com/HttpsPratik"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      username: "pratik-thapa",
      link: "https://www.linkedin.com/in/pratik-thapa-9a7399240/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-section">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Let's Connect</h2>
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-primary rounded-full"></div>
          </div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg">
            I'm actively seeking junior backend developer opportunities. I'd love to discuss how I can contribute to your team!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="professional-card p-6 hover-lift text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-primary mb-3 p-3 bg-primary/10 rounded-full">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-text-primary mb-1">{contact.label}</p>
                        <a 
                          href={contact.link}
                          className="text-text-secondary hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Social Profiles</h3>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="professional-card p-6 hover-lift flex flex-col items-center space-y-2 min-w-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-primary p-3 bg-primary/10 rounded-full">
                      {social.icon}
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-text-primary">{social.label}</p>
                      <p className="text-text-secondary text-sm">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="professional-card p-8 text-center">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Resume</h3>
              <p className="text-text-secondary mb-6">
                Download my latest resume for detailed information about my experience and skills.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-sm text-text-light">Updated January 2025</span>
                <Button className="bg-primary hover:bg-primary-light text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};