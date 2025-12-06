import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ProductCategories } from "@/components/ProductCategories";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ProductCategories />
        <Products />
        <Services />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
