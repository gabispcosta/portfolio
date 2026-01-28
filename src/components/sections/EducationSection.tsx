import { GraduationCap, Award, BookOpen, Languages } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = {
  degree: {
    title: 'Bacharelado em Jornalismo',
    institution: 'Universidade Federal Fluminense (UFF)',
    period: '2022 - Atual',
    status: '6º Período',
  },
  research: {
    title: 'A imprensa carioca nas margens',
    type: 'Iniciação Científica - FAPERJ',
    description: 'Pesquisa sobre a cobertura jornalística de comunidades periféricas no Rio de Janeiro.',
  },
  extension: {
    title: 'Projeto Manchetempo',
    role: 'Redatora e Social Media',
    description: 'Produção de conteúdo jornalístico sobre atualidades e gestão de redes sociais do projeto.',
  },
};

const courses = [
  {
    title: 'Jornalismo Humanitário',
    institution: 'ACNUR / PUC Minas',
    year: '2023',
  },
  {
    title: 'Introdução ao Jornalismo Digital',
    institution: 'Reuters',
    year: '2023',
  },
];

const languages = [
  { name: 'Português', level: 'Nativo', percentage: 100 },
  { name: 'Inglês', level: 'Fluente', percentage: 95 },
  { name: 'Espanhol', level: 'Avançado', percentage: 80 },
  { name: 'Francês', level: 'Básico', percentage: 30 },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="formacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Formação & Cursos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column - Education */}
            <div className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '0.2s' }}>
              {/* Main degree */}
              <Card className="hover-lift border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-xl text-foreground">
                        {education.degree.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{education.degree.institution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Badge variant="secondary">{education.degree.period}</Badge>
                    <Badge className="bg-primary/20 text-primary border-0">
                      {education.degree.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Research */}
              <Card className="hover-lift bg-card/80 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/30">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {education.research.type}
                      </p>
                      <CardTitle className="font-serif text-lg text-foreground">
                        {education.research.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{education.research.description}</p>
                </CardContent>
              </Card>

              {/* Extension */}
              <Card className="hover-lift bg-card/80 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/30">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Projeto de Extensão
                      </p>
                      <CardTitle className="font-serif text-lg text-foreground">
                        {education.extension.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{education.extension.description}</p>
                  <Badge variant="outline">{education.extension.role}</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Courses and Languages */}
            <div className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '0.4s' }}>
              {/* Courses */}
              <Card className="hover-lift bg-card/80 border-border/50">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Cursos Complementares
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.title} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <div>
                        <p className="font-medium text-foreground">{course.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {course.institution} • {course.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="hover-lift bg-card/80 border-border/50">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-foreground flex items-center gap-2">
                    <Languages className="h-5 w-5 text-primary" />
                    Idiomas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${lang.percentage}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
