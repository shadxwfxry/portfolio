// src/app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Descent from "../components/Descent";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    // Убрали overflow-x-hidden отсюда
    <main className="min-h-screen relative selection:bg-blue-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none z-0"></div>

      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Descent />
      <Terminal />
    </main>
  );
}