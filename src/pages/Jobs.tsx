import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { ExternalLink, Calendar, Award } from "lucide-react";

const Jobs = () => {
  const experiences = [
    {
      title: "Gerente de processos",
      company: "Uniopack",
      period: "2022-2024",
      website: "https://www.uniopack.com.br/",
      responsibilities: [
        "Gerenciamento de manutenção compras e projetos",
        "Reuniões semanais com diretoria/investidores",
        "Elaboração de apresentações para investidores",
        "Implementação de novos sistemas"
      ],
      achievement: "Executamos uma estratégia de aprimoramento de nossas tecnologias, para obter mais dinamismo entre os nossos clientes e desenvolvedores."
    },
    {
      title: "Gerente de projetos",
      company: "Bridge Trade - Irlanda",
      period: "2018 - 2022",
      website: "https://bridgetrade.biz/",
      responsibilities: [
        "Gerenciamento de fluxo de projetos",
        "Elaboração de apresentações para investidores",
        "Envio de remessas para o exterior",
        "Revisão de projetos e novas tecnologias",
        "Desenvolvimento de equipes",
        "Análise de negócios"
      ],
      achievement: "Criamos um programa que facilita a integração de pequenas e médias empresas, que buscam comércio com o exterior."
    },
    {
      title: "Gerente de manutenção",
      company: "Textil União Ltda",
      period: "2015 - 2017",
      website: "http://www.textiluniao.ind.br/",
      responsibilities: [
        "Gerenciamento de sistemas",
        "Reuniões semanais com a diretoria e clientes",
        "Implementação de novos sistemas"
      ],
      achievement: "Desenvolvemos uma integração digital onde adotamos sistemas de realidade aumentada nos setores de manutenção."
    },
    {
      title: "Gerente de produção",
      company: "Embreagens Ferraz Ltda",
      period: "2012 - 2014",
      website: "http://www.embreagemferraz.com.br/",
      responsibilities: [
        "Gerenciamento de produção",
        "Reuniões semanais com a diretoria",
        "Implementação de novos sistemas"
      ],
      achievement: "Integramos sistemas para obter melhor comunicação interna entre as atividades de vendas e o fluxo na produção."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-6">
              Experiência Profissional
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma jornada de liderança, inovação e transformação digital em diferentes setores
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl animate-fade-in hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold hero-text mb-2">
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl text-foreground font-semibold">
                        {exp.company}
                      </h3>
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Responsabilidades
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-accent" size={20} />
                      <h4 className="text-lg font-semibold text-accent">
                        Conquistas
                      </h4>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {exp.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Jobs;