import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="section-content px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pratik Thapa</h3>
            <p className="text-gray-300 leading-relaxed">
              Junior Backend Developer passionate about building reliable APIs and solving problems with clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:Pratik.thapa.1223@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Pratik.thapa.1223@gmail.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/HttpsPratik"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-thapa-9a7399240/"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Pratik Thapa. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};