import { PenLine, Megaphone, Smartphone, Video, FileEdit, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    icon: PenLine,
    title: 'Redação Jornalística e SEO',
    description: 'Produção de conteúdo otimizado para web, aplicando técnicas de SEO e boas práticas de redação digital.',
    level: 90,
  },
  {
    icon: Megaphone,
    title: 'Assessoria de Imprensa',
    description: 'Elaboração de releases, media training, relacionamento com veículos e cobertura de eventos.',
    level: 85,
  },
  {
    icon: Smartphone,
    title: 'Gestão de Mídias Sociais',
    description: 'Planejamento de conteúdo, análise de métricas e engajamento em plataformas digitais.',
    level: 88,
  },
  {
    icon: Video,
    title: 'Produção Audiovisual',
    description: 'Roteirização, gravação e edição básica de vídeos para mídias digitais.',
    level: 75,
  },
  {
    icon: FileEdit,
    title: 'Revisão e Edição de Textos',
    description: 'Revisão ortográfica, gramatical e de estilo, garantindo qualidade editorial.',
    level: 92,
  },
  {
    icon: Globe,
    title: 'WordPress Avançado',
    description: 'Publicação, formatação e gestão de conteúdo em plataformas CMS.',
    level: 85,
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="competencias" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Competências
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Habilidades desenvolvidas ao longo da formação acadêmica e experiências profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className={`hover-lift border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
