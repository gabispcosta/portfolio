import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Bem-vindo ao meu portfólio
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Gabriela Santos Pires da Costa
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            Jornalista | Conteúdo Digital & Assessoria de Imprensa
          </p>

          <p className="text-lg text-muted-foreground/80 italic mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            "Transformando informação em narrativas que conectam e engajam"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <Button
              size="lg"
              className="group hover-lift"
              asChild
            >
              <a href="#contato">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Entre em contato
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift"
              asChild
            >
              <a href="#portfolio">
                Ver portfólio
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
