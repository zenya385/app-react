import Section from "./components/Section";
import PaintingList from "./components/PaintingList/PaintingList";
import paintings from "../src/paintings.json";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div>
      <Counter step={2} />
      <Dropdown />
      <Section style={{ textAlign: "center" }} title="Gallery">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Top gallery" />
    </div>
  );
}

export default App;
