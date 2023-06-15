import Section from "./components/Section";
import PaintingList from "./components/PaintingList/PaintingList";
import paintings from "../src/paintings.json";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <Counter step={3} />

      <Section style={{ textAlign: "center" }} title="Gallery">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Top gallery" />
    </div>
  );
}

export default App;
