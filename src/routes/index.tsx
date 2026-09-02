import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { PainSolution } from "@/components/landing/PainSolution";
import { Differentials } from "@/components/landing/Differentials";
import { Metrics } from "@/components/landing/Metrics";
import { Comparison } from "@/components/landing/Comparison";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const title = "TechFlow — Automação de processos sem código para PMEs";
const description =
  "Automatize tarefas manuais repetitivas com blocos de arrastar e soltar. Templates por indústria, suporte no WhatsApp e até 70% mais barato que Zapier e Make.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <PainSolution />
        <Differentials />
        <Metrics />
        <Comparison />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
