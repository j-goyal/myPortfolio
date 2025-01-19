import { TopBar } from "./assets/components/Topbar";
import { AboutMe } from "./assets/components/AboutMe";
import { Experience } from "./assets/components/Experience";
import { Projects } from "./assets/components/Projects";
import { Achievements } from "./assets/components/Achievements";
import { Skills } from "./assets/components/Skills";

function App() {
  return (
    <div className="scroll-smooth">
      <TopBar />
      <main className="pt-16 #f6f6f6 h-full">
        <AboutMe/>
        <Skills/>
        <Experience />
        <Projects />
        <Achievements />
      </main>
    </div>
  );
}
export default App;
