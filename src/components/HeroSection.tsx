import profileImage from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image */}
            <div className="relative group animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Rhaony Ferraz"
                  className="w-80 h-80 object-cover rounded-full mx-auto border-4 border-primary/20 shadow-2xl animate-glow-pulse"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left space-y-6 animate-slide-in-right">
              <h1 className="text-5xl md:text-6xl font-bold hero-text leading-tight">
                Rhaony Ferraz
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"></div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Gestor de equipes com foco em processos complexos e desenvolvimento de soluções, 
                desenvolvendo ferramentas e gerenciando projetos globalmente, fornecendo soluções 
                técnicas e comerciais para a melhor experiência do cliente.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Pontos Fortes:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Trabalho em equipe",
                    "Pensamento claro", 
                    "Pró-atividade",
                    "Habilidades de apresentação",
                    "Excelentes habilidades de comunicação"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;