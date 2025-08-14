import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { Code, Zap, Users, Lightbulb, Target, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Liderança & Gestão",
      icon: <Users className="text-primary" size={32} />,
      skills: [
        { name: "Trabalho em Equipe", level: 95 },
        { name: "Desenvolvimento de Equipes", level: 90 },
        { name: "Gestão de Projetos", level: 92 },
        { name: "Pensamento Estratégico", level: 88 }
      ],
      color: "primary"
    },
    {
      title: "Tecnologia & Desenvolvimento",
      icon: <Code className="text-accent" size={32} />,
      skills: [
        { name: "Python & JavaScript", level: 85 },
        { name: "C# & .NET", level: 80 },
        { name: "Unity 3D/VR/AR", level: 82 },
        { name: "AI/Bots Development", level: 88 }
      ],
      color: "accent"
    },
    {
      title: "Comunicação & Apresentação",
      icon: <Lightbulb className="text-secondary" size={32} />,
      skills: [
        { name: "Habilidades de Apresentação", level: 95 },
        { name: "Comunicação Executiva", level: 92 },
        { name: "Inglês Avançado", level: 90 },
        { name: "Pensamento Claro", level: 94 }
      ],
      color: "secondary"
    },
    {
      title: "Processos & Inovação",
      icon: <Cog className="text-primary" size={32} />,
      skills: [
        { name: "Pró-atividade", level: 96 },
        { name: "Processos Complexos", level: 89 },
        { name: "Implementação de Sistemas", level: 87 },
        { name: "Manutenção Industrial", level: 83 }
      ],
      color: "primary"
    }
  ];

  const highlights = [
    {
      icon: <Target className="text-accent" size={24} />,
      title: "Foco em Resultados",
      description: "Desenvolvimento de soluções técnicas e comerciais para melhor experiência do cliente"
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Inovação Tecnológica", 
      description: "Implementação de realidade aumentada, sistemas integrados e automação de processos"
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: "Liderança Global",
      description: "Gerenciamento de projetos e equipes em escala internacional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Habilidades & Competências
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinando liderança, tecnologia e inovação para criar soluções que transformam negócios
            </p>
          </div>

          {/* Highlights Section */}
          <section className="mb-16">
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center animate-fade-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold hero-text mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Grid */}
          <section>
            <div className="grid gap-8 lg:grid-cols-2">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    {category.icon}
                    <h2 className="text-2xl font-bold hero-text">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${
                              category.color === 'primary' ? 'from-primary to-primary-glow' :
                              category.color === 'accent' ? 'from-accent to-accent/80' :
                              'from-secondary to-muted-foreground'
                            }`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(index * 0.2) + (idx * 0.1)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary Section */}
          <section className="mt-16">
            <div className="glass-card p-8 rounded-2xl text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold hero-text mb-6">
                Pontos Fortes
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Trabalho em equipe</span>, 
                <span className="text-accent font-semibold"> pensamento claro</span>, 
                <span className="text-secondary font-semibold"> pró-atividade</span>, 
                <span className="text-primary font-semibold"> habilidades de apresentação</span> e 
                <span className="text-accent font-semibold"> excelentes habilidades de comunicação</span>. 
                Especialista em transformar desafios complexos em soluções inovadoras através de 
                liderança eficaz e aplicação estratégica de tecnologia.
              </p>
            </div>
          </section>
        </div>
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Skills;