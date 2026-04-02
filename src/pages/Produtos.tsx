import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import vidroIncolor from "@/assets/vidro-incolor.jpg";
import vidroColorido from "@/assets/vidro-colorido.jpg";
import vidroLaminado from "@/assets/vidro-laminado.jpg";
import espelho from "@/assets/espelho.jpg";
import vidroPintado from "@/assets/vidro-pintado.jpg";
import vidroSolar from "@/assets/vidro-controle-solar.jpg";

const produtos = [
  {
    name: "Vidro Incolor",
    img: vidroIncolor,
    desc: "O vidro incolor é o mais versátil e utilizado. Oferece alta transparência e luminosidade aos ambientes.",
    aplicacoes: "Janelas, portas, fachadas, divisórias, tampos de mesa",
    cores: "Transparente",
    espessuras: "3mm, 4mm, 5mm, 6mm, 8mm, 10mm",
  },
  {
    name: "Vidro Colorido",
    img: vidroColorido,
    desc: "Vidros coloridos oferecem estética diferenciada e controle parcial de luminosidade, sem perder a transparência.",
    aplicacoes: "Fachadas, divisórias decorativas, portas, janelas",
    cores: "Fumê, verde, bronze, azul",
    espessuras: "4mm, 6mm, 8mm, 10mm",
  },
  {
    name: "Vidro Laminado",
    img: vidroLaminado,
    desc: "Composto por duas ou mais lâminas de vidro unidas por película de segurança. Em caso de quebra, os fragmentos ficam aderidos à película.",
    aplicacoes: "Coberturas, guarda-corpos, pisos, fachadas, sacadas",
    cores: "Incolor, fumê, verde, bronze",
    espessuras: "6mm, 8mm, 10mm, 12mm",
  },
  {
    name: "Espelhos",
    img: espelho,
    desc: "Espelhos de alta definição com acabamento premium. Ideais para ambientes residenciais e comerciais.",
    aplicacoes: "Banheiros, closets, salões, academias, decoração",
    cores: "Cristal, fumê, bronze",
    espessuras: "3mm, 4mm, 6mm",
  },
  {
    name: "Vidro Pintado",
    img: vidroPintado,
    desc: "Vidro com pintura aplicada em uma das faces, criando superfícies opacas e coloridas com visual sofisticado.",
    aplicacoes: "Revestimento de paredes, cozinhas, banheiros, móveis",
    cores: "Preto, branco, vermelho, e cores sob consulta",
    espessuras: "4mm, 6mm, 8mm",
  },
  {
    name: "Vidro de Controle Solar",
    img: vidroSolar,
    desc: "Vidro com camada metalizada que reflete os raios solares, reduzindo o aquecimento interno e a incidência de luz.",
    aplicacoes: "Fachadas, coberturas, janelas de grandes áreas",
    cores: "Prata, azul, verde, bronze",
    espessuras: "6mm, 8mm",
  },
];

const Produtos = () => {
  return (
    <main>
      <PageBanner title="Produtos" subtitle="Vidros de alta qualidade para todos os projetos" />

      {produtos.map((p, i) => (
        <section key={p.name} className={`section-padding ${i % 2 === 0 ? "" : "bg-muted"}`}>
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <img src={p.img} alt={p.name} loading="lazy" width={640} height={640} className="w-full rounded-lg object-cover aspect-[4/3]" />
              </div>
              <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{p.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold text-foreground">Aplicações:</span> <span className="text-muted-foreground">{p.aplicacoes}</span></p>
                  <p><span className="font-semibold text-foreground">Cores:</span> <span className="text-muted-foreground">{p.cores}</span></p>
                  <p><span className="font-semibold text-foreground">Espessuras:</span> <span className="text-muted-foreground">{p.espessuras}</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
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
