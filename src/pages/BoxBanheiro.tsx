import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { MessageCircle, Palette, Ruler } from "lucide-react";
import boxImg from "@/assets/box-banheiro.jpg";
import bannerBox from "@/assets/banner-box.jpg";

const modelos = [
  { nome: "Box de Canto", desc: "Ideal para banheiros compactos, com aproveitamento máximo do espaço." },
  { nome: "Box Frontal", desc: "Solução elegante com abertura frontal para banheiros amplos." },
  { nome: "Box de Abrir", desc: "Porta com abertura convencional, prática e funcional." },
  { nome: "Box de Correr", desc: "Sistema deslizante suave, perfeito para otimizar espaço." },
];

const tiposVidro = ["Incolor", "Fumê", "Bronze", "Verde"];
const espessuras = ["6mm", "8mm", "10mm"];

const BoxBanheiro = () => {
  return (
    <main>
      <PageBanner title="Box para Banheiro" subtitle="Segurança, vedação e sofisticação" bgImage={bannerBox} />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src={boxImg} alt="Box para banheiro" loading="lazy" width={1280} height={720} className="w-full rounded-lg object-cover aspect-[4/3]" />
            <div>
              <SectionTitle title="Modelos de Box" centered={false} />
              <div className="space-y-4">
                {modelos.map((m) => (
                  <div key={m.nome} className="border border-border rounded-lg p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{m.nome}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionTitle title="Vidros e Espessuras" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Palette size={22} className="text-primary" />
                <h3 className="font-heading font-semibold text-lg text-foreground">Vidros</h3>
              </div>
              <ul className="space-y-2">
                {tiposVidro.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Ruler size={22} className="text-primary" />
                <h3 className="font-heading font-semibold text-lg text-foreground">Espessuras</h3>
              </div>
              <ul className="space-y-2">
                {espessuras.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Solicite seu box sob medida</h2>
          <p className="text-primary-foreground/80 mb-8">Fale com nossa equipe e receba um orçamento personalizado.</p>
          <a href="https://wa.me/5584996810471" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
              <MessageCircle size={20} className="mr-2" /> Fale no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default BoxBanheiro;
