import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-serif text-lg text-foreground">
              Gabriela Santos Pires da Costa
            </p>
            <p className="text-sm text-muted-foreground">
              Jornalista | Conteúdo Digital & Assessoria de Imprensa
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Feito com <Heart className="h-4 w-4 text-primary inline" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
