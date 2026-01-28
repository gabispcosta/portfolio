import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderei em breve!",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Vamos Conversar?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estou aberta a novas oportunidades e adoraria ouvir sobre seu projeto ou proposta. 
              Não hesite em entrar em contato!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '0.2s' }}>
              <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <a
                        href="mailto:gabi.spcosta@gmail.com"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        gabi.spcosta@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/gabriela-santos-pires-da-costa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        /gabriela-santos-pires-da-costa
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="text-foreground font-medium">
                        Niterói, Rio de Janeiro
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <div className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '0.4s' }}>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Qual o motivo do contato?"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto hover-lift"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
