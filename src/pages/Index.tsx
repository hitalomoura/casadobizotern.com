import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { Award, Ruler, HeadphonesIcon, Wrench, ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-glass.jpg";
import boxImg from "@/assets/box-banheiro.jpg";
import vidroIncolor from "@/assets/vidro-incolor.jpg";
import vidroColorido from "@/assets/vidro-colorido.jpg";
import vidroLaminado from "@/assets/vidro-laminado.jpg";
import espelho from "@/assets/espelho.jpg";
import vidroPintado from "@/assets/vidro-pintado.jpg";
import vidroSolar from "@/assets/vidro-controle-solar.jpg";

const diferenciais = [
  { icon: Award, title: "Qualidade", desc: "Materiais de alto padrão e acabamento impecável." },
  { icon: Ruler, title: "Projetos Personalizados", desc: "Soluções sob medida para cada ambiente." },
  { icon: Wrench, title: "Prazo de Entrega Reduzido", desc: "Agilidade e compromisso com os prazos." },
  { icon: HeadphonesIcon, title: "Atendimento Especializado", desc: "Equipe técnica qualificada e consultiva." },
];

const produtos = [
  { name: "Vidro Incolor", img: vidroIncolor },
  { name: "Vidro Colorido", img: vidroColorido },
  { name: "Vidro Laminado", img: vidroLaminado },
  { name: "Espelhos", img: espelho },
  { name: "Vidro Pintado", img: vidroPintado },
  { name: "Vidro de Controle Solar", img: vidroSolar },
];

const servicos = [
  "Corte sob medida",
  "Lapidação",
  "Instalação",
  "Consultoria técnica",
  "Projetos personalizados",
  "Manutenção",
];

const clientes = [
  "Construtora Alpha", "Arquitetura Studio", "Design Interior", "Vidraçaria Premium",
  "Engenharia & Cia", "Projeto Conceito",
];

const Index = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <img src={heroImg} alt="Arquitetura em vidro" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 glass-overlay" />
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Soluções em Vidros com Sofisticação e Qualidade
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
              Transformamos ambientes com design, segurança e acabamento premium.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contato">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8">
                  Solicitar Orçamento
                </Button>
              </Link>
              <a href="https://wa.me/5584996810471" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8">
                  <MessageCircle size={20} className="mr-2" /> Fale no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionTitle title="Nossos Diferenciais" subtitle="Compromisso com excelência em cada detalhe" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d) => (
              <div key={d.title} className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-glass-teal-light flex items-center justify-center mx-auto mb-5">
                  <d.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle title="Nossos Produtos" subtitle="Vidros de alta qualidade para todos os tipos de projeto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((p) => (
              <Link to="/produtos" key={p.name} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={p.img} alt={p.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/55 transition-colors flex items-end p-6">
                  <h3 className="font-heading font-semibold text-lg text-background">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/produtos">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold">
                Ver todos os produtos <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Box para Banheiro */}
      <section className="relative">
        <img src={boxImg} alt="Box para banheiro" loading="lazy" width={1280} height={720} className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 glass-overlay flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Box para Banheiro
              </h2>
              <p className="text-primary-foreground/85 text-lg mb-6">
                Modelos sob medida com vidro temperado de alta resistência. Design moderno e segurança para seu banheiro.
              </p>
              <Link to="/box-banheiro">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
                  Ver modelos <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle title="Nossos Serviços" subtitle="Soluções completas em vidro para seu projeto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s) => (
              <div key={s} className="border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-sm transition-all">
                <h3 className="font-heading font-semibold text-foreground">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionTitle title="Nossos Clientes" subtitle="Empresas e clientes que confiam na Casa do Bizotê" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientes.map((c) => (
              <div key={c} className="bg-background rounded-lg p-6 flex items-center justify-center text-center shadow-sm">
                <span className="font-heading font-semibold text-sm text-muted-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary section-padding text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Solicite seu orçamento agora mesmo
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp e receba um atendimento personalizado.
          </p>
          <a href="https://wa.me/5584996810471" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-10">
              <MessageCircle size={22} className="mr-2" /> Fale no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Index;
