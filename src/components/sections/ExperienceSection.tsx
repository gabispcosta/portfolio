import { Calendar, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Afya',
    role: 'Estagiária de Conteúdo',
    period: 'Jun/2024 - Atual',
    location: 'Rio de Janeiro',
    description: 'Atuação na produção de conteúdo para o Portal Afya, com foco em saúde e educação médica.',
    responsibilities: [
      'Redação de matérias jornalísticas sobre saúde',
      'Aplicação de técnicas de SEO para otimização de conteúdo',
      'Publicação e gestão de conteúdo no WordPress',
      'Produção e edição de material audiovisual',
    ],
    tags: ['SEO', 'WordPress', 'Redação', 'Audiovisual'],
  },
  {
    company: 'Fundação de Arte de Niterói',
    role: 'Estagiária de Assessoria de Imprensa',
    period: 'Fev/2023 - Fev/2024',
    location: 'Niterói, RJ',
    description: 'Experiência em comunicação institucional no setor público, com foco em difusão cultural.',
    responsibilities: [
      'Redação de releases e materiais de divulgação',
      'Contato direto com veículos de imprensa',
      'Cobertura jornalística de eventos culturais',
      'Gestão de redes sociais da instituição',
    ],
    tags: ['Assessoria', 'Releases', 'Social Media', 'Eventos'],
  },
  {
    company: 'Maple Bear',
    role: 'Auxiliar Educacional de Inglês',
    period: '2022',
    location: 'Niterói, RJ',
    description: 'Desenvolvimento de habilidades de comunicação e didática em ambiente bilíngue.',
    responsibilities: [
      'Suporte educacional em sala de aula bilíngue',
      'Desenvolvimento de material didático',
      'Comunicação efetiva com alunos e famílias',
    ],
    tags: ['Inglês', 'Comunicação', 'Educação'],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experiencias" className="py-20 lg:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Experiências Profissionais
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span className="text-border">•</span>
                        <Building2 className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <CardTitle className="font-serif text-xl text-foreground">
                        {exp.role}
                      </CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
