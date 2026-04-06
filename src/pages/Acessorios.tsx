import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import acessoriosImg from "@/assets/acessorios.jpg";

const itens = [
  { name: "Puxadores", desc: "Puxadores com design moderno para portas e boxes de vidro." },
  { name: "Suportes", desc: "Suportes para prateleiras, tampos e painéis de vidro." },
  { name: "Silicone", desc: "Silicone de alta qualidade para vedação e acabamento em vidro." },
  { name: "Fixa Espelho", desc: "Sistemas de fixação seguros e discretos para espelhos." },
  { name: "Kit Alumínio para Box", desc: "Kits completos em alumínio para instalação de boxes." },
];

const acabamentos = ["Cromado", "Preto", "Inox", "Dourado", "Branco"];

const Acessorios = () => {
  return (
    <main>
      <PageBanner title="Acessórios" subtitle="Ferragens e acessórios para vidro com acabamento premium" />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle title="Linha de Acessórios" centered={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {itens.map((item) => (
                  <div key={item.name} className="border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={acessoriosImg} alt="Acessórios para vidro" loading="lazy" width={640} height={640} className="w-full rounded-lg object-cover aspect-square mb-8" />
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Acabamentos Disponíveis</h3>
                <div className="flex flex-wrap gap-3">
                  {acabamentos.map((a) => (
                    <span key={a} className="bg-background border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Precisa de acessórios específicos?</h2>
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

export default Acessorios;
