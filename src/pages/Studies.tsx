import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { GraduationCap, Award, ExternalLink, Code, Wrench, Brain } from "lucide-react";

const Studies = () => {
  const education = [
    {
      title: "Engenharia da computação",
      institution: "Universidade UNIVESP",
      period: "2021 (cursando)",
      status: "Em andamento"
    },
    {
      title: "Administração",
      institution: "Infinity School (Irlanda)",
      period: "2018-2021",
      status: "Concluído"
    },
    {
      title: "Inglês avançado",
      institution: "Infinity School (Irlanda)",
      period: "2017-2019",
      status: "Concluído"
    }
  ];

  const certifications = [
    {
      category: "Programação & Desenvolvimento",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        "Python - JavaScript - Node.js",
        "HTML - CSS - C# - .NET",
        "Git - Github",
        "Desenvolvedor de AI/Bots",
        "ChatBot/Twilio",
        "Unity 2D 3D VR AR - Simulação Engineering",
        "Solidity"
      ]
    },
    {
      category: "Engenharia & Sistemas",
      icon: <Wrench className="text-accent" size={24} />,
      skills: [
        "Gerenciamento de manutenção mecânica, elétrica e química",
        "AutoCad - Solidworks",
        "Análista de PCP",
        "Gravity Stacks"
      ]
    },
    {
      category: "Tecnologia & Segurança",
      icon: <Brain className="text-secondary" size={24} />,
      skills: [
        "Cibersegurança - Bootcamp Cisco",
        "Cloud Computing - Mikrotik",
        "Trello"
      ]
    }
  ];

  const academicProject = {
    title: "Coordenação do Projeto Baja",
    institution: "Universidade Unifeg",
    period: "2014-2017",
    achievement: "Mérito acadêmico",
    videoUrl: "https://youtu.be/HtjnH3FAjN0"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Formação & Estudos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conhecimento em constante evolução através de educação formal, certificações e projetos práticos
            </p>
          </div>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-3xl font-bold hero-text">Graduação</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl animate-fade-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {edu.title}
                  </h3>
                  <p className="text-foreground font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground mb-3">
                    {edu.period}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === "Em andamento" 
                      ? "bg-accent/20 text-accent" 
                      : "bg-primary/20 text-primary"
                  }`}>
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-accent" size={32} />
              <h2 className="text-3xl font-bold hero-text">Especialização & Certificação</h2>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {cert.icon}
                    <h3 className="text-xl font-bold text-foreground">
                      {cert.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {cert.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Project Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-secondary" size={32} />
              <h2 className="text-3xl font-bold hero-text">Projeto Acadêmico</h2>
            </div>
            
            <div className="glass-card p-8 rounded-2xl animate-fade-in max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold hero-text mb-4">
                {academicProject.title}
              </h3>
              <p className="text-xl text-foreground font-semibold mb-2">
                {academicProject.institution}
              </p>
              <p className="text-muted-foreground mb-4">
                {academicProject.period}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">
                  {academicProject.achievement}
                </span>
                
                <a 
                  href={academicProject.videoUrl}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  Baja YouTube
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Studies;