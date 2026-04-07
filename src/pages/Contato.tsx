import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
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
                    <h3 className="font-heading font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(84) 99681-0471</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <MessageCircle size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/5584996810471" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(84) 99681-0471</a>
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
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-glass-teal-light flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Parnamirim - RN, Brasil</p>
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
                  <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensagem</label>
                  <Textarea value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} required rows={5} placeholder="Descreva o que você precisa..." />
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
