import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import bannerContato from "@/assets/banner-contato.jpg";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <main>
      <PageBanner title="Contato" subtitle="Entre em contato conosco" bgImage={bannerContato} />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <SectionTitle title="Fale Conosco" centered={false} />
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Vendedores</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        { name: "Andressa", phone: "(84) 9 9866-1428", wa: "5584998661428" },
                        { name: "Amanda", phone: "(84) 9 8899-6151", wa: "5584988996151" },
                        { name: "Eliana", phone: "(84) 9 9681-0471", wa: "5584996810471" },
                        { name: "Flavia", phone: "(84) 9 9462-7408", wa: "5584994627408" },
                        { name: "Sonaly", phone: "(84) 9 9681-8393", wa: "5584996818393" },
                        { name: "Wallace", phone: "(84) 9 8829-4022", wa: "5584988294022" },
                      ].map((v) => (
                        <li key={v.name} className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                              {v.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{v.name}: <a href={`https://wa.me/${v.wa}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{v.phone}</a></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">casadobizote.financeiro@hotmail.com</p>
                  </div>
                </div>
                <SectionTitle title="Nossos Endereços" centered={false} />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Matriz - Fortaleza</h3>
                    <p className="text-muted-foreground">Rua A (Lot dos Expedicionários II) 209 - Rachel de Queiroz, Fortaleza - CE, 60714-685</p>
                    <p className="text-muted-foreground">Tel: (85) 3223-2629</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Filial Natal</h3>
                    <p className="text-muted-foreground">Av. Miguel Castro, 1223 - Nossa Sra. de Nazaré, Natal - RN, 59075-740</p>
                    <p className="text-muted-foreground">Tel: (84) 3346-6941</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Filial Parnamirim</h3>
                    <p className="text-muted-foreground">BR-101, 5697 - Nova Esperança, Parnamirim - RN, CEP: 59143-360</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31788.15!2d-35.2763!3d-5.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255e116c3213f%3A0xa9f3c9e5e8c5e50e!2sParnamirim%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionTitle title="Envie uma Mensagem" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nome</label>
                  <Input value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} required placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">E-mail</label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Telefone</label>
                  <Input value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensagem</label>
                  <Textarea value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })} required rows={5} placeholder="Descreva o que você precisa..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
