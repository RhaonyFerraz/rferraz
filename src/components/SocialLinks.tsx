import { 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  Globe
} from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "CV/Resume",
      icon: FileText,
      href: "#cv",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rhaonyferraz",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rhaony-ferraz-5a181377/",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Meta-Verse",
      icon: Globe,
      href: "https://www.oculus.com/profile/Rhoany_12?d=m",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rhaonyferraz@hotmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://web.whatsapp.com/send?phone=5511912990147",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold hero-text mb-4">Conecte-se Comigo</h2>
          <p className="text-xl text-muted-foreground">
            Vamos conversar sobre oportunidades e projetos
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="social-button group-hover:scale-110 transition-all duration-300">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-white text-center">
                        {link.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl bg-gradient-to-r from-primary to-accent"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;