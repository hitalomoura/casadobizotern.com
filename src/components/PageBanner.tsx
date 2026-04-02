interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="pt-20">
      <div className="bg-primary section-padding text-center">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{title}</h1>
        {subtitle && <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
