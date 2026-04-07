interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageBanner = ({ title, subtitle, bgImage }: PageBannerProps) => {
  return (
    <section className="pt-20">
      <div
        className="relative section-padding text-center bg-primary overflow-hidden"
      >
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        <div className="relative z-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">{title}</h1>
          {subtitle && <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
