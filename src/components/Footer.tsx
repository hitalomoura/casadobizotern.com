import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Casa do Bizotê" className="h-16 w-auto rounded-md mb-4" />
            <p className="text-background/70 text-sm leading-relaxed">
              Soluções em vidro com sofisticação, qualidade e atendimento especializado.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", path: "/" },
                { label: "Quem Somos", path: "/quem-somos" },
                { label: "Produtos", path: "/produtos" },
                { label: "Contato", path: "/contato" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Produtos</h4>
            <ul className="space-y-2">
              {["Vidro Incolor", "Vidro Colorido", "Vidro Laminado", "Espelhos", "Box para Banheiro"].map((p) => (
                <li key={p}>
                  <Link to="/produtos" className="text-sm text-background/70 hover:text-primary transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-sm text-background/70">Andressa: (84) 9 9866-1428</li>
              <li className="text-sm text-background/70">Amanda: (84) 9 8899-6151</li>
              <li className="text-sm text-background/70">Flavia: (84) 9 9462-7408</li>
              <li className="text-sm text-background/70">Sonaly: (84) 9 9681-8393</li>
              <li className="text-sm text-background/70">Wallace: (84) 9 8829-4022</li>
              <li className="flex items-center gap-2 text-sm text-background/70 mt-3">
                <Mail size={16} className="text-primary" /> casadobizote.financeiro@hotmail.com
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin size={16} className="text-primary mt-0.5" /> BR-101, 5697 - Nova Esperança, Parnamirim - RN, CEP: 59143-360
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Casa do Bizotê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
