import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Casa do Bizotê" className="h-16 w-auto rounded-md mb-4" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Vidros que refletem qualidade e segurança.
            </p>

            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-background mb-2">Nossos Endereços</h4>
            <div className="h-1 w-12 rounded-full bg-primary mb-3" />
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-background/90">Matriz:</span> BR-101, 5697 - Nova Esperança, Parnamirim - RN, CEP: 59143-360
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-background/90">Filial Natal:</span> Av. Miguel Castro, 1223 - Nossa Sra. de Nazaré, Natal - RN, 59075-740 · Tel: (84) 3346-6941
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-background/90">Filial Fortaleza:</span> Rua A (Lot dos Expedicionários II) 209 - Rachel de Queiroz, Fortaleza - CE, 60714-685 · Tel: (85) 3223-2629
                </div>
              </li>
            </ul>
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
              {[
                { name: "Andressa", phone: "(84) 9 9866-1428" },
                { name: "Amanda", phone: "(84) 9 8899-6151" },
                { name: "Flavia", phone: "(84) 9 9462-7408" },
                { name: "Sonaly", phone: "(84) 9 9681-8393" },
                { name: "Wallace", phone: "(84) 9 8829-4022" },
              ].map((v) => (
                <li key={v.name} className="flex items-center gap-2 text-sm text-background/70">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-primary/20 text-primary text-[10px] font-semibold">
                      {v.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {v.name}: {v.phone}
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm text-background/70 mt-3">
                <Mail size={16} className="text-primary" /> casadobizote.financeiro@hotmail.com
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
