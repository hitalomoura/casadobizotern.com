import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Wrench, PenTool, ArrowRight, Diamond } from "lucide-react";
import { AlertTriangle } from "lucide-react";

const servicos = [
  { icon: Diamond, name: "Bizotê", desc: "Acabamento chanfrado decorativo nas bordas do vidro, agregando sofisticação e estilo." },
  { icon: Scissors, name: "Corte sob medida", desc: "Corte preciso em vidros de diversas espessuras e formatos para atender projetos específicos." },
  { icon: Sparkles, name: "Lapidação", desc: "Acabamento refinado nas bordas do vidro para maior segurança e estética." },
  { icon: Wrench, name: "Têmpera", desc: "Processo térmico que aumenta a resistência do vidro em até 5 vezes." },
  { icon: PenTool, name: "Projetos personalizados", desc: "Desenvolvimento de soluções em vidro sob medida para projetos exclusivos." },
];

const Servicos = () => {
  return (
    <main>
      <PageBanner title="Serviços" subtitle="Soluções completas em vidro" />

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle title="O que fazemos" subtitle="Oferecemos serviços completos para transformar seus ambientes" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s) => (
              <div key={s.name} className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle size={28} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Informações Importantes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li>Não nos responsabilizamos por eventuais danos em peças de terceiros.</li>
                  <li>Após a conferência e aprovação do projeto, o cliente declara estar ciente e de acordo com todas as medidas, especificações e detalhes, assumindo integral responsabilidade pelas informações aprovadas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Precisa de um serviço especializado?</h2>
          <p className="text-primary-foreground/80 mb-8">Solicite um orçamento sem compromisso.</p>
          <Link to="/contato">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              Solicitar Orçamento <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Servicos;
