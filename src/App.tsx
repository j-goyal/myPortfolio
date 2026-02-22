import { TopBar } from "./assets/components/Topbar";
import { AboutMe } from "./assets/components/AboutMe";
import { Experience } from "./assets/components/Experience";
import { Projects } from "./assets/components/Projects";
import { Achievements } from "./assets/components/Achievements";
import { Skills } from "./assets/components/Skills";
import { ThemeProvider } from "./assets/components/ThemeProvider";
import "./App.css";
import { ContactMe } from "./assets/components/ContactMe";
import { SnowLayer } from "./assets/components/SnowLayer";

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
