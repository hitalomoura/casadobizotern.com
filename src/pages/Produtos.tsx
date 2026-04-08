import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Ruler } from "lucide-react";
import vidroIncolor from "@/assets/vidro-incolor.jpg";
import vidroColorido from "@/assets/vidro-colorido.jpg";
import vidroLaminado from "@/assets/vidro-laminado.jpg";
import espelho from "@/assets/espelho.jpg";
import vidroPintado from "@/assets/vidro-pintado.jpg";
import vidroSolar from "@/assets/vidro-controle-solar.jpg";
import boxImg from "@/assets/box-banheiro.jpg";
import bannerProdutos from "@/assets/banner-produtos.jpg";

const produtos = [
  {
    name: "Vidro Incolor",
    subtitulo: "Comum e Temperado",
    img: vidroIncolor,
    desc: "Transparência e versatilidade para qualquer projeto.",
    aplicacoes: "Portas, janelas, divisórias, móveis, vitrines",
    cores: "Incolor",
    espessuras: "4mm | 6mm | 8mm | 10mm | 12mm | 15mm",
  },
  {
    name: "Vidro Colorido",
    subtitulo: "Comum e Temperado",
    img: vidroColorido,
    desc: "Mais estilo e personalidade para seus ambientes.",
    aplicacoes: "Fachadas, móveis, portas, divisórias",
    cores: "Verde, Fumê",
    espessuras: "4mm | 6mm | 8mm | 10mm",
  },
  {
    name: "Vidro Laminado",
    subtitulo: "Comum",
    img: vidroLaminado,
    desc: "Segurança e beleza em perfeita harmonia.",
    aplicacoes: "Guarda-corpos, fachadas, coberturas",
    cores: "Incolor, verde, fumê refletivo, bronze refletivo",
    espessuras: "6mm (3+3) | 8mm (4+4)",
  },
  {
    name: "Espelhos",
    subtitulo: "",
    img: espelho,
    desc: "Amplitude e sofisticação para qualquer ambiente.",
    aplicacoes: "Banheiros, salas, móveis",
    cores: "Prata, bronze, fumê",
    espessuras: "3mm | 4mm",
  },
  {
    name: "Vidro Pintado",
    subtitulo: "Comum",
    img: vidroPintado,
    desc: "Design moderno e acabamento sofisticado.",
    aplicacoes: "Paredes, cozinhas, móveis",
    cores: "Branco, preto, nude, bronze",
    espessuras: "4mm",
  },
  {
    name: "Vidro de Controle Solar",
    subtitulo: "Refletivos",
    img: vidroSolar,
    desc: "Menor incidência térmica com maior conforto interno.",
    aplicacoes: "Fachadas, janelas, coberturas",
    cores: "Bronze, fumê, azul (Sun Light)",
    espessuras: "4mm | 6mm | 8mm | 10mm",
  },
];

const Produtos = () => {
  return (
    <main>
      <PageBanner title="Produtos" subtitle="Vidros de alta qualidade para todos os projetos" bgImage={bannerProdutos} />

      {produtos.map((p, i) => (
        <section key={p.name} className={`section-padding ${i % 2 === 0 ? "" : "bg-muted"}`}>
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <img src={p.img} alt={p.name} loading="lazy" width={640} height={640} className="w-full rounded-lg object-cover aspect-[4/3]" />
              </div>
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">{p.name}</h2>
                {p.subtitulo && <p className="text-sm font-medium text-primary mb-4">{p.subtitulo}</p>}
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Sparkles size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Aplicações</span>
                      <p className="text-muted-foreground">{p.aplicacoes}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Cores</span>
                      <p className="text-muted-foreground">{p.cores}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Espessuras</span>
                      <p className="text-muted-foreground">{p.espessuras}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary section-padding text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Não encontrou o que procura?</h2>
          <p className="text-primary-foreground/80 mb-8">Entre em contato e solicite um orçamento personalizado.</p>
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

export default Produtos;
