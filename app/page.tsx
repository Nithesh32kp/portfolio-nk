// app/page.tsx
import Header from "./header/page";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-slate-100">
      <Header />

      <main className="mx-auto flex-1 w-full max-w-7xl px-6 py-15">
        <ScrollReveal delay={0}>
          <Hero />
        </ScrollReveal>

        <section className="mt-20 scroll-mt-24">
          <ScrollReveal delay={80}>
            <Services />
          </ScrollReveal>
        </section>

        <section className="mt-20 scroll-mt-24">
          <ScrollReveal delay={160}>
            <WorkProcess />
          </ScrollReveal>
        </section>

        {/* <section className="mt-20">
          <ScrollReveal delay={240}>
            <Workstation />
          </ScrollReveal>
        </section> */}

        <section className="mt-20 scroll-mt-24">
          <ScrollReveal delay={280}>
            <Projects />
          </ScrollReveal>
        </section>

        <section className="mt-20 scroll-mt-24">
          <ScrollReveal delay={320}>
            <Contact />
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}