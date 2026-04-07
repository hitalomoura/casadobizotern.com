import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import quemSomosImg from "@/assets/quem-somos.jpg";
import { Target, Eye, Heart } from "lucide-react";
import bannerQuemSomos from "@/assets/banner-quem-somos.jpg";

const QuemSomos = () => {
  return (
    <main>
      <PageBanner title="Quem Somos" subtitle="Conheça a Casa do Bizotê" bgImage={bannerQuemSomos} />

      {/* Sobre */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Sobre a Casa do Bizotê" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Casa do Bizotê é uma empresa especializada em soluções em vidro, atuando com foco em qualidade, sofisticação e excelência no atendimento. Com um portfólio completo, atende projetos residenciais e comerciais, entregando segurança, estética e durabilidade.
              </p>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Nossa História</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundada em Parnamirim-RN, a empresa nasceu com o propósito de oferecer soluções em vidro com alto padrão de qualidade. Ao longo dos anos, vem se consolidando como referência no mercado.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={quemSomosImg} alt="Equipe Casa do Bizotê" loading="lazy" width={1280} height={720} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionTitle title="Missão, Visão e Valores" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Missão",
                text: "Atender ao mercado consumidor de vidros e espelho de forma transparente e responsavel, com excelência na qualidade dos produtos e serviços, para contribuir com o desenvolvimento social e econômico da região onde atuamos.",
              },
              {
                icon: Eye,
                title: "Visão",
                text: "Ser referência em qualidade, respeito, responsabilidade e sustentabilidade no mercado de vidros e espelhos no Rio Grande do Norte.",
              },
              {
                icon: Heart,
                title: "Valores",
                text: "Integridade, honestidade e compromisso perante os clientes, acionistas, parceiros e colaboradores.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-lg p-8 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-glass-teal-light flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuemSomos;
