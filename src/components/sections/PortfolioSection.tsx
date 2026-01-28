import { ExternalLink, FileText, Newspaper, Radio } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'Matérias Portal Afya',
    category: 'Redação Digital',
    description: 'Artigos sobre saúde, medicina e educação médica publicados no portal da Afya.',
    icon: Newspaper,
    tags: ['SEO', 'Saúde', 'WordPress'],
    link: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Produções Manchetempo',
    category: 'Projeto Acadêmico',
    description: 'Reportagens e conteúdo jornalístico produzido para o projeto de extensão da UFF.',
    icon: FileText,
    tags: ['Jornalismo', 'Atualidades'],
    link: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Cobertura Cultural FAN',
    category: 'Assessoria de Imprensa',
    description: 'Releases e coberturas de eventos culturais da Fundação de Arte de Niterói.',
    icon: Radio,
    tags: ['Eventos', 'Cultura', 'Releases'],
    link: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Iniciação Científica',
    category: 'Pesquisa Acadêmica',
    description: 'Pesquisa sobre representação de comunidades periféricas na mídia carioca.',
    icon: FileText,
    tags: ['Pesquisa', 'FAPERJ'],
    link: '#',
    featured: false,
  },
];

export function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-20 lg:py-32 gradient-section">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Portfólio
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção de trabalhos e projetos desenvolvidos ao longo da minha trajetória profissional e acadêmica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className={`group hover-lift overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${item.featured ? 'md:row-span-1' : ''}`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Decorative gradient */}
                <div className="h-2 bg-gradient-to-r from-primary/60 via-accent to-primary/60" />
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.category}
                        </p>
                        <CardTitle className="font-serif text-xl text-foreground">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0"
                    asChild
                  >
                    <a href={item.link} className="flex items-center gap-2">
                      Ver mais
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note about more works */}
          <div className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.6s' }}>
            <p className="text-muted-foreground text-sm">
              ✨ Mais trabalhos serão adicionados em breve. Entre em contato para conhecer projetos específicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
