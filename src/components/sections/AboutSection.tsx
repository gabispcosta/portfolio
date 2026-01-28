import { MapPin, GraduationCap, Briefcase, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const quickInfo = [
  { icon: MapPin, label: 'Localização', value: 'Niterói, RJ' },
  { icon: GraduationCap, label: 'Formação', value: 'Jornalismo - UFF (6º período)' },
  { icon: Briefcase, label: 'Disponibilidade', value: 'Estágio / CLT' },
  { icon: Globe, label: 'Idiomas', value: 'Inglês Fluente' },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 lg:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
                <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/30 shadow-card relative">
                  <AvatarImage src="" alt="Gabriela Santos Pires da Costa" />
                  <AvatarFallback className="text-4xl md:text-5xl font-serif bg-secondary text-primary">
                    GC
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Text content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Sou estudante de <strong className="text-primary">Jornalismo na Universidade Federal Fluminense</strong>, 
                atualmente no 6º período. Minha trajetória inclui experiências em assessoria de imprensa, 
                produção de conteúdo digital e redação jornalística.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fluente em inglês e com domínio avançado de espanhol, busco oportunidades para contribuir 
                com equipes que valorizam informação de qualidade e narrativas envolventes. Tenho paixão 
                por contar histórias que importam e transformar dados complexos em conteúdo acessível.
              </p>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {quickInfo.map((info, index) => (
                  <Card 
                    key={info.label} 
                    className="hover-lift bg-card/50 backdrop-blur-sm border-border/50"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardContent className="p-4 flex items-start gap-3">
                      <info.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
