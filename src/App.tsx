import { TopBar } from "./assets/components/Topbar";
import { AboutMe } from "./assets/components/AboutMe";
import { Experience } from "./assets/components/Experience";
import { Projects } from "./assets/components/Projects";
import { Achievements } from "./assets/components/Achievements";

function App() {
  return (
    <div className="scroll-smooth">
      <TopBar />
      <main className="pt-16 #fafafa h-full">
        <AboutMe/>
        <Experience />
        <Projects />
        <Achievements />
      </main>
    </div>
  );
}
export default App;
