// app/page.tsx
import Header from "./header/page";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import RecentWorks from "./components/RecentWorks";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Workstation from "./components/Workstation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-slate-100">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-15">
        <Hero />

        <section className="mt-20">
          <Services />
        </section>

        <section className="mt-20 rounded-lg border border-cyan-400/20 bg-slate-900/60 p-8">
          <RecentWorks />
        </section>

        <section className="mt-20">
          <WorkProcess />
        </section>

        <section className="mt-20">
          <Testimonials />
        </section>

        <section className="mt-20">
          <Workstation />
        </section>

        <section className="mt-20">
          <Projects />
        </section>

        <section className="mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}