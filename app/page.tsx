import { TopBar } from "@/components/Topbar";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactMe } from "@/components/ContactMe";
import { SnowLayer } from "@/components/SnowLayer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <SnowLayer />
      <div className="scroll-smooth">
        <TopBar />
        <main className="pt-16 bg-gray-200 dark:bg-gray-900 h-full">
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <ContactMe />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
