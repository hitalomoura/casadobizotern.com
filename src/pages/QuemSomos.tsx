import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import quemSomosImg from "@/assets/quem-somos.jpg";
import fachadaImg from "@/assets/fachada-casa-bizote.jpg";
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Casa do Bizotê nasceu em 03 de dezembro de 2014, iniciando suas atividades como uma distribuidora de vidros comuns e espelhos, localizada na região de Monte Castelo, em Parnamirim/RN.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em meados de 2016, atentos às demandas do mercado vidraceiro, ampliamos nossa atuação e passamos a produzir vidros temperados. Naquele momento, com recursos limitados, iniciamos a operação com um forno vertical — mas sempre com uma visão de crescimento bem definida.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em 2018, um novo investimento elevou significativamente o potencial do negócio: adquirimos um forno horizontal, proporcionando maior capacidade produtiva e um padrão superior de qualidade. A evolução foi evidente e, com o aumento da produção, intensificamos os investimentos em tecnologia e equipamentos de alto desempenho.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em 2019, diante de um cenário global desafiador causado pela pandemia, muitas empresas enfrentaram grandes dificuldades. No entanto, sustentados por uma estrutura comercial sólida e uma gestão financeira consistente, seguimos na contramão do mercado, alcançando um crescimento expressivo e expandindo nossas operações.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Até 2025, a Casa do Bizotê passou por importantes transformações. Conquistamos nossa sede própria, ampliando significativamente nossa estrutura produtiva com a aquisição de um novo forno, ainda mais moderno e eficiente, que proporciona maior agilidade e excelência nos processos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na nova unidade, incorporamos maquinários de alta performance, como ponte rolante, furadeiras e lapidadoras, consolidando a Casa do Bizotê como referência em produtividade e eficiência nos prazos de entrega.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seguimos com o compromisso de atender o mercado de forma transparente e responsável, oferecendo produtos e serviços com elevado padrão de qualidade, contribuindo continuamente para o desenvolvimento econômico e social.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden">
                <img src={quemSomosImg} alt="Equipe Casa do Bizotê" loading="lazy" width={1280} height={720} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={fachadaImg} alt="Fachada da sede da Casa do Bizotê" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover" />
              </div>
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
                text: "Atender ao mercado consumidor de vidros e espelhos de forma transparente e responsável, com excelência na qualidade dos produtos e serviços, para contribuir com o desenvolvimento social e econômico da região onde atuamos.",
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
