import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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
      username: "@pratikthapa",
      link: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      username: "pratik-thapa",
      link: "#"
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="professional-card p-4 hover-lift">
                    <div className="flex items-center">
                      <div className="text-primary mr-4">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{contact.label}</p>
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
              <h3 className="text-xl font-semibold text-text-primary mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="professional-card p-4 hover-lift flex items-center space-x-3 flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-primary">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">{social.label}</p>
                      <p className="text-text-secondary text-xs">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="professional-card p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Resume</h3>
              <p className="text-text-secondary mb-4">
                Download my latest resume for detailed information about my experience and skills.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-light">Updated January 2025</span>
                <Button className="bg-primary hover:bg-primary-light text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="professional-card p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full min-h-32"
                  placeholder="Tell me about the opportunity or how I can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white py-3 glow-on-hover"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};