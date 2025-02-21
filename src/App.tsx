import "./App.css";
import "./index.css";
import { RecoilRoot } from "recoil";

import Introduce from "./pages/Introduce";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Container from "./pages/Container";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import IsModal from "./pages/IsModal";
import Experience from "./pages/Experience";
import Price from "./pages/Price";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Introduce />

        <ThemeToggleButton />
        <IsModal />
        <Container>
          <Skill />
          <Project />
          <Experience />
          <Price />
        </Container>
      </div>
    </RecoilRoot>
  );
}

export default App;
